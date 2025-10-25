'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function YuruStyleJapan() {
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [currentImageType, setCurrentImageType] = useState<'product' | 'design' | 'model'>('product');
  const [isZoomed, setIsZoomed] = useState(false);

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
  };

  // ESCキーでポップアップを閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && popupImage) {
        closeImagePopup();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [popupImage]);

  const toggleDetails = (index: number) => {
    setExpandedDetails(expandedDetails === index ? null : index);
  };

  const openImagePopup = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
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
      setPopupImage(type === 'product' ? product.image : type === 'design' ? product.designImage : (product.modelImage ?? product.image));
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // ゆるスタイル・ジャパンの商品データ
  const products: Product[] = [
    {
      id: 101,
      title: "風神雷神 ジップパーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_zip_hoodie.png",
      designImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_zip_hoodie_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/47HCMYw",
      features: [
        "風神と雷神を可愛くデフォルメしたキャラクターアート。伝統モチーフをユーモラスに再構築した現代和風デザイン。",
        "左右対称の配置とコンパクトな構図が印象的。ミニマルながらアート性が高く、ストリート系やポップアートファッションに最適。"
      ],
      description: "このデザインは、日本の伝統美術に登場する『風神』と『雷神』をベースに、親しみやすいデフォルメキャラクターとして表現した和風ポップアートです。軽妙な表情とポップな色使いが特徴で、古典的な神話モチーフを現代的なスタイルへと再解釈しています。『風神雷神デザイン』『ポップアートファッション』など複数のキーワードに親和性が高く、日常着としてもギフトとしても魅力的なビジュアルアートです。"
    },
    {
      id: 1,
      title: "風神雷神 デフォルメ神キャラ ポップアートファッションデザイン 和風",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee1.png",
      designImage: "/designshelf/images/tee1_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/45hj1Gl",
      features: [
        "風神と雷神を可愛くデフォルメしたキャラクターアート。伝統モチーフをユーモラスに再構築した現代和風デザイン。",
        "左右対称の配置とコンパクトな構図が印象的。ミニマルながらアート性が高く、ストリート系やポップアートファッションに最適。"
      ],
      description: "日本の伝統的な風神・雷神を、現代のポップアートスタイルで可愛くデフォルメしたデザイン。威厳ある神々を親しみやすいキャラクターとして再構築し、和風テイストを保ちながらもモダンなファッションアイテムとして仕上げました。"
    },
    {
      id: 2,
      title: "日本のお面 デフォルメ イラスト 和風ポップデザイン JAPANESE MASKS アート Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee2.png",
      designImage: "/designshelf/images/tee2_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3YOiNmd",
      features: [
        "日本の伝統的なお面を可愛くデフォルメしたキャラクターアート",
        "能面や歌舞伎の面をモチーフにした和風ポップデザイン"
      ],
      description: "日本の伝統芸能に欠かせないお面を、現代のファッションに合うよう可愛くデフォルメしたデザイン。能面や歌舞伎の面の特徴を活かしながらも、親しみやすいキャラクターとして再構築しました。"
    },
    {
      id: 3,
      title: "和風タイガーフェイス – ゆるかわ虎デザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee3.png",
      designImage: "/designshelf/images/tee3_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4jV8sNP",
      features: [
        "威厳ある虎を可愛くデフォルメした和風デザイン",
        "左右対称の配置でバランスの取れた構図"
      ],
      description: "虎の威厳と美しさを保ちながらも、親しみやすい表情でデフォルメした和風デザイン。左右対称の配置でバランスが良く、和風テイストを好む方におすすめです。"
    },
    {
      id: 4,
      title: "阿修羅 ゆるキャラ風 仏像イラスト 和風ユニーク Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee4.png",
      designImage: "/designshelf/images/tee4_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44IDOm1",
      features: [
        "仏教の阿修羅を可愛くデフォルメしたユニークなデザイン",
        "伝統的な仏像の特徴を活かした和風アート"
      ],
      description: "仏教の阿修羅像を、現代のファッションに合うよう可愛くデフォルメしたユニークなデザイン。伝統的な仏像の特徴を保ちながらも、親しみやすいキャラクターとして再構築しました。"
    },
    {
      id: 5,
      title: "龍 虎 対決 和風キャラクターアート デフォルメポップデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee5.png",
      designImage: "/designshelf/images/tee5_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4kszcVL",
      features: [
        "龍と虎の対決をテーマにした和風キャラクターアート",
        "左右対称の配置でバランスの取れた構図"
      ],
      description: "龍と虎の対決をテーマにした和風キャラクターアート。左右対称の配置でバランスが良く、和風テイストを好む方におすすめのデザインです。"
    },
    {
      id: 6,
      title: "龍 ドラゴン 顔 対称 ポップアート 和風ユニークデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee6.png",
      designImage: "/designshelf/images/tee6_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3ZorvYq",
      features: [
        "龍の顔を対称に配置した和風ポップアート",
        "ミニマルで印象的なデザイン"
      ],
      description: "龍の顔を対称に配置した和風ポップアート。ミニマルで印象的なデザインで、和風テイストを好む方におすすめです。"
    },
    {
      id: 7,
      title: "虎 タイガー 顔 対称 ポップアート 和風アニマルデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee7.png",
      designImage: "/designshelf/images/tee7_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4mmNbOG",
      features: [
        "虎の顔を対称に配置した和風アニマルデザイン",
        "左右対称の配置でバランスの取れた構図"
      ],
      description: "虎の顔を対称に配置した和風アニマルデザイン。左右対称の配置でバランスが良く、和風テイストを好む方におすすめです。"
    },
    {
      id: 24,
      title: "ゆるい和風ドラゴンのイラストアート 龍デザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee24.png",
      designImage: "/designshelf/images/tee24_design.png",
      modelImage: "/designshelf/images/tee24_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4nN1Zqw",
      features: [
        "ユーモラスな表情が魅力の、ゆるくて親しみやすい龍のイラスト",
        "和風テイストを取り入れたポップで個性的なドラゴンデザイン"
      ],
      description: "日本的な龍をモチーフにしながらも、親しみやすくゆるい表情で描かれたイラストが特徴。威圧感のないデフォルメスタイルのドラゴンが、ユーモアと個性を添えます。和風・アジア風のデザインが好きな方や、かわいい系のキャラクターTシャツを探している方におすすめの一枚です。"
    }
  ];

  // 現在のポップアップ対象（サムネやタブ表示に使用）
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
              <Link href="https://www.utaraska.co.jp/designshelf" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <Link href="/designshelf/brands" className="text-gray-600 hover:text-gray-900 transition-colors">ブランド</Link>
              <Link href="/designshelf/contact" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/designshelf/about" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ブランドヘッダー */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">ゆるスタイル・ジャパン</h1>
            <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto">
              伝統的な日本のモチーフを、かわいくデフォルメしたポップアートデザインを展開するブランド。和風キャラクターアートの新しい表現を追求します。
            </p>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ゆるスタイル・ジャパンの商品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div 
                  className="p-4 flex justify-center items-center h-72 bg-white cursor-pointer"
                  onClick={() => openImagePopup(product.id)}
                >
                  <Image 
                    src={product.modelImage ?? product.image} 
                    alt={product.title}
                    width={256}
                    height={256}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3rem]">{product.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{product.brand}</p>
                  
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
                    商品詳細
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
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                      <span className="text-sm text-gray-500">税込</span>
                    </div>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors text-center"
                    >
                      Amazon<br />で見る
                    </a>
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
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-[90%] max-h-[90%] flex flex-row items-center gap-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImagePopup}
              className="absolute -top-10 right-0 text-white text-3xl cursor-pointer p-2"
            >
              &times;
            </button>
            
            {/* 画像表示エリア */}
            <div className="relative max-w-[80vw] max-h-[80vh] bg-black rounded-lg flex justify-center items-center">
              <Image
                src={popupImage}
                alt="拡大画像"
                width={800}
                height={800}
                className={`max-w-full max-h-[80vh] object-contain cursor-pointer transition-transform ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={toggleZoom}
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                🔍
              </div>
            </div>
            
            {/* コントロールエリア */}
            <div className="flex flex-col gap-4 min-w-[200px]">
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
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ウタラスカ合同会社</h3>
              <p className="text-gray-300 mb-2">〒150-0001 東京都渋谷区神宮前4-18-9</p>
              <p className="text-gray-300">contact@utaraska.co.jp</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Design Shelf</h4>
              <ul className="space-y-2">
                <li><Link href="/designshelf/brands" className="text-gray-300 hover:text-white transition-colors">ブランド一覧</Link></li>
                <li><Link href="/designshelf/about" className="text-gray-300 hover:text-white transition-colors">運営者情報</Link></li>
                <li>
                  <Link href="/designshelf/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link>
                  <div className="text-xs text-gray-400 mt-1">v0.1.3</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400">&copy; 2025 ウタラスカ合同会社. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
