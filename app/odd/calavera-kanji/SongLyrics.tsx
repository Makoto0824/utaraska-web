import { CALAVERA_KANJI_LYRICS } from '@/lib/designshelf/calaveraKanjiLyrics';

const FULL_LYRICS_TEXT = CALAVERA_KANJI_LYRICS.map((sec) => sec.lines.join('\n')).join('\n\n');

export function SongLyrics() {
  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="mb-4 text-lg font-bold text-gray-800">歌詞</h3>
      <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 sm:px-5 sm:py-5">
        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{FULL_LYRICS_TEXT}</p>
      </div>
    </div>
  );
}
