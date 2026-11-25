"""ODD HOOPERS — Amazon Merch on Demand 登録用の共通ロジック."""

from __future__ import annotations

import csv
import hashlib
import json
from dataclasses import dataclass
from datetime import datetime, timezone, timedelta
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
SOURCE_CSV = REPO_ROOT / "records" / "merch" / "odd_hoopers_amazon_jp.csv"
LISTINGS_CSV = REPO_ROOT / "records" / "merch" / "odd_hoopers_listings.csv"
IMAGES_ROOT = REPO_ROOT / "public" / "designshelf" / "images" / "odd_hoopers"

IMAGE_FILENAME_TO_DIR: dict[str, str] = {
    "basketball_cat.png": "basketball_cat",
    "basketball_pirates1.png": "basketball_pirates1",
    "basketball_pirates2.png": "basketball_pirates2",
    "do_you_love.png": "do_you_love",
    "ninja_basketball1.png": "ninja_basketball1",
    "ninja_basketball2.png": "ninja_basketball2",
    "panda_in_ball.png": "panda_in_ball",
    "pandunk.png": "pandunk",
    "slam_pandunk1.png": "slampandunk1",
    "slam_pandunk2.png": "slampandunk2",
}

LISTING_FIELDS = [
    "design_key",
    "image_filename",
    "image_path",
    "sha256",
    "item_type",
    "marketplace",
    "brand",
    "title",
    "bullet_1",
    "bullet_2",
    "description",
    "status",
    "merch_design_id",
    "amazon_url",
    "error",
    "registered_at",
    "notes",
]


def jst_now_iso() -> str:
    jst = timezone(timedelta(hours=9))
    return datetime.now(jst).replace(microsecond=0).isoformat()


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def resolve_artwork_path(image_filename: str) -> Path:
    folder = IMAGE_FILENAME_TO_DIR.get(image_filename)
    if not folder:
        raise KeyError(f"unknown image_filename: {image_filename}")
    amazon_path = IMAGES_ROOT / folder / "amazon" / image_filename
    if amazon_path.is_file():
        return amazon_path
    design_path = IMAGES_ROOT / folder / "design.png"
    if design_path.is_file():
        return design_path
    raise FileNotFoundError(f"no artwork for {image_filename} under {IMAGES_ROOT / folder}")


@dataclass(frozen=True)
class SourceRow:
    image_filename: str
    brand: str
    title: str
    bullet_1: str
    bullet_2: str
    description: str


def read_source_rows() -> list[SourceRow]:
    with SOURCE_CSV.open(encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        rows: list[SourceRow] = []
        for row in reader:
            if not row.get("image_filename", "").strip():
                continue
            rows.append(
                SourceRow(
                    image_filename=row["image_filename"].strip(),
                    brand=row["brand"].strip(),
                    title=row["title"].strip(),
                    bullet_1=row["bullet_1"].strip(),
                    bullet_2=row["bullet_2"].strip(),
                    description=row["description"].strip(),
                )
            )
        return rows


def read_listings() -> list[dict[str, str]]:
    if not LISTINGS_CSV.is_file():
        return []
    with LISTINGS_CSV.open(encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def write_listings(rows: list[dict[str, str]]) -> None:
    LISTINGS_CSV.parent.mkdir(parents=True, exist_ok=True)
    with LISTINGS_CSV.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=LISTING_FIELDS, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def sync_listings_from_source(*, preserve_status: bool = True) -> list[dict[str, str]]:
    existing_by_key: dict[str, dict[str, str]] = {}
    existing_by_sha: dict[str, dict[str, str]] = {}
    if preserve_status and LISTINGS_CSV.is_file():
        for row in read_listings():
            existing_by_key[row.get("design_key", "")] = row
            sha = row.get("sha256", "")
            if sha:
                existing_by_sha[sha] = row

    out: list[dict[str, str]] = []
    for i, src in enumerate(read_source_rows(), start=1):
        design_key = f"odd-hoopers-{i:04d}"
        artwork = resolve_artwork_path(src.image_filename)
        digest = sha256_file(artwork)
        rel_path = str(artwork.relative_to(REPO_ROOT))

        prior = existing_by_key.get(design_key) or existing_by_sha.get(digest)
        status = "pending"
        notes = ""
        merch_design_id = ""
        amazon_url = ""
        error = ""
        registered_at = ""

        if prior:
            status = prior.get("status") or "pending"
            notes = prior.get("notes") or ""
            merch_design_id = prior.get("merch_design_id") or ""
            amazon_url = prior.get("amazon_url") or ""
            error = prior.get("error") or ""
            registered_at = prior.get("registered_at") or ""
            if status == "registered" and registered_at:
                notes = (notes + " | " if notes else "") + "duplicate_sync_skipped"

        if digest in existing_by_sha and existing_by_sha[digest].get("design_key") != design_key:
            status = "skipped_duplicate"
            error = error or "same_sha256_as_prior_listing"
            notes = (notes + " | " if notes else "") + f"sha256={digest[:12]}"

        out.append(
            {
                "design_key": design_key,
                "image_filename": src.image_filename,
                "image_path": rel_path,
                "sha256": digest,
                "item_type": "Tシャツ",
                "marketplace": "Amazon.co.jp",
                "brand": src.brand,
                "title": src.title,
                "bullet_1": src.bullet_1,
                "bullet_2": src.bullet_2,
                "description": src.description,
                "status": status,
                "merch_design_id": merch_design_id,
                "amazon_url": amazon_url,
                "error": error,
                "registered_at": registered_at,
                "notes": notes.strip(" |"),
            }
        )

    write_listings(out)
    return out


def update_listing(design_key: str, **fields: str) -> None:
    rows = read_listings()
    found = False
    for row in rows:
        if row["design_key"] == design_key:
            row.update({k: v for k, v in fields.items() if k in LISTING_FIELDS})
            found = True
            break
    if not found:
        raise KeyError(design_key)
    write_listings(rows)


def pending_listings() -> list[dict[str, str]]:
    return [
        row
        for row in read_listings()
        if row.get("status") in ("", "pending", "error")
    ]


def summary_json() -> str:
    rows = read_listings()
    counts: dict[str, int] = {}
    for row in rows:
        s = row.get("status") or "unknown"
        counts[s] = counts.get(s, 0) + 1
    return json.dumps({"total": len(rows), "by_status": counts}, ensure_ascii=False, indent=2)