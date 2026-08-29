'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { UtaraskaCorporateLink } from '@/lib/designshelf/UtaraskaCorporateLink';

export default function DesignShelf() {
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [currentImageType, setCurrentImageType] = useState<'product' | 'design' | 'model'>('product');
  const [isZoomed, setIsZoomed] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});
  const [simpleImagePopup, setSimpleImagePopup] = useState<string | null>(null);

  const banners = [
    { src: "/designshelf/images/banner_en1.png", alt: "Banner" }
  ];

  const YURU_STYLE_JAPAN_AMAZON_URL =
    "https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AYuru%2BStyle%2BJapan&ref=bl_sl_s_ap_web_7141123011";

  // バナーごとのアスペクト比（画像読み込み時に更新）。初期値は 1200/500 を仮置き
  const [bannerRatios, setBannerRatios] = useState<number[]>(() => banners.map(() => 1200 / 500));

  // バナーカルーセルの自動切り替え
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // ESCキーでポップアップを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (popupImage) {
        closeImagePopup();
        }
        if (simpleImagePopup) {
          setSimpleImagePopup(null);
          document.body.style.overflow = '';
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [popupImage, simpleImagePopup]);

  const toggleDetails = (index: number) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  const openImagePopup = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      // ID 118、119、120、121、122、124、125、127、128の商品の場合はシンプルな画像拡大モーダルを使用
      if ((productId === 118 || productId === 119 || productId === 120 || productId === 121 || productId === 122 || productId === 124 || productId === 125 || productId === 127 || productId === 128) && product.carouselImages && product.carouselImages.length > 0) {
        const currentImageIndex = carouselIndices[productId] ?? 0;
        const currentImage = product.carouselImages[currentImageIndex];
        setSimpleImagePopup(currentImage);
        document.body.style.overflow = 'hidden';
        return;
      }
      // その他の商品は既存のモーダルを使用
      setPopupImage(product.image);
      setPopupId(`imagePopup${productId}`);
      setCurrentImageType('product');
      setIsZoomed(false);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeImagePopup = () => {
    setPopupImage(null);
    setPopupId(null);
    setIsZoomed(false);
    document.body.style.overflow = '';
  };

  const switchImageType = (type: 'product' | 'design' | 'model') => {
    if (!popupId) return;
    const productId = parseInt(popupId.replace('imagePopup', ''));
    const product = products.find(p => p.id === productId);
    if (product) {
      setCurrentImageType(type);
      setPopupImage(
        type === 'product'
          ? product.image
          : type === 'design'
            ? product.designImage
            : (product.modelImage ?? product.image)
      );
      setIsZoomed(false);
    }
  };

  // 現在ポップアップ中の商品（ボタン表示制御用）
  // 注: products定義の後に評価されるよう、下に再定義

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // カウントダウンコンポーネント
  const CountdownTimer = ({ endDate }: { endDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    });

    useEffect(() => {
      const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const end = new Date(endDate).getTime();
        const difference = end - now;

        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
        }

        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          expired: false
        };
      };

      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }, [endDate]);

    if (timeLeft.expired) {
      return (
        <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
          <p className="text-red-700 font-bold text-sm text-center">Sale Ended</p>
        </div>
      );
    }

    return (
      <div className="bg-orange-50 border border-orange-300 rounded-lg p-3 mb-1 h-[120px] flex flex-col justify-between overflow-hidden">
        <div className="flex-shrink-0">
          <p className="text-orange-800 font-bold text-xs text-center mb-1">Limited Time Offer</p>
          <p className="text-orange-700 text-xs text-center mb-2">Sale Ends: December 26, 2025 00:00</p>
        </div>
        <div className="flex justify-center items-center gap-1 text-center flex-shrink-0">
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">Days</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">Hrs</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">Min</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">Sec</div>
          </div>
        </div>
      </div>
    );
  };

  type ProductVariation = {
    name: string;
    price: string;
    amazonLink: string;
  };

  type Product = {
    id: number;
    title: string;
    brand: string;
    image: string;
    designImage: string;
    price: string;
    amazonLink: string;
    features: string[];
    description: string;
    modelImage?: string;
    videoUrl?: string;
    /** true のときリンクなしでアイコン＋「View on Instagram」を表示 */
    instagramLabelOnly?: boolean;
    endDate?: string; // ISO形式の日時文字列（例: "2025-12-25T23:59:59"）
    variations?: ProductVariation[]; // 商品バリエーション（Tシャツ、パーカーなど）
    carouselImages?: string[]; // カルーセル用の画像配列
  };

  // T-shirt products (Amazon US only, $18.99)
  const products: Product[] = [
    {
      id: 268,
      title: "Face-to-Face Tiger Illustration 2 (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/42_tigertiger2/tshirt_model.jpg",
      designImage: "/designshelf/images/42_tigertiger2/desgin.png",
      modelImage: "/designshelf/images/42_tigertiger2/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/0eVd12qK",
      features: [
        "Two tigers with wide open mouths, placed on left and right. Strong expressions combined with a comic, pop illustration style.",
        "Recommended for fans of street art, pop art, distinctive characters, and unique animal illustrations."
      ],
      description:
        "An original animal design featuring two tigers with wide open mouths placed on left and right. Combines the powerful expression of tigers with a comic, pop illustration style. Great for tiger lovers, street art and pop art fans, and anyone who enjoys distinctive characters and playful designs. A bold tiger graphic that works as a statement piece or a gift for animal lovers.",
      videoUrl:
        "https://www.instagram.com/reel/DcgDlGSkzy2/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/42_tigertiger2/tshirt_model.jpg",
        "/designshelf/images/42_tigertiger2/desgin.png"
      ]
    },
    {
      id: 119,
      title: "Face-to-Face Daruma Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/34_daruma/en/tshirt_model.jpg",
      designImage: "/designshelf/images/34_daruma/design.png",
      modelImage: "/designshelf/images/34_daruma/en/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/00v0kohv",
      features: [
        "A pair of daruma faces facing each other, drawn in a relaxed, rounded style. Strong outlines and simple color blocks improve visibility from a distance.",
        "A modern reinterpretation of a traditional good-luck motif, designed to change impact by background and color choice. Chest-centered placement makes it easy to pair with layering and accessories."
      ],
      description:
        "This design places two daruma faces facing one another, rendered in a playful, low-tension illustration style. Bold outlines and restrained facial expressions keep the motif attention-grabbing yet wearable for everyday outfits.",
      instagramLabelOnly: true,
      carouselImages: [
        "/designshelf/images/34_daruma/en/tshirt_model.jpg",
        "/designshelf/images/34_daruma/jp/tshirt_model.jpg",
        "/designshelf/images/34_daruma/design.png"
      ]
    },
    {
      id: 141,
      title: "Face-to-Face Pixel Tiger Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/41_tigertiger_pixel/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/41_tigertiger_pixel/design.jpg",
      modelImage: "/designshelf/images/41_tigertiger_pixel/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/0hKDSfQl",
      features: [
        "Symmetrically arranged pixel-art tiger faces create a unique composition. Impact and balance embedded in a simple design.",
        "Fusion of Japanese-style pixel tiger motifs with contemporary pop illustration aesthetics. Catchy expressions for street fashion and art enthusiasts."
      ],
      description:
        "This design features pixel-art tiger faces arranged symmetrically on both sides—a humorous yet powerful graphic. By blending traditional Japanese animal motifs with pop art aesthetics, it creates a unique Asian × Modern look. Despite its minimalist layout, the eye-catching design appeals across Japanese patterns, animal art, tiger motifs, street style, retro pop, and art fashion.",
      videoUrl: "https://www.instagram.com/reel/DWY-Ystgf-3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/41_tigertiger_pixel/jp/tshirt_model.jpg",
        "/designshelf/images/41_tigertiger_pixel/design.jpg"
      ]
    },
    {
      id: 106,
      title: "Relaxed Japanese Masks Illustration",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/2_japanese_masks/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/2_japanese_masks/design.png",
      modelImage: "/designshelf/images/2_japanese_masks/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/07R5QOnF",
      features: [
        "Six types of traditional Japanese masks rendered in a pop style for strong visual impact.",
        "Motifs drawn from Noh, Kyogen, and festival masks—expressing the depth of Japanese culture with humor."
      ],
      description:
        "Above the \"JAPANESE MASKS\" lettering, six colorful traditional Japanese masks are arranged in a unique layout. Each mask comes from Noh, Kyogen, festivals, and other contexts, carrying cultural background and symbolic meaning. The expressive, individual faces lined up together show the diversity and depth of Japanese culture in a humorous, artistic way. A bold visual for fans of Japanese culture, wa-motif art, and distinctive personal style.",
      videoUrl: "https://www.instagram.com/reel/DWWOXW5gTSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/2_japanese_masks/jp/tshirt_model.jpg",
        "/designshelf/images/2_japanese_masks/design.png"
      ]
    },
    {
      id: 104,
      title: "Face-to-Face Dragon Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/6_dragondragon/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/6_dragondragon/design.png",
      modelImage: "/designshelf/images/6_dragondragon/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/07j8bgHd",
      features: [
        "Symmetrically placed dragon faces create a unique, eye-catching art design. Minimal layout with strong impact.",
        "Japanese motifs blended with pop art for a modern graphic that suits Asian taste, casual fashion, and street art."
      ],
      description:
        "This design features symmetrically placed dragon faces in a playful, relaxed Japanese art style. It fits art, streetwear, Asian motifs, wa patterns, and oriental design genres. The deformed dragon expressions are catchy and work as an accent for any outfit, for anyone who enjoys distinctive fashion—or as a gift.",
      videoUrl: "https://www.instagram.com/reel/DWYyGmEgUvG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/6_dragondragon/jp/tshirt_model.jpg",
        "/designshelf/images/6_dragondragon/design.png"
      ]
    },
    {
      id: 128,
      title: "Skull Calavera Kanji Katakana Duck",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/40_skull/en/tshirt_model.jpg",
      designImage: "/designshelf/images/40_skull/design.png",
      modelImage: "/designshelf/images/40_skull/en/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/05Uvxwcj",
      features: [
        "A composition featuring a skull rendered in decorative patterns as the central element, combined with floral and botanical motifs. Calavera style.",
        "A symmetrical composition that accentuates the dragon's expression and contours. The layout, which makes effective use of negative space, ensures the dragon and text maintain a clear presence even when displayed at reduced size."
      ],
      description: "Combining the kanji for 'bone' and the word 'bone' to create a seal-like design.",
      videoUrl: "https://www.instagram.com/reel/DVS3Lj5AR4C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/40_skull/en/tshirt_model.jpg",
        "/designshelf/images/40_skull/design.png"
      ]
    },
    {
      id: 127,
      title: "Face-to-Face Dragon Illustration Kanji Katakana",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/39_dragondragon2/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/39_dragondragon2/design.png",
      modelImage: "/designshelf/images/39_dragondragon2/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/09cc4T8V",
      features: [
        "Two dragons facing each other are rendered with bold lines, flanking a seal-like motif combining kanji and katakana at the center. This composition instantly conveys Japanese strength and symbolism.",
        "A symmetrical composition that accentuates the dragon's expression and contours. The layout, which makes effective use of negative space, ensures the dragon and text maintain a clear presence even when displayed at reduced size."
      ],
      description: "This graphic combines a dragon motif inspired by Japanese folklore and decorative art with a seal design featuring kanji and katakana characters. The composition of dragons facing each other and the central text elements naturally draw the viewer's gaze. Streamlined lines and shapes enhance legibility, achieving a design that balances Japanese authenticity with contemporary graphic expression. It is an ideal piece for collections incorporating Japanese culture and character motifs.",
      videoUrl: "https://www.instagram.com/reel/DXj8AXgARbT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/39_dragondragon2/jp/tshirt_model.jpg",
        "/designshelf/images/39_dragondragon2/design.png"
      ]
    },
    {
      id: 125,
      title: "Face-to-Face Unicorn Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/29_unicorn/en/tshirt_model.jpg",
      designImage: "/designshelf/images/29_unicorn/design.png",
      modelImage: "/designshelf/images/29_unicorn/en/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/i7eNXdF",
      features: [
        "Face-to-face unicorn heads rendered with bold outlines and flat color areas; simplified shapes keep the motif legible at a glance while preserving a hand-drawn charm up close.",
        "Composed for chest-center placement with balanced spacing and open negative space so the artwork reads clearly on both light and dark backgrounds."
      ],
      description: "A playful, modern take on the unicorn motif. Two unicorn heads face each other in a clean, balanced composition defined by confident linework and flat color blocks. The design reads well at chest scale and offers subtle line detail for a closer look, making it a whimsical addition to casual and streetwear collections.",
      videoUrl: "https://www.instagram.com/reel/DXh4T-aAdV4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/29_unicorn/en/tshirt_model.jpg",
        "/designshelf/images/29_unicorn/design.png"
      ]
    },
    {
      id: 124,
      title: "Face-to-Face Lion Kanji Katakana (Japanese Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/35_lionlion/en/tshirt_model.jpg",
      designImage: "/designshelf/images/35_lionlion/design.png",
      modelImage: "/designshelf/images/35_lionlion/en/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/g3Hvn04",
      features: [
        "Two stylized lion (shishi) heads flank a central red seal that combines kanji and katakana; bold outlines and clear shapes make the motif instantly recognizable.",
        "Balanced chest-center composition with open negative space so the artwork reads well on both light and dark backgrounds."
      ],
      description: "A modern take on the traditional shishi motif. Two lion heads face each other with a central seal that blends kanji and katakana characters, creating a graphic that references Japanese calligraphic tradition while keeping a playful, contemporary feel. The composition emphasizes clear silhouettes and strong contrast for instant impact at chest scale, with subtle line detail for closer viewing. Ideal for collections that draw on Japan-inspired graphics and typographic accents.",
      videoUrl: "https://www.instagram.com/reel/DSZ6xRQk2ws/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/35_lionlion/en/tshirt_model.jpg",
        "/designshelf/images/35_lionlion/design.png"
      ]
    },
    {
      id: 122,
      title: "Face-Center Tiger Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/3_tiger/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/3_tiger/design.png",
      modelImage: "/designshelf/images/3_tiger/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/hQ3qcoy",
      features: [
        "Bold, simplified tiger mask with thick outlines and clear flat color areas for legibility at chest-center placement.",
        "Open-mouth focal area and sparse line strokes create clean negative space and a distinct silhouette against light or dark backgrounds."
      ],
      description: "The boldly placed tiger motif achieves both a silhouette easily recognizable from a distance and clear definition in its details. As a focal point on the chest, it pairs well with layered outfits. Its modern interpretation of traditional Japanese elements makes it versatile for a wide range of styles. Its understated yet distinctive appeal makes it an excellent choice for gifts.",
      videoUrl: "https://www.instagram.com/reel/DSH7hCGE1VO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/3_tiger/jp/tshirt_model.jpg",
        "/designshelf/images/3_tiger/design.png"
      ]
    },
    {
      id: 120,
      title: "Face-to-Face Tiger Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/7_tigertiger/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/7_tigertiger/design.png",
      modelImage: "/designshelf/images/7_tigertiger/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/eyYRrGF",
      features: [
        "The symmetrically arranged tiger faces create a unique composition. The impact and balance embedded within the simple design are its appeal.",
        "Fusion of Japanese-style tiger motifs with contemporary pop illustration aesthetics. Catchy expressions that resonate with street fashion and art enthusiasts."
      ],
      description: "This design features a humorous yet powerful graphic art piece with a tiger's face arranged symmetrically on both sides. By blending traditional Japanese animal motifs with an American comic-inspired pop art aesthetic, it creates a unique Asian × Modern worldview. Despite its minimalist composition, the eye-catching design has broad appeal across genres including Japanese patterns, animal designs, tiger art, street style, retro pop, and art fashion. It's a one-of-a-kind visual where visual impact and playfulness coexist.",
      videoUrl: "https://www.instagram.com/reel/DR9EKaBEykM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/7_tigertiger/jp/tshirt_model.jpg",
        "/designshelf/images/7_tigertiger/design.png"
      ]
    },
    {
      id: 121,
      title: "Face-to-Face Dragon vs Tiger Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/5_dragon_tiger/jp/tshirt_model.jpg",
      designImage: "/designshelf/images/5_dragon_tiger/design.png",
      modelImage: "/designshelf/images/5_dragon_tiger/jp/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://a.co/d/0g1Yc8X",
      features: [
        "Two simplified heads - a dragon and a tiger - facing each other with bold outlines and flat color fields. The composition emphasizes contrast and legibility so the motif reads clearly at chest distance while keeping a playful, hand-drawn feel.",
        "Designed as a chest-center point to pair with layers and jackets; the graphic works across item colors and supports a series rollout (colorways or material variants). Visual balance and high contrast improve on-shelf visibility and thumbnail recognition."
      ],
      description: "This artwork places a dragon and a tiger head in a face-to-face layout, reinterpreting classic East Asian motifs in a relaxed, contemporary style. Thick linework and simplified shapes create immediate impact from a distance while patterned details reward a closer look. The design is sized to sit at the chest center so it integrates with everyday layering and streetwear silhouettes. Suitable for collections that blend traditional symbolism with modern, casual aesthetics.",
      videoUrl: "https://www.instagram.com/reel/DSAoW1YE5o4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/5_dragon_tiger/jp/tshirt_model.jpg",
        "/designshelf/images/5_dragon_tiger/design.png"
      ]
    },
    {
      id: 118,
      title: "Japanese Fujin & Raijin Art – Wind and Thunder Gods",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/1_fujin_raijin/en/tshirt_model.jpg",
      designImage: "/designshelf/images/1_fujin_raijin/design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/en/tshirt_model.jpg",
      price: "$18.99",
      amazonLink: "https://www.amazon.com/dp/B0FYR7YBSW?customId=B07537H64L&customizationToken=MC_Assembly_1%23B07537H64L&th=1&psc=1",
      features: [
        "Cute, stylized versions of Japan's Wind God (Fujin) and Thunder God (Raijin). The design reimagines classic Japanese mythology into playful character art that keeps the original motifs easy to recognize.",
        "Bold composition with strong visual balance. Works well for streetwear, casual fashion, and anyone who loves Japanese art or pop-style illustrations."
      ],
      description: "This artwork features Fujin (the Wind God) and Raijin (the Thunder God), two iconic figures from Japanese mythology, reinterpreted in a cute and playful style. The characters keep the traditional elements-such as the wind bag and drums-while adding a modern, approachable look. Perfect for fans of Japanese art, mythology, pop-style illustrations, and character-based designs. Easy to match with streetwear outfits, and a fun gift for anyone who enjoys Japanese culture.",
      videoUrl: "https://www.instagram.com/reel/DRzK1SlE_Ln/?utm_source=ig_web_copy_link",
      carouselImages: [
        "/designshelf/images/1_fujin_raijin/en/tshirt_model.jpg",
        "/designshelf/images/1_fujin_raijin/design.png"
      ]
    }
  ];

  // 現在ポップアップ中の商品（ボタン表示制御用）
  const currentProductId = popupId ? parseInt(popupId.replace('imagePopup', '')) : null;
  const currentProduct: Product | undefined = currentProductId ? products.find(p => p.id === currentProductId) : undefined;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <nav>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/odd/en" className="flex items-center">
              <Image 
                src="/designshelf/images/logo.png" 
                alt="utaraska odd" 
                width={120} 
                height={60}
                className="w-[100px] sm:w-[120px] h-auto hover:scale-105 transition-transform"
              />
              
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/odd" className="text-gray-600 hover:text-gray-900 transition-colors">JP Store</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
      {/* AI生成画像の注意書き */}
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
        <p className="text-xs text-yellow-800">
          <span className="font-semibold">Note: </span>
          Some product images are AI-generated or edited, and colors and details may differ from the actual product. Please check the product description on Amazon before purchasing.
        </p>
      </div>
      
      {/* バナースライドショー */}
      <section className="mb-12">
        <div
          className="relative w-full overflow-hidden rounded-lg shadow-lg"
          style={{ aspectRatio: bannerRatios[currentBanner] || 1200 / 500 }}
        >
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentBanner ? 'opacity-100' : 'opacity-0'
                }`}
              >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                onLoad={(e) => {
                  const img = e.currentTarget;
                  const ratio = img.naturalWidth && img.naturalHeight ? (img.naturalWidth / img.naturalHeight) : undefined;
                  if (!ratio) return;
                  setBannerRatios((prev) => {
                    const next = [...prev];
                    next[index] = ratio;
                    return next;
                  });
                }}
              />
              </div>
            ))}
            
            {/* バナーインジケーター */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* ナビゲーションボタン */}
            <button
              onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors text-sm sm:text-base"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors text-sm sm:text-base"
            >
              ›
            </button>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.filter(product => {
              // 期限が設定されている商品で、期限が過ぎている場合は非表示
              if (product.endDate) {
                const now = new Date().getTime();
                const end = new Date(product.endDate).getTime();
                if (end <= now) {
                  return false; // 期限切れの商品は非表示
                }
              }
              return true;
            }).map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full self-start">
                <div 
                  className="p-4 flex justify-center items-center h-72 bg-white cursor-pointer relative"
                  onClick={() => openImagePopup(product.id)}
                >
                  {product.carouselImages && product.carouselImages.length > 0 ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      {product.carouselImages.map((img, imgIndex) => (
                        <Image
                          key={imgIndex}
                          src={img}
                          alt={`${product.title} - Image ${imgIndex + 1}`}
                          width={256}
                          height={256}
                          className={`object-contain hover:scale-105 transition-opacity duration-300 absolute ${
                            (carouselIndices[product.id] ?? 0) === imgIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      ))}
                      {product.carouselImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCarouselIndices(prev => ({
                                ...prev,
                                [product.id]: prev[product.id] === undefined ? product.carouselImages!.length - 1 : (prev[product.id] - 1 + product.carouselImages!.length) % product.carouselImages!.length
                              }));
                            }}
                            className="absolute left-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                            aria-label="Previous image"
                          >
                            ‹
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCarouselIndices(prev => ({
                                ...prev,
                                [product.id]: prev[product.id] === undefined ? 1 : (prev[product.id] + 1) % product.carouselImages!.length
                              }));
                            }}
                            className="absolute right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-colors"
                            aria-label="Next image"
                          >
                            ›
                          </button>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
                            {product.carouselImages.map((_, dotIndex) => (
                              <button
                                key={dotIndex}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCarouselIndices(prev => ({
                                    ...prev,
                                    [product.id]: dotIndex
                                  }));
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  (carouselIndices[product.id] ?? 0) === dotIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Go to image ${dotIndex + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                  <Image 
                    src={product.modelImage ?? product.image}
                    alt={product.title}
                    width={256}
                    height={256}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                  )}
                  {product.endDate && (
                    <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded z-20">Limited</span>
                  )}
                  {!product.endDate && (product.brand === "SHAREZOH" || product.id === 128) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-20">NEW</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 min-h-[3rem]">{product.title}</h3>
                  {product.endDate && <CountdownTimer endDate={product.endDate} />}
                  {product.brand === "Yuru Style Japan" ? (
                    <a
                      href={YURU_STYLE_JAPAN_AMAZON_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium mb-4 hover:text-blue-800 transition-colors"
                    >
                      {product.brand}
                    </a>
                  ) : (
                    <Link
                      href="/odd/en/brands"
                      className="text-blue-600 font-medium mb-4 hover:text-blue-800 transition-colors"
                    >
                      {product.brand}
                    </Link>
                  )}
                  {product.instagramLabelOnly && (
                    <p className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <Image
                        src="/designshelf/images/Instagram_logo_black.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0 opacity-60"
                        unoptimized
                      />
                      <span>View on Instagram</span>
                    </p>
                  )}
                  {!product.instagramLabelOnly && product.videoUrl && (
                    <a
                      href={product.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-800"
                    >
                      <Image
                        src="/designshelf/images/Instagram_logo_black.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                        unoptimized
                      />
                      <span className="text-sm">View on Instagram</span>
                    </a>
                  )}
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDetails(index);
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={`text-gray-600 hover:text-gray-900 mb-4 text-left transition-colors relative after:absolute after:right-0 ${expandedDetails === index ? "after:content-['−']" : "after:content-['+']"}`}
                  >
                    Product Details
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedDetails === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{ pointerEvents: 'none' }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onMouseUp={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <div className="mb-4">
                      {product.features.map((feature, idx) => (
                        <p 
                          key={idx} 
                          className="text-sm text-gray-600 mb-2"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                    <p 
                      className="text-sm text-gray-700 leading-relaxed"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                  
                  {product.variations ? (
                    <div className="mt-auto pt-4 space-y-3">
                      {product.variations.map((variation, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-b-0">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800">{variation.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg font-bold text-gray-800">{variation.price}</span>
                            </div>
                          </div>
                          <a 
                            href={variation.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="amazon-btn"
                            aria-label={`View ${variation.name} on Amazon`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="label">View on<br />Amazon</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                    </div>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="amazon-btn"
                        aria-label="View on Amazon"
                    >
                        <span className="label">
                          View on<br />Amazon
                        </span>
                    </a>
                  </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 画像ポップアップ */}
      {popupImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeImagePopup}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col md:flex-row items-center gap-4 md:gap-8" onClick={(e) => e.stopPropagation()}>
            {/* 画像表示エリア */}
            <div className="relative w-full md:max-w-[80vw] h-full md:max-h-[80vh] bg-black rounded-lg flex justify-center items-center flex-1">
              <button
                onClick={closeImagePopup}
                className="absolute top-2 right-2 bg-black/70 text-white text-2xl cursor-pointer w-10 h-10 flex items-center justify-center z-10 hover:bg-black rounded-full transition-colors"
              >
                &times;
              </button>
              <Image
                src={popupImage || ''}
                alt="Enlarged image"
                width={800}
                height={800}
                className={`w-full h-full max-w-full max-h-[85vh] md:max-h-[80vh] object-contain cursor-pointer transition-transform ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={toggleZoom}
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                拡大
              </div>
            </div>
            
            {/* コントロールエリア */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-4 md:min-w-[200px] w-full md:w-auto justify-center md:justify-start">
              {currentProduct && (
                <>
              <button
                onClick={() => switchImageType('product')}
                className={`flex flex-col items-center p-3 rounded transition-colors ${
                  currentImageType === 'product' 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Image
                      src={currentProduct.image}
                      alt="Product image"
                  width={64}
                  height={64}
                  className="object-contain mb-2"
                />
                    <span className="text-sm">Product</span>
              </button>
              <button
                onClick={() => switchImageType('design')}
                className={`flex flex-col items-center p-3 rounded transition-colors ${
                  currentImageType === 'design' 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Image
                      src={currentProduct.designImage}
                      alt="Design image"
                  width={64}
                  height={64}
                  className="object-contain mb-2"
                />
                    <span className="text-sm">Design</span>
              </button>
                  {currentProduct.modelImage && (
                <button
                  onClick={() => switchImageType('model')}
                  className={`flex flex-col items-center p-3 rounded transition-colors ${
                    currentImageType === 'model' 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Image
                    src={currentProduct.modelImage}
                      alt="Model image"
                    width={64}
                    height={64}
                    className="object-contain mb-2"
                  />
                    <span className="text-sm">Model</span>
                </button>
                  )}
                  {currentProduct.instagramLabelOnly && (
                    <p className="mt-2 flex items-center gap-2 rounded bg-white/20 p-3 text-white/70">
                      <Image
                        src="/designshelf/images/Instagram_logo.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="h-5 w-5 shrink-0 opacity-60"
                        unoptimized
                      />
                      <span className="text-sm">Watch on Instagram</span>
                    </p>
                  )}
                  {!currentProduct.instagramLabelOnly && currentProduct.videoUrl && (
                    <a
                      href={currentProduct.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-2 rounded bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
                    >
                      <Image
                        src="/designshelf/images/Instagram_logo.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="h-5 w-5"
                        unoptimized
                      />
                      <span className="text-sm">Watch on Instagram</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* シンプルな画像拡大モーダル（ID 118専用） */}
      {simpleImagePopup && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSimpleImagePopup(null);
            document.body.style.overflow = '';
          }}
        >
          <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSimpleImagePopup(null);
                document.body.style.overflow = '';
              }}
              className="absolute top-2 right-2 bg-black/70 text-white text-2xl cursor-pointer w-10 h-10 flex items-center justify-center z-10 hover:bg-black rounded-full transition-colors"
            >
              &times;
            </button>
            <Image
              src={simpleImagePopup}
              alt="Enlarged image"
              width={640}
              height={768}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <UtaraskaCorporateLink className="hover:text-gray-200 transition-colors">Utaraska LLC</UtaraskaCorporateLink>
              </h3>
              <p className="text-gray-300 mb-2">2F-C, Shibuya Dogenzaka Tokyu Building, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan</p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-2">&copy; 2025 <UtaraskaCorporateLink className="hover:text-gray-300 transition-colors">Utaraska LLC</UtaraskaCorporateLink>. All rights reserved.</p>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              Some product images are AI-generated or edited, and colors and details may differ from the actual product. Please check the product description on Amazon before purchasing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}