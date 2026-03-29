'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DesignShelf() {
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const [expandedProductList, setExpandedProductList] = useState<number | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [currentImageType, setCurrentImageType] = useState<'product' | 'design' | 'model'>('product');
  const [isZoomed, setIsZoomed] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});
  const [simpleImagePopup, setSimpleImagePopup] = useState<string | null>(null);

  const banners = [
    { src: "/designshelf/images/banner1.jpg", alt: "バナー1", link: "https://amzn.to/4azSuGy" },
    { src: "/designshelf/images/banner2.jpg", alt: "バナー2", link: "https://amzn.to/4tjnulH" },
    { src: "/designshelf/images/banner3.jpg", alt: "バナー3", link: "https://amzn.to/46Eh46L" },
    { src: "/designshelf/images/banner4.jpg", alt: "バナー4", link: "https://amzn.to/4bHeLmY" },
    { src: "/designshelf/images/banner5.jpg", alt: "セールバナー", link: "https://amzn.to/4ajqRQW" }
  ];

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

  const toggleProductList = (index: number) => {
    setExpandedProductList(expandedProductList === index ? null : index);
  };

  const openImagePopup = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      // ID 128, 129, 130, 131, 132の商品の場合はシンプルな画像拡大モーダルを使用
      if ((productId === 102 || productId === 103 || productId === 106 || productId === 112 || productId === 128 || productId === 129 || productId === 130 || productId === 131 || productId === 132 || productId === 133) && product.carouselImages && product.carouselImages.length > 0) {
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
          <p className="text-red-700 font-bold text-sm text-center">販売終了</p>
        </div>
      );
    }

    return (
      <div className="bg-orange-50 border border-orange-300 rounded-lg p-3 mb-1 h-[120px] flex flex-col justify-between overflow-hidden">
        <div className="flex-shrink-0">
          <p className="text-orange-800 font-bold text-xs text-center mb-1">期間限定商品</p>
          <p className="text-orange-700 text-xs text-center mb-2">販売終了: 2025年12月26日 00:00</p>
        </div>
        <div className="flex justify-center items-center gap-1 text-center flex-shrink-0">
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">日</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">時</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">分</div>
          </div>
          <div className="text-orange-800 font-bold text-sm">:</div>
          <div className="bg-white rounded px-1.5 py-1 min-w-[40px] max-w-[45px]">
            <div className="text-orange-800 font-bold text-sm leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">秒</div>
          </div>
        </div>
      </div>
    );
  };

  type ProductVariation = {
    name: string;
    price: string;
    amazonLink: string;
    videoUrl?: string;
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
    endDate?: string; // ISO形式の日時文字列（例: "2025-12-25T23:59:59"）
    variations?: ProductVariation[]; // 商品バリエーション（Tシャツ、パーカーなど）
    carouselImages?: string[]; // カルーセル用の画像配列
    isNew?: boolean;
  };

  // 元のサイトと同じ24商品のデータ（完全な商品説明付き）
  const products: Product[] = [
    {
      id: 141,
      title: "ゆるい虎と虎（ドット）",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/41_tigertiger_pixel/tshirt_model.jpg",
      designImage: "/designshelf/images/41_tigertiger_pixel/design.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4lXg9Vy",
      features: [
        "左右対称に配置されたドット絵タイガーの顔がユニークな構成。シンプルなデザインに込められたインパクトとバランスが魅力。",
        "和風アートのドット絵の虎をモチーフに、現代的なポップイラストのテイストを融合。ストリートファッションやアート好きに刺さるキャッチーな表現。"
      ],
      description: "このデザインは、虎（タイガー）の顔を左右対称に配置したユーモラスかつ力強いグラフィックアートです。伝統的な日本の動物モチーフに、アメコミ風のポップアートテイストを加えることで、アジアン×モダンな独自の世界観を表現。ミニマルな配置ながら視線を惹きつけるデザインは、和柄、アニマルデザイン、タイガーアート、ストリート系、レトロポップ、アートファッションといったジャンルに幅広く親和性があります。視覚的インパクトと遊び心が共存する、唯一無二のビジュアルです。",
      videoUrl: "https://www.instagram.com/reel/DWY-Ystgf-3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      isNew: true,
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4lXg9Vy", videoUrl: "https://www.instagram.com/reel/DWY-Ystgf-3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/41_tigertiger_pixel/tshirt_model.jpg",
        "/designshelf/images/41_tigertiger_pixel/design.jpg"
      ]
    },
    {
      id: 103,
      title: "ゆるい虎と虎",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/7_tigertiger/jp/7_tigertiger_tshirt_model_jp.jpg",
      designImage: "/designshelf/images/7_tigertiger/7_tigertiger_design.png",
      modelImage: "/designshelf/images/7_tigertiger/7_tigertiger_sweatshirt_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4mmNbOG",
      features: [
        "左右対称に配置されたタイガーの顔がユニークな構成。シンプルなデザインに込められたインパクトとバランスが魅力。",
        "和風アートの虎モチーフに、現代的なポップイラストのテイストを融合。ストリートファッションやアート好きに刺さるキャッチーな表現。"
      ],
      description: "このデザインは、虎（タイガー）の顔を左右対称に配置したユーモラスかつ力強いグラフィックアートです。伝統的な日本の動物モチーフに、アメコミ風のポップアートテイストを加えることで、アジアン×モダンな独自の世界観を表現。ミニマルな配置ながら視線を惹きつけるデザインは、和柄、アニマルデザイン、タイガーアート、ストリート系、レトロポップ、アートファッションといったジャンルに幅広く親和性があります。視覚的インパクトと遊び心が共存する、唯一無二のビジュアルです。",
      videoUrl: "https://www.instagram.com/reel/DWT8nuqgQuS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4mmNbOG", videoUrl: "https://www.instagram.com/reel/DWT8nuqgQuS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "トレーナー", price: "¥3,960", amazonLink: "https://amzn.to/4ocuRrV", videoUrl: "https://www.instagram.com/reel/DQX05pPASTA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/7_tigertiger/jp/7_tigertiger_tshirt_model_jp.jpg",
        "/designshelf/images/7_tigertiger/7_tigertiger_sweatshirt_model.png",
        "/designshelf/images/7_tigertiger/7_tigertiger_design.png"
      ]
    },
    {
      id: 112,
      title: "ゆるい風神雷神",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/1_fujin_raijin/jp/1_fujin_raijin_tshirt_model.jpg",
      designImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/swet/1_fujin_raijin_swet_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4bklZwI",
      features: [
        "風神と雷神を可愛くデフォルメしたキャラクターアート。伝統モチーフをユーモラスに再構築した現代和風デザイン",
        "左右対称の配置とコンパクトな構図が印象的。ミニマルながらアート性が高く、ストリート系やポップアートファッションに最適"
      ],
      description: "このデザインは、日本の伝統美術に登場する「風神」と「雷神」をベースに、親しみやすいデフォルメキャラクターとして表現した和風ポップアートです。軽妙な表情とポップな色使いが特徴で、古典的な神話モチーフを現代的なスタイルへと再解釈しています。「風神雷神デザイン」「ポップアートファッション」など複数のキーワードに親和性が高く、日常着としてもギフトとしても魅力的なビジュアルアートです。",
      videoUrl: "https://www.instagram.com/reel/DWCClKQgdg2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4bklZwI", videoUrl: "https://www.instagram.com/reel/DWCClKQgdg2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "トレーナー", price: "¥3,980", amazonLink: "https://amzn.to/4i9oSC7", videoUrl: "https://www.instagram.com/reel/DRBGUjCgQZ4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "ジップパーカー", price: "¥4,480", amazonLink: "https://amzn.to/47HCMYw", videoUrl: "https://www.instagram.com/reel/DQOlTdWAWx8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/1_fujin_raijin/jp/1_fujin_raijin_tshirt_model.jpg",
        "/designshelf/images/1_fujin_raijin/swet/1_fujin_raijin_swet_model.png",
        "/designshelf/images/1_fujin_raijin/1_fujin_raijin_zip_hoodie_model.png",
        "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png"
      ]
    },
    {
      id: 102,
      title: "向かい合うゆるい龍と虎 face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/5_dragon_tiger/5_dragon_tiger_tshirt_model.jpg",
      designImage: "/designshelf/images/5_dragon_tiger/5_dragon_tiger_design.png",
      modelImage: "/designshelf/images/5_dragon_tiger/5_dragon_tiger_hoodie_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4dqUmmN",
      features: [
        "伝説の神獣「龍」と猛獣「虎」が向かい合う、力強くもユーモラスな構図。和風×対称構図の王道をポップなイラストで再構築。",
        "キャラクター調にデフォルメされた表情が印象的。親しみやすさとエネルギーを兼ね備えた現代アジアンアートの一作。"
      ],
      description: "このデザインは、東洋の象徴的存在である「龍」と「虎」が向かい合う\"龍虎相対\"の構図を、ポップなテイストとキャラクター風の表現で現代的に再解釈したアートワークです。左右に配置された顔が視線を交わすことで、静的ながらも緊張感のある対峙を演出。伝統的な龍虎モチーフにユーモアと親しみやすさを加えることで、アートファッション・和風ポップ・ストリート系・デフォルメアニマルデザインなど多ジャンルにマッチするビジュアルに仕上がっています。文化的象徴性とデザイン性の両方を兼ね備えた作品です。",
      videoUrl: "https://www.instagram.com/reel/DV9MgQ-gXH5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4dqUmmN", videoUrl: "https://www.instagram.com/reel/DV9MgQ-gXH5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "長袖Tシャツ", price: "¥2,750", amazonLink: "https://amzn.to/4dqUmmN" },
        { name: "トレーナー", price: "¥3,960", amazonLink: "https://amzn.asia/d/09qsugXb" },
        { name: "パーカー", price: "¥4,400", amazonLink: "https://amzn.to/4uuJOJy", videoUrl: "https://www.instagram.com/reel/DQSnANAgZiM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "ジップパーカー", price: "¥4,600", amazonLink: "https://amzn.to/4cQtX1I" }
      ],
      carouselImages: [
        "/designshelf/images/5_dragon_tiger/5_dragon_tiger_tshirt_model.jpg",
        "/designshelf/images/5_dragon_tiger/5_dragon_tiger_hoodie_model.png",
        "/designshelf/images/5_dragon_tiger/5_dragon_tiger_sweat.jpg",
        "/designshelf/images/5_dragon_tiger/5_dragon_tiger_ziphoodie.jpg",
        "/designshelf/images/5_dragon_tiger/5_dragon_tiger_design.png"
      ]
    },
    {
      id: 133,
      title: "ドクロ カラベラ 漢字 カタカナ アヒル",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/40_skull/jp/model_tshirt_jp.jpg",
      designImage: "/designshelf/images/40_skull/design.png",
      modelImage: "/designshelf/images/40_skull/jp/model_tshirt_jp.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.to/472hYKy",
      features: [
        "装飾的な模様で描かれたドクロを主役に、花や植物の要素を組み合わせた構成。カラベラ風。",
        "漢字の「骨」と「ホネ」を組みわせて、判子風にデザイン。"
      ],
      description: "装飾模様をまとったカラベラ風ドクロを中心に、花や曲線的な要素を組み合わせたイラストデザインです。ドクロは怖さよりも親しみやすさを意識した表情で描かれ、全体を明るくポップな印象にまとめています。横に配置された漢字モチーフは印章を思わせる形で、日本らしい視覚的アクセントとして機能します。ドクロ、漢字、カタカナといった要素を組み合わせ、日本文化とイラスト表現を楽しめるデザインです。",
      videoUrl: "https://www.instagram.com/reel/DVS3Lj5AR4C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/40_skull/jp/model_tshirt_jp.jpg",
        "/designshelf/images/40_skull/design.png"
      ],
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.to/472hYKy"
        },
        {
          name: "長袖Tシャツ",
          price: "¥2,750",
          amazonLink: "https://amzn.to/4bgaE0g"
        }
      ]
    },
    {
      id: 132,
      title: "向かい合う 龍（ドラゴン） face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/39_dragondragon2/jp/model_hoodie_jp.png",
      designImage: "/designshelf/images/39_dragondragon2/design.png",
      modelImage: "/designshelf/images/39_dragondragon2/jp/model_hoodie_jp.png",
      price: "¥2,300",
      amazonLink: "https://amzn.asia/d/077ee9fx",
      features: [
        "左右に向かい合う二体の龍を大胆な線で描き、中央に漢字とカタカナを組み合わせた判子風モチーフを配置。日本的な力強さと象徴性が一目で伝わる構成です。",
        "龍の表情と輪郭を際立たせたシンメトリー構図。余白を活かした配置により、縮小表示でも龍と文字の存在感が明確に伝わります。"
      ],
      description: "日本の伝承や装飾表現に着想を得た龍（ドラゴン）モチーフを、漢字とカタカナの判子デザインと組み合わせたグラフィックです。左右に向かい合う龍の構図と中央の文字要素によって、視線が自然に集まるよう設計しています。線と形を整理することで視認性を高め、日本らしさと現代的なグラフィック表現を両立させたデザインに仕上げています。日本文化や文字モチーフを取り入れたコレクションに適した一枚です。",
      videoUrl: "https://www.instagram.com/reel/DUeRgZpAf35/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/39_dragondragon2/jp/model_hoodie_jp.png",
        "/designshelf/images/39_dragondragon2/design.png"
      ],
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.asia/d/077ee9fx"
        },
        {
          name: "長袖Tシャツ",
          price: "¥2,750",
          amazonLink: "https://amzn.asia/d/0b9YfOhr"
        },
        {
          name: "トレーナー",
          price: "¥3,960",
          amazonLink: "https://amzn.asia/d/03sJmi7d"
        },
        {
          name: "パーカー",
          price: "¥4,400",
          amazonLink: "https://amzn.asia/d/0a8Sumzr"
        },
        {
          name: "ジップパーカー",
          price: "¥4,600",
          amazonLink: "https://amzn.asia/d/0eN9r7P5"
        }
      ]
    },
    {
      id: 131,
      title: "赤ちゃんをおんぶしたファンキー男 ハート型のサングラス ミニダルマ ヒゲ ファイヤーパターンのヘルメット",
      brand: "SHAREZOH",
      image: "/designshelf/images/sharezoh/4/model_tshirt_jp.jpg",
      designImage: "/designshelf/images/sharezoh/4/design.png",
      modelImage: "/designshelf/images/sharezoh/4/model_tshirt_jp.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.asia/d/0eh3vlJ4",
      features: [
        "ヘルメットをかぶった男を中心に、子どもとペンギンを組み合わせたキャラクター構成。異なる存在を一つの円形フレームにまとめ、視線が自然と中央に集まるデザインです。",
        "表情や小物に個性を持たせつつ、全体をシンプルな形で整理。登場人物それぞれの関係性が一目で伝わる、ストーリー性のある構図になっています。"
      ],
      description: "ヘルメットをかぶったファンキーな男を主役に、寄り添う子どもとペンギンを描いたキャラクターイラストです。異なる立場や雰囲気の存在を同じ画面に配置することで、不思議な一体感と物語性を生み出しています。円形のフレーム構成により全体のバランスを保ち、細かな表情や仕草が自然と目に入るよう設計されています。ユーモアと想像の余地を残した、印象に残るキャラクターデザインです。",
      videoUrl: "https://www.instagram.com/reel/DUcaL6ygU1P/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      carouselImages: [
        "/designshelf/images/sharezoh/4/model_tshirt_jp.jpg",
        "/designshelf/images/sharezoh/4/design.png"
      ]
    },
    {
      id: 130,
      title: "耳付きニットキャップを被った青年 河童の子を抱きながらガムを膨らます",
      brand: "SHAREZOH",
      image: "/designshelf/images/sharezoh/3/model_tshirt_jp.jpg",
      designImage: "/designshelf/images/sharezoh/3/design.png",
      modelImage: "/designshelf/images/sharezoh/3/model_tshirt_jp.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.asia/d/09UmYsvS",
      features: [
        "ガムを大きく膨らませた人物を主役に、河童の子供のキャラクターを組み合わせたイラスト。丸いフレーム構図が視線を中央に集め、表情の対比が印象に残ります。",
        "抑えた線の情報量と分かりやすい配色で、人物と河童それぞれの個性を明確に表現。シンプルな形で構成され、ひと目で関係性が伝わるデザインです。"
      ],
      description: "ガムを膨らませる人物と、寄り添うように描かれた河童の子供を組み合わせたキャラクターイラストです。余裕のある表情の人物と、感情の伝わる河童の仕草を対比させることで、見る人が自然と物語を想像できる構成にしています。全体を円形のフレームに収めることで画面がまとまり、キャラクターの存在感が際立つデザインに仕上げています。ユーモアと個性を感じさせるイラスト表現を好む方に向けた一作です。",
      videoUrl: "https://www.instagram.com/reel/DUcYvGLAV52/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/sharezoh/3/model_tshirt_jp.jpg",
        "/designshelf/images/sharezoh/3/design.png"
      ]
    },
    {
      id: 129,
      title: "ゴーグルを着用した金髪の青年 子虎を抱いてリュックを背負う",
      brand: "SHAREZOH",
      image: "/designshelf/images/sharezoh/2/model_tshirt_jp.jpg",
      designImage: "/designshelf/images/sharezoh/2/design.png",
      modelImage: "/designshelf/images/sharezoh/2/model_tshirt_jp.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.asia/d/0a5Ld3Tv",
      features: [
        "ゴーグルをかけた人物と、腕に抱えられた小さな虎を組み合わせたキャラクターイラスト。丸いフレーム構図が全体をまとめ、視線が自然に中心へ集まります。",
        "誇張された表情とシンプルな色使いで、ひと目で物語性が伝わるデザイン。線と形を整理し、縮小表示でもキャラクターの関係性が分かりやすい構成です。"
      ],
      description: "人物と動物を組み合わせた、親しみやすく個性的なキャラクターイラストです。ゴーグル姿の人物と寄り添う虎を一つの円形フレームに収め、表情や仕草から想像が広がるようデザインしています。線と色をシンプルにまとめることで、主役となるキャラクターが際立ち、見る人に印象を残す構成に仕上げています。ストーリー性のあるイラストや、ユーモアを感じさせるキャラクターデザインを好む方に向けた一作です。",
      videoUrl: "https://www.instagram.com/reel/DUcXhdXAa0V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/sharezoh/2/model_tshirt_jp.jpg",
        "/designshelf/images/sharezoh/2/design.png"
      ]
    },
    {
      id: 128,
      title: "アフロの青年がにわとりを抱えて叫ぶ",
      brand: "SHAREZOH",
      image: "/designshelf/images/sharezoh/1/model_tshirt_jp.jpg",
      designImage: "/designshelf/images/sharezoh/1/design.png",
      modelImage: "/designshelf/images/sharezoh/1/model_tshirt_jp.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.asia/d/02TFtwnA",
      features: [
        "大きく口を開けた人物と、腕に抱えられたニワトリを組み合わせた、強い表情が印象的なキャラクターイラスト。丸いフレーム構図で視線が自然に中央へ集まります。",
        "誇張された顔の表情とシンプルな色使いにより、ひと目でユーモラスさが伝わるデザイン。線と形を整理し、縮小表示でもキャラクター性が損なわれない構成です。"
      ],
      description: "人物と動物を組み合わせた、コミカルでインパクトのあるキャラクターイラストです。大きく誇張した表情とポーズを中心に構成し、見る側に強い印象を残すようデザインしています。丸いフレーム内にまとめることで全体のバランスを保ち、主役となるキャラクターが際立つよう調整しています。ユーモアのあるイラスト表現や、個性的なキャラクターデザインを好む方に向けた一作です。",
      videoUrl: "https://www.instagram.com/reel/DUbK3zrgbbc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      carouselImages: [
        "/designshelf/images/sharezoh/1/model_tshirt_jp.jpg",
        "/designshelf/images/sharezoh/1/design.png"
      ]
    },
    {
      id: 117,
      title: "向かい合うゆるいパンダ face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/33_panda/hoodie/hoodie.jpg",
      designImage: "/designshelf/images/33_panda/design.png",
      modelImage: "/designshelf/images/33_panda/hoodie/model_hoodie.jpg",
      price: "¥2,300",
      amazonLink: "https://amzn.to/442991Y",
      features: [
        "左右に向かい合うゆるいタッチのパンダの顔をワンポイントで配したビジュアル。太めの輪郭と点描風の毛並み表現で視認性を高めつつ、表情はゆるく抑えて日常使いしやすい仕上げにしています",
        "モノトーンを基調に部分的なアクセント色を抑えることで、色違い展開や複数アイテム展開がしやすい構成にしています。胸元ワンポイントのため重ね着やジャケットとの相性が良く、ギフト展開にも適したデザインです"
      ],
      description: "このデザインは、向かい合う二つのパンダ顔を中心に据えたシンプルなイラストです。線は太めに取り、顔の輪郭と表情を明確にすることで遠目でも目を引き、点描的な毛並みや手のひらのパーツで細部の親しみやすさを出しています。胸元ワンポイントに収めることで主張が強くなりすぎず、普段着への取り入れやすさを重視しました。",
      videoUrl: "https://www.instagram.com/reel/DRuPBASgbfU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.to/442991Y"
        },
        {
          name: "パーカー",
          price: "¥4,400",
          amazonLink: "https://amzn.to/44vV0Kw"
        },
        {
          name: "トレーナー",
          price: "¥3,960",
          amazonLink: "https://amzn.to/4oqqnxa"
        }
      ],
      carouselImages: [
        "/designshelf/images/33_panda/hoodie/model_hoodie.jpg",
        "/designshelf/images/33_panda/swet/swet.jpg",
        "/designshelf/images/33_panda/tshirt/tshirt.jpg"
      ]
    },
    {
      id: 115,
      title: "向かい合うゆるい天狗 face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/31_tengu/hoodie/31_tengu_hoodie.png",
      designImage: "/designshelf/images/31_tengu/31_tengu_design.png",
      modelImage: "/designshelf/images/31_tengu/hoodie/31_tengu_model_hoodie.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4rwVutY",
      features: [
        "向かい合う天狗の顔を左右に配したビジュアル。太めの輪郭線と一定の間隔で入ったストライプ調の模様で存在感を出しつつ、表情はゆるく抑えて日常使いしやすくしています。遠目でも目を引く構図です。",
        "和風の題材をポップに再解釈したデザインで、赤・黒・白のコントラストを効かせ視認性を高めています。ストリート系から和モダンまで幅広い着こなしと相性が良い設計です。"
      ],
      description: "向かい合う二つの天狗の顔を中心に据え、太い線とゆるい表情でまとめた和風イラストです。伝統的な天狗モチーフをポップに再構成し、重ね着やジャケットの差し色としても活用しやすいのが特長です。",
      videoUrl: "https://www.instagram.com/reel/DRbpHY1AcHp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.to/4rwVutY"
        },
        {
          name: "パーカー",
          price: "¥4,400",
          amazonLink: "https://amzn.to/4pmH4KS"
        },
        {
          name: "トレーナー",
          price: "¥3,960",
          amazonLink: "https://amzn.to/3M3s3PH"
        }
      ]
    },
    {
      id: 114,
      title: "向かい合うゆるい般若 face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/30_hannya/jp/30_tshirt_model_jp.jpg",
      designImage: "/designshelf/images/30_hannya/30_hannya_design.png",
      modelImage: "/designshelf/images/30_hannya/hoodie/30_hannya_model_hoodie.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3JRLlal",
      features: [
        "向かい合う般若の顔を炎で囲んだ和風モチーフ。輪郭は太めでゆるいタッチにまとめ、強すぎない存在感を狙ったビジュアル設計。",
        "デザインを主役にするワンポイント配置。和の伝統要素とポップな線表現を組み合わせ、年代や性別を問わずコーデに取り入れやすい見え方を意識している。"
      ],
      description: "向かい合う二つの般若の顔を、炎のモチーフで包んだ和風イラストです。線は柔らかめにしつつ表情の輪郭を強調することで、和の雰囲気を保ちながら日常使いしやすいデザインに仕上げています。胸元ワンポイントに収めることで主張が強くなりすぎず、ジャケットや重ね着とも相性が良くなります。",
      videoUrl: "https://www.instagram.com/reel/DWeHNH6AS2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.to/3JRLlal",
          videoUrl: "https://www.instagram.com/reel/DWeHNH6AS2_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          name: "パーカー",
          price: "¥4,400",
          amazonLink: "https://amzn.to/4oggGS5",
          videoUrl: "https://www.instagram.com/reel/DRZ2iqDAfIj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
          name: "ジップパーカー",
          price: "¥4,600",
          amazonLink: "https://amzn.to/44mPD03",
          videoUrl: "https://www.instagram.com/reel/DRZ2iqDAfIj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        }
      ],
      carouselImages: [
        "/designshelf/images/30_hannya/jp/30_tshirt_model_jp.jpg",
        "/designshelf/images/30_hannya/hoodie/30_hannya_model_hoodie.png",
        "/designshelf/images/30_hannya/30_hannya_design.png"
      ]
    },
    {
      id: 113,
      title: "向かい合うゆるいユニコーン face2face トレーナー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/29_unicorn/swet/29_unicorn_swet.png",
      designImage: "/designshelf/images/29_unicorn/29_unicorn_design.png",
      modelImage: "/designshelf/images/29_unicorn/swet/29_unicorn_model_swet.png",
      price: "¥3,960",
      amazonLink: "https://amzn.to/48kBYYW",
      features: [
        "左右に向かい合うユニコーンの顔をこだわりのゆるいタッチで描かれているデザイン。可愛さとユーモアを両立させ、日常のコーデに馴染む見え方を意識しています。",
        "どんな色でも映える配色設計で、ギフトやプレゼント、季節商品としても扱いやすいです。"
      ],
      description: "向かい合う二つのユニコーン顔を中心にしたシンプルなビジュアルデザインです。線を太めにしつつ表情はゆるくまとめているため、子供から大人まで幅広く使いやすいのが特徴です。胸元ワンポイントに収めることで主張が強くなりすぎず、複数の色やアイテムに展開しやすい設計にしています。",
      videoUrl: "https://www.instagram.com/reel/DRWeWdfgaLw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 108,
      title: "ゆるいライオン パーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/26_lion/26_lion_hoodie.png",
      designImage: "/designshelf/images/26_lion/26_lion_design.png",
      modelImage: "/designshelf/images/26_lion/26_lion_hoodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/3JJ4FWX",
      features: [
        "ライオンを大胆で印象的なゆるいタッチで表現。ユニークで目を引くアートスタイル",
        "普段着、カジュアルコーデ、ギフト用途まで幅広く使える汎用性の高いデザイン"
      ],
      description: "力強さと愛嬌を併せ持つこのライオンモチーフは、日本文化やアジアンテイストを好む方におすすめ。個性を演出したいシーンやプレゼントにも最適です。単体での着用はもちろん、重ね着やカジュアルな外出着としても使いやすいデザインです。贈り物としても選びやすいデザインで、年代を問わず合わせやすい点が特徴です。",
      videoUrl: "https://www.instagram.com/reel/DQon0paAUwP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 107,
      title: "ゆるい阿修羅",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/4_ashura/tshirt_model.jpg",
      designImage: "/designshelf/images/4_ashura/4_ashura_design.png",
      modelImage: "/designshelf/images/4_ashura/4_ashura_hoodie_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4rWJgtm",
      features: [
        "阿修羅像をモチーフに、ゆるキャラ風に再構築したユニークなアートデザイン。伝統とユーモアが融合した現代風ミニマル仏像イラスト。",
        "シンプルながら存在感のある線画スタイルと、和柄をあしらった腰巻がアクセント。仏像ファンや仏教カルチャーに興味のある人にも刺さる個性派グラフィック。"
      ],
      description: "このデザインは、日本で広く知られる阿修羅像を、ポップかつユーモラスなタッチで表現した\"ゆるアート\"作品です。宗教的荘厳さよりも、日常に溶け込むかわいさと不思議な存在感を持ち、仏像・仏教カルチャー・和風アート・ご利益デザイン・ゆるキャラ・サブカル・アジアンテイストといった複数のジャンルにアピールします。シンプルな白地に映えるミニマル構成で、老若男女問わず楽しめるデザインです。ユニークなギフトを探している方におすすめ。",
      videoUrl: "https://www.instagram.com/reel/DWY3QEmgS7C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4rWJgtm", videoUrl: "https://www.instagram.com/reel/DWY3QEmgS7C/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "パーカー", price: "¥4,400", amazonLink: "https://amzn.to/4oIKozG", videoUrl: "https://www.instagram.com/reel/DQi8IRygWyW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/4_ashura/tshirt_model.jpg",
        "/designshelf/images/4_ashura/4_ashura_hoodie_model.png",
        "/designshelf/images/4_ashura/4_ashura_design.png"
      ]
    },
    {
      id: 106,
      title: "ゆるい日本のお面たち",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/2_japanese_masks/jp/japanese_masks_tshirt_model_jp.jpg",
      designImage: "/designshelf/images/2_japanese_masks/japanese_masks_design.png",
      modelImage: "/designshelf/images/2_japanese_masks/japanese_masks_sweat_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3YOiNmd",
      features: [
        "6種類の日本伝統仮面をポップに表現した、視覚的にインパクトのあるデザイン。",
        "能・狂言・祭りなどに登場する仮面をモチーフに、日本文化の奥深さをユーモラスに表現。"
      ],
      description: "「JAPANESE MASKS」の文字の上に、6種類の日本の伝統的な仮面がカラフルに描かれたユニークなデザインです。それぞれの仮面は、能や狂言、祭りなどで使用されるもので、文化的な背景や象徴的な意味を持っています。表情豊かで個性的な仮面が並ぶことで、日本文化の多様性や奥深さをユーモラスかつアーティスティックに表現しています。インパクトのあるビジュアルで、日本文化が好きな方、和モチーフのアートを楽しみたい方、個性的なスタイルを求める方におすすめです。",
      videoUrl: "https://www.instagram.com/reel/DWWOXW5gTSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/3YOiNmd", videoUrl: "https://www.instagram.com/reel/DWWOXW5gTSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "トレーナー", price: "¥3,960", amazonLink: "https://amzn.to/47lyTbK", videoUrl: "https://www.instagram.com/reel/DWWOXW5gTSY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/2_japanese_masks/jp/japanese_masks_tshirt_model_jp.jpg",
        "/designshelf/images/2_japanese_masks/japanese_masks_sweat_model.png",
        "/designshelf/images/2_japanese_masks/japanese_masks_design.png"
      ]
    },
    {
      id: 105,
      title: "ゆるい虎",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/3_tiger/3_tiger_tshirt_model_jp.jpg",
      designImage: "/designshelf/images/3_tiger/3_tiger_design.png",
      modelImage: "/designshelf/images/3_tiger/3_tiger_hooodie_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/41xKuk2",
      features: [
        "大胆で印象的な虎の顔を和風テイストで表現した、ユニークで目を引くアートスタイル。",
        "ゆるキャラ風のかわいらしさと、伝統的なジャパニーズタトゥーアートの要素を融合したポップなデザイン。"
      ],
      description: "このデザインは、和風のタトゥーアートから着想を得た虎の顔を、ポップでゆるいキャラクター風にアレンジしたものです。力強さと愛嬌を併せ持つこの虎モチーフは、日本文化やアジアンテイストを好む方におすすめ。個性を演出したいシーンやプレゼントにも最適です。",
      videoUrl: "https://www.instagram.com/reel/DWXiuyAAeuG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/41xKuk2", videoUrl: "https://www.instagram.com/reel/DWXiuyAAeuG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "パーカー", price: "¥4,400", amazonLink: "https://amzn.to/3JuRuZJ", videoUrl: "https://www.instagram.com/reel/DQc5u-SgTfA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/3_tiger/3_tiger_tshirt_model_jp.jpg",
        "/designshelf/images/3_tiger/3_tiger_hooodie_model.png",
        "/designshelf/images/3_tiger/3_tiger_design.png"
      ]
    },
    {
      id: 104,
      title: "ゆるい龍と龍",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/6_dragondragon/6_dragondragon_tshirt_model.jpg",
      designImage: "/designshelf/images/6_dragondragon/6_dragondragon_design.png",
      modelImage: "/designshelf/images/6_dragondragon/6_dragondragon_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4uVfaJu",
      features: [
        "左右対称に配置されたドラゴンの顔がユニークで目を引くアートデザイン。ミニマルな構成ながらインパクト抜群。",
        "和風モチーフにポップアートの要素を加えた現代的グラフィック。アジアンテイスト、カジュアルファッション、ストリートアートにマッチ。"
      ],
      description: "このデザインは、左右対称に配置された龍（ドラゴン）の顔が特徴の、ポップで遊び心あふれる和風アートです。アート、ストリート系、アジアンモチーフ、和柄ファッション、オリエンタルデザインなど、幅広いジャンルに対応。デフォルメされた龍の表情がキャッチーで、男女問わず着こなしのアクセントとして最適です。個性的なファッションを楽しみたい方、ギフト用途にもおすすめの一着です。",
      videoUrl: "https://www.instagram.com/reel/DWYyGmEgUvG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        { name: "Tシャツ", price: "¥2,300", amazonLink: "https://amzn.to/4uVfaJu", videoUrl: "https://www.instagram.com/reel/DWYyGmEgUvG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { name: "パーカー", price: "¥4,400", amazonLink: "https://amzn.to/49tW057", videoUrl: "https://www.instagram.com/reel/DQaXIDAgQbC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
      ],
      carouselImages: [
        "/designshelf/images/6_dragondragon/6_dragondragon_tshirt_model.jpg",
        "/designshelf/images/6_dragondragon/6_dragondragon_model.png",
        "/designshelf/images/6_dragondragon/6_dragondragon_design.png"
      ]
    },
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
            <Link href="/designshelf/jp" className="flex items-center">
              <Image 
                src="/designshelf/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="w-[100px] sm:w-[120px] h-auto hover:scale-105 transition-transform"
              />
              
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/designshelf/jp" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <Link href="/designshelf/jp/brands" className="text-gray-600 hover:text-gray-900 transition-colors">ブランド</Link>
              <Link href="/designshelf/jp/contact" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/designshelf/jp/about" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
              <Link href="/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">EN Store</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
      {/* AI生成画像の注意書き */}
      <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
        <p className="text-xs text-yellow-800">
          <span className="font-semibold">ご注意：</span>
          一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。ご購入前はAmazonの商品説明等をご確認ください。
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
                  index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <a
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className="object-contain cursor-pointer"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                    onLoadingComplete={(img) => {
                      const ratio = img.naturalWidth && img.naturalHeight ? (img.naturalWidth / img.naturalHeight) : undefined;
                      if (!ratio) return;
                      setBannerRatios((prev) => {
                        const next = [...prev];
                        next[index] = ratio;
                        return next;
                      });
                    }}
                  />
                </a>
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
              ❮
            </button>
            <button
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 sm:p-2 rounded-full hover:bg-black/70 transition-colors text-sm sm:text-base"
            >
              ❯
            </button>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">すべてのデザイン</h2>
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
                          alt={`${product.title} - 画像${imgIndex + 1}`}
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
                            aria-label="前の画像"
                          >
                            ❮
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
                            aria-label="次の画像"
                          >
                            ❯
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
                                aria-label={`画像${dotIndex + 1}に移動`}
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
                    <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded z-20">期間限定</span>
                  )}
                  {!product.endDate && (product.isNew || product.brand === "SHAREZOH" || product.id === 102 || product.id === 103 || product.id === 112 || product.id === 132 || product.id === 133) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-20">NEW</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 min-h-[3rem]">{product.title}</h3>
                  {product.endDate && <CountdownTimer endDate={product.endDate} />}
                  <Link 
                    href={
                      product.brand === "ゆるスタイル・ジャパン" ? "/designshelf/jp/brands/yuru-style-japan" :
                      "/designshelf/jp/brands"
                    }
                    className="text-blue-600 font-medium mb-4 hover:text-blue-800 transition-colors"
                  >
                    {product.brand}
                  </Link>
                  {(product.id === 128 || product.id === 129 || product.id === 130 || product.id === 131 || product.id === 132 || product.id === 133) && product.videoUrl && (
                    <a
                      href={product.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mb-4 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Image
                        src="/designshelf/images/Instagram_logo_black.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        unoptimized
                      />
                      <span className="text-sm">Instagramで見る</span>
                    </a>
                  )}
                  
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleProductList(index);
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className={`text-gray-600 hover:text-gray-900 mb-2 text-left transition-colors relative after:absolute after:right-0 ${expandedProductList === index ? "after:content-['−']" : "after:content-['+']"}`}
                  >
                    商品一覧
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedProductList === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{ pointerEvents: expandedProductList === index ? 'auto' : 'none' }}
                  >
                    <div className="mb-4 space-y-3">
                      {(product.variations ? product.variations : [{ name: '商品', price: product.price, amazonLink: product.amazonLink, videoUrl: product.videoUrl }]).map((variation, idx) => (
                        <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-b-0">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800">{variation.name}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg font-bold text-gray-800">{variation.price}</span>
                              <span className="text-xs text-gray-500">税込</span>
                            </div>
                            {variation.videoUrl && (
                              <a
                                href={variation.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-800 text-sm transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Image
                                  src="/designshelf/images/Instagram_logo_black.png"
                                  alt="Instagram"
                                  width={16}
                                  height={16}
                                  className="w-4 h-4"
                                  unoptimized
                                />
                                <span>Instagramで見る</span>
                              </a>
                            )}
                          </div>
                          <a
                            href={variation.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="amazon-btn"
                            aria-label={`Amazonで${variation.name}を見る`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="label">Amazon<br />で見る</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
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
                    商品詳細
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedDetails === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{ pointerEvents: expandedDetails === index ? 'auto' : 'none' }}
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
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
                alt="拡大画像"
                width={800}
                height={800}
                className={`w-full h-full max-w-full max-h-[85vh] md:max-h-[80vh] object-contain cursor-pointer transition-transform ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={toggleZoom}
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                🔍
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
                      alt="商品画像"
                      width={64}
                      height={64}
                      className="object-contain mb-2"
                    />
                    <span className="text-sm">商品画像</span>
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
                      alt="デザイン画像"
                      width={64}
                      height={64}
                      className="object-contain mb-2"
                    />
                    <span className="text-sm">デザイン画像</span>
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
                        alt="着用イメージ"
                        width={64}
                        height={64}
                        className="object-contain mb-2"
                      />
                      <span className="text-sm">着用イメージ</span>
                    </button>
                  )}
                  {currentProduct.videoUrl && (
                    <a
                      href={currentProduct.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded bg-white/20 text-white hover:bg-white/30 transition-colors mt-2"
                    >
                      <Image
                        src="/designshelf/images/Instagram_logo.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        unoptimized
                      />
                      <span className="text-sm">Instagramで見る</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* シンプルな画像拡大モーダル（ID 128専用） */}
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
              alt="拡大画像"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ウタラスカ合同会社</h3>
              <p className="text-gray-300 mb-2">〒150-0043<br />東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C</p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Design Shelf</h4>
              <ul className="space-y-2">
                <li><Link href="/designshelf/jp/brands" className="text-gray-300 hover:text-white transition-colors">ブランド一覧</Link></li>
                <li><Link href="/designshelf/jp/about" className="text-gray-300 hover:text-white transition-colors">運営者情報</Link></li>
                <li>
                  <Link href="/designshelf/jp/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link>
                  <div className="text-xs text-gray-500 mt-1">v0.1.4</div>
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href="https://www.instagram.com/designshelf2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Image 
                    src="/designshelf/images/Instagram_logo.png" 
                    alt="Instagram" 
                    width={20} 
                    height={20}
                    className="w-5 h-5"
                    unoptimized
                  />
                  <span className="text-sm">@designshelf2025</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-2">&copy; 2025 ウタラスカ合同会社. All rights reserved.</p>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              一部の着用画像はAIで生成・編集しており、色味や細部が実物と異なる場合があります。ご購入前はAmazonの商品説明等をご確認ください。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}