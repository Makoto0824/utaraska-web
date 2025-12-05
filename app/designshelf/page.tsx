'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    { src: "/designshelf/images/banner5.jpg", alt: "セールバナー" },
    { src: "/designshelf/images/banner2.jpg", alt: "バナー2", link: "/designshelf" },
    { src: "/designshelf/images/banner3.jpg", alt: "バナー3", link: "/designshelf" },
    { src: "/designshelf/images/banner4.jpg", alt: "バナー4", link: "/designshelf" }
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

  const openImagePopup = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      // ID 118と119の商品の場合はシンプルな画像拡大モーダルを使用
      if ((productId === 118 || productId === 119) && product.carouselImages && product.carouselImages.length > 0) {
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
  };

  // 元のサイトと同じ24商品のデータ（完全な商品説明付き）
  const products: Product[] = [
    {
      id: 118,
      title: "Japanese Fujin & Raijin Art – Wind and Thunder Gods",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/1_fujin_raijin/en/tshirt_std/model.jpg",
      designImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/en/tshirt_std/model.jpg",
      price: "$18.99",
      amazonLink: "https://www.amazon.com/dp/B0FYR7YBSW?customId=B07537H64L&customizationToken=MC_Assembly_1%23B07537H64L&th=1&psc=1",
      features: [
        "Cute, stylized versions of Japan's Wind God (Fujin) and Thunder God (Raijin). The design reimagines classic Japanese mythology into playful character art that keeps the original motifs easy to recognize.",
        "Bold composition with strong visual balance. Works well for streetwear, casual fashion, and anyone who loves Japanese art or pop-style illustrations."
      ],
      description: "This artwork features Fujin (the Wind God) and Raijin (the Thunder God), two iconic figures from Japanese mythology, reinterpreted in a cute and playful style. The characters keep the traditional elements-such as the wind bag and drums-while adding a modern, approachable look. Perfect for fans of Japanese art, mythology, pop-style illustrations, and character-based designs. Easy to match with streetwear outfits, and a fun gift for anyone who enjoys Japanese culture.",
      videoUrl: "https://www.instagram.com/reel/DRzK1SlE_Ln/?utm_source=ig_web_copy_link",
      carouselImages: [
        "/designshelf/images/1_fujin_raijin/en/tshirt_std/model.jpg",
        "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png"
      ]
    },
    {
      id: 119,
      title: "Face-to-Face Daruma Illustration (Relaxed Style)",
      brand: "Yuru Style Japan",
      image: "/designshelf/images/34_daruma/en/tshirt_std/tshirt_std_model.jpg",
      designImage: "/designshelf/images/34_daruma/design.png",
      modelImage: "/designshelf/images/34_daruma/en/tshirt_std/tshirt_std_model.jpg",
      price: "$18.99",
      amazonLink: "https://www.amazon.com/Daruma-Illustration-Relaxed-Style-T-Shirt/dp/B0G4VXCS9D/ref=sr_1_5?dib=eyJ2IjoiMSJ9.baOD2aujbNaNJFcYi1LoM5X3Ik8E5ZEXFxHPcyccPOKMx3bVZwLQ0ufDz-iYP8G-2Ad9E3s7xtf7hACyvsixdg.EupN7gQaTBq3mOBSBBRDdfVlR3ya0rLBz1l7txLqSMc&dib_tag=se&qid=1764969541&refinements=p_4%3AYuru%2BStyle%2BJapan&s=apparel&sr=1-5&customId=B0752XJYNL&customizationToken=MC_Assembly_1%23B0752XJYNL&th=1&psc=1",
      features: [
        "A pair of daruma faces facing each other, drawn in a relaxed, rounded style. Strong outlines and simple color blocks improve visibility from a distance",
        "A modern reinterpretation of a traditional good-luck motif, designed to change impact by background and color choice. Chest-centered placement makes it easy to pair with layering and accessories"
      ],
      description: "This design places two daruma faces facing one another, rendered in a playful, low-tension illustration style. Bold outlines and restrained facial expressions keep the motif attention-grabbing yet wearable for everyday outfits.",
      videoUrl: "https://www.instagram.com/reel/DR5T8mME2kQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        {
          name: "T-Shirt",
          price: "$18.99",
          amazonLink: "https://www.amazon.com/Daruma-Illustration-Relaxed-Style-T-Shirt/dp/B0G4VXCS9D/ref=sr_1_5?dib=eyJ2IjoiMSJ9.baOD2aujbNaNJFcYi1LoM5X3Ik8E5ZEXFxHPcyccPOKMx3bVZwLQ0ufDz-iYP8G-2Ad9E3s7xtf7hACyvsixdg.EupN7gQaTBq3mOBSBBRDdfVlR3ya0rLBz1l7txLqSMc&dib_tag=se&qid=1764969541&refinements=p_4%3AYuru%2BStyle%2BJapan&s=apparel&sr=1-5&customId=B0752XJYNL&customizationToken=MC_Assembly_1%23B0752XJYNL&th=1&psc=1"
        },
        {
          name: "Premium T-Shirt",
          price: "$20.99",
          amazonLink: "https://www.amazon.com/Illustration-Relaxed-Style-Premium-Tri-Blend/dp/B0G4VWT9M4/ref=sr_1_6?dib=eyJ2IjoiMSJ9.baOD2aujbNaNJFcYi1LoM5X3Ik8E5ZEXFxHPcyccPOKMx3bVZwLQ0ufDz-iYP8G-2Ad9E3s7xtf7hACyvsixdg.EupN7gQaTBq3mOBSBBRDdfVlR3ya0rLBz1l7txLqSMc&dib_tag=se&qid=1764969704&refinements=p_4%3AYuru%2BStyle%2BJapan&s=apparel&sr=1-6&customId=B07536XX75&customizationToken=MC_Assembly_1%23B07536XX75&th=1&psc=1"
        }
      ],
      carouselImages: [
        "/designshelf/images/34_daruma/en/tshirt_std/tshirt_std_model.jpg",
        "/designshelf/images/34_daruma/design.png"
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
            <Link href="/designshelf" className="flex items-center">
              <Image 
                src="/designshelf/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="w-[100px] sm:w-[120px] h-auto hover:scale-105 transition-transform"
              />
              
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/designshelf/jp" className="text-gray-600 hover:text-gray-900 transition-colors">JP Store</Link>
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
                  {!product.endDate && (product.id === 118 || product.id === 119) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-20">NEW</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 min-h-[3rem]">{product.title}</h3>
                  {product.endDate && <CountdownTimer endDate={product.endDate} />}
                  {product.brand !== "Yuru Style Japan" && (
                    <Link 
                      href={
                        product.brand === "ゆるスタイル・ジャパン" ? "/designshelf/brands/yuru-style-japan" :
                        product.brand === "ワロタ商店" ? "/designshelf/brands/warota-shoten" :
                        product.brand === "Japanese Art Studio" ? "/designshelf/brands/japanese-art-studio" :
                        "/designshelf/brands"
                      }
                      className="text-blue-600 font-medium mb-4 hover:text-blue-800 transition-colors"
                    >
                      {product.brand}
                    </Link>
                  )}
                  {product.brand === "Yuru Style Japan" && (
                    <p className="text-blue-600 font-medium mb-4">
                      {product.brand}
                    </p>
                  )}
                  {(product.id === 118 || product.id === 119) && product.videoUrl && (
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
                    className="text-gray-600 hover:text-gray-900 mb-4 text-left transition-colors relative after:content-['▼'] after:absolute after:right-0"
                  >
                    {product.id === 118 ? "Product Details" : "商品詳細"}
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
                              <span className="text-xs text-gray-500">税込</span>
                            </div>
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
                  ) : (
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-800">{product.price}</span>
                        {product.id !== 118 && <span className="text-sm text-gray-500">税込</span>}
                      </div>
                      <a 
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="amazon-btn"
                        aria-label={product.id === 118 ? "View on Amazon" : "Amazonでこの商品を見る"}
                      >
                        {product.id === 118 ? (
                          <span className="label">
                            View on<br />Amazon
                          </span>
                        ) : (
                          <span className="label">Amazon<br />で見る</span>
                        )}
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
            <button
              onClick={closeImagePopup}
              className="absolute -top-8 md:-top-10 right-0 text-white text-3xl cursor-pointer p-2 z-10"
            >
              &times;
            </button>
            
            {/* 画像表示エリア */}
            <div className="relative w-full md:max-w-[80vw] h-full md:max-h-[80vh] bg-black rounded-lg flex justify-center items-center flex-1">
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
                      <span className="text-sm">Instagramで動画を見る</span>
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
          <button
            onClick={() => {
              setSimpleImagePopup(null);
              document.body.style.overflow = '';
            }}
            className="absolute top-4 right-4 text-white text-4xl cursor-pointer p-2 z-10 hover:bg-white/20 rounded-full transition-colors"
          >
            &times;
          </button>
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={simpleImagePopup}
              alt="拡大画像"
              width={1200}
              height={1200}
              className="w-full h-full max-w-full max-h-[95vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Utaraska LLC</h3>
              <p className="text-gray-300 mb-2">2F-C, Shibuya Dogenzaka Tokyu Building, 1-10-8 Dogenzaka, Shibuya-ku, Tokyo 150-0043, Japan</p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-2">&copy; 2025 Utaraska LLC. All rights reserved.</p>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              Some product images are AI-generated or edited, and colors and details may differ from the actual product. Please check the product description on Amazon before purchasing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}