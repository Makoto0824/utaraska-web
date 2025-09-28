'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DesignShelf() {
  const [expandedDetails, setExpandedDetails] = useState<number | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [currentImageType, setCurrentImageType] = useState<'product' | 'design'>('product');
  const [isZoomed, setIsZoomed] = useState(false);

  const banners = [
    { src: "/designshelf/images/banner5.jpg", alt: "セールバナー" },
    { src: "/designshelf/images/banner2.jpg", alt: "バナー2", link: "/designshelf" },
    { src: "/designshelf/images/banner3.jpg", alt: "バナー3", link: "/designshelf" },
    { src: "/designshelf/images/banner4.jpg", alt: "バナー4", link: "/designshelf" }
  ];

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

  const switchImageType = (type: 'product' | 'design') => {
    if (!popupId) return;
    const productId = parseInt(popupId.replace('imagePopup', ''));
    const product = products.find(p => p.id === productId);
    if (product) {
      setCurrentImageType(type);
      setPopupImage(type === 'product' ? product.image : product.designImage);
      setIsZoomed(false);
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // 元のサイトと同じ24商品のデータ（実際の商品名とAmazonリンク付き）
  const products = [
    {
      id: 24,
      title: "ゆるい和風ドラゴンのイラストアート 龍デザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee24.png",
      designImage: "/designshelf/images/tee24_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4nN1Zqw",
      features: [
        "ユーモラスな表情が魅力の、ゆるくて親しみやすい龍のイラスト",
        "和風テイストを取り入れたポップで個性的なドラゴンデザイン"
      ],
      description: "日本的な龍をモチーフにしながらも、親しみやすくゆるい表情で描かれたイラストが特徴。威圧感のないデフォルメスタイルのドラゴンが、ユーモアと個性を添えます。和風・アジア風のデザインが好きな方や、かわいい系のキャラクターTシャツを探している方におすすめの一枚です。"
    },
    {
      id: 21,
      title: "戦国武将 兜 和風 侍 ピクセルアート #1 Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee21.png",
      designImage: "/designshelf/images/tee21_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4kmiHeh",
      features: [
        "時の天下人が\"日本一の兵\"と称えた、戦国屈指の武将の兜をピクセルアートで表現したデザイン",
        "ドット調のアートスタイルで、レトロゲーム風のユニークな戦国モチーフ"
      ],
      description: "戦国時代の英雄の特徴的な兜を、ポップで懐かしいピクセルアートとしてデザインしました。赤備えと鹿角のシルエットを強調し、現代のファッションに落とし込んだ和風デザインです。戦国ファンやゲーム好きにもおすすめ。"
    },
    {
      id: 22,
      title: "戦国武将 兜 和風 侍 ピクセルアート #2 Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee22.png",
      designImage: "/designshelf/images/tee22_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4kr7ZTF",
      features: [
        "「愛」の前立てが印象的な戦国武将の兜をピクセルアートで再現",
        "シンプルな配置で、戦国ファンにもストリートファッションにもマッチ"
      ],
      description: "義と愛、戦国時代の名将が着用した兜を、懐かしさ漂うピクセルアートでデザインしました。兜正面には「愛」の文字が力強く表現されており、忠義と信念を象徴します。和風デザインとしてだけでなく、個性的なファッションアイテムとしても映える一枚です。武将ファン、歴史好き、和モチーフ好きにおすすめのデザインです。プレゼントやギフトにも最適です。"
    },
    {
      id: 23,
      title: "戦国武将 兜 和風 侍 ピクセルアート #3 Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee23.png",
      designImage: "/designshelf/images/tee23_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/43ML12e",
      features: [
        "特徴的な鹿角兜をドット絵で再現したミニマルで印象的なデザイン。",
        "戦国・武将ファン必見。和風でレトロなピクセルアートが胸元に映える。"
      ],
      description: "戦国最強と名高い戦国武将の兜をピクセルアートで表現したグラフィックデザイン。左右対称の鹿角が圧倒的な存在感を放ち、戦国時代の力強さと美しさを現代風にアレンジ。ドット絵のワンポイントデザインは、カジュアルながらも個性を主張し、和風テイストや侍モチーフのアイテムを好む方にぴったりです。戦国武将ファンやレトロゲーマーへのプレゼントやギフトにも最適。"
    },
    {
      id: 1,
      title: "風神雷神 デフォルメ神キャラ ポップアートファッションデザイン 和風",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee1.png",
      designImage: "/designshelf/images/tee1_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3xQZ8Kj",
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
      amazonLink: "https://amzn.to/45hj1Gl",
      features: ["商品2の特徴1", "商品2の特徴2"],
      description: "商品2の詳細説明です。"
    },
    {
      id: 3,
      title: "和風タイガーフェイス – ゆるかわ虎デザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee3.png",
      designImage: "/designshelf/images/tee3_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3YOiNmd",
      features: ["商品3の特徴1", "商品3の特徴2"],
      description: "商品3の詳細説明です。"
    },
    {
      id: 4,
      title: "阿修羅 ゆるキャラ風 仏像イラスト 和風ユニーク Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee4.png",
      designImage: "/designshelf/images/tee4_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4jV8sNP",
      features: ["商品4の特徴1", "商品4の特徴2"],
      description: "商品4の詳細説明です。"
    },
    {
      id: 5,
      title: "龍 虎 対決 和風キャラクターアート デフォルメポップデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee5.png",
      designImage: "/designshelf/images/tee5_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44IDOm1",
      features: ["商品5の特徴1", "商品5の特徴2"],
      description: "商品5の詳細説明です。"
    },
    {
      id: 6,
      title: "龍 ドラゴン 顔 対称 ポップアート 和風ユニークデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee6.png",
      designImage: "/designshelf/images/tee6_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4kszcVL",
      features: ["商品6の特徴1", "商品6の特徴2"],
      description: "商品6の詳細説明です。"
    },
    {
      id: 7,
      title: "虎 タイガー 顔 対称 ポップアート 和風アニマルデザイン Tシャツ",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/tee7.png",
      designImage: "/designshelf/images/tee7_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3ZorvYq",
      features: ["商品7の特徴1", "商品7の特徴2"],
      description: "商品7の詳細説明です。"
    },
    {
      id: 8,
      title: "浮世絵 役者絵 サイケデリックアート 和風ビジュアル Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee8.png",
      designImage: "/designshelf/images/tee8_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4mmNbOG",
      features: ["商品8の特徴1", "商品8の特徴2"],
      description: "商品8の詳細説明です。"
    },
    {
      id: 9,
      title: "浮世絵 波 富士山 サイケデリックアート 和風ビジュアル Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee9.png",
      designImage: "/designshelf/images/tee9_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44I7S1h",
      features: ["商品9の特徴1", "商品9の特徴2"],
      description: "商品9の詳細説明です。"
    },
    {
      id: 10,
      title: "美人画 茶道 浮世絵風 ネオジャパネスク 和風アートTシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee10.png",
      designImage: "/designshelf/images/tee10_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4mhTnrn",
      features: ["商品10の特徴1", "商品10の特徴2"],
      description: "商品10の詳細説明です。"
    },
    {
      id: 11,
      title: "富士山 サイケデリック浮世絵 和風ネオンアート Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee11.png",
      designImage: "/designshelf/images/tee11_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4ktKJUX",
      features: ["商品11の特徴1", "商品11の特徴2"],
      description: "商品11の詳細説明です。"
    },
    {
      id: 12,
      title: "武士 サムライ サイケデリックアート ポップアートファッション 和風",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee12.png",
      designImage: "/designshelf/images/tee12_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4k17XBV",
      features: ["商品12の特徴1", "商品12の特徴2"],
      description: "商品12の詳細説明です。"
    },
    {
      id: 13,
      title: "【おもしろ】笑うカバには福きたる 笑う門には福来たるのダジャレ ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee13.png",
      designImage: "/designshelf/images/tee13_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4j90pLY",
      features: ["商品13の特徴1", "商品13の特徴2"],
      description: "商品13の詳細説明です。"
    },
    {
      id: 14,
      title: "【おもしろ】二兎を追うものはワンダフル 二兎を追うものは一兎をも得ずのダジャレデザイン ことわざ×ギャグアート",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee14.png",
      designImage: "/designshelf/images/tee14_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/43eKqHT",
      features: ["商品14の特徴1", "商品14の特徴2"],
      description: "商品14の詳細説明です。"
    },
    {
      id: 15,
      title: "【おもしろ】犬も歩けばカーニバル 犬の歩けば棒に当たるのダジャレデザイン ことわざ×ギャグ アート プレゼントに最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee15.png",
      designImage: "/designshelf/images/tee15_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3HetJDv",
      features: ["商品15の特徴1", "商品15の特徴2"],
      description: "商品15の詳細説明です。"
    },
    {
      id: 16,
      title: "【おもしろ】棚から豚キムチ 棚からぼたもちのダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee16.png",
      designImage: "/designshelf/images/tee16_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4j8jHRK",
      features: ["商品16の特徴1", "商品16の特徴2"],
      description: "商品16の詳細説明です。"
    },
    {
      id: 17,
      title: "【おもしろ】塵も積もれば筋肉になる 塵も積もれば山となるのダジャレデザイン ことわざ×ギャグアート プレゼントに最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee17.png",
      designImage: "/designshelf/images/tee17_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44HqiiF",
      features: ["商品17の特徴1", "商品17の特徴2"],
      description: "商品17の詳細説明です。"
    },
    {
      id: 18,
      title: "【おもしろ】花より男子 花より団子のダジャレデザイン ことわざ×ギャグアートプレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee18.png",
      designImage: "/designshelf/images/tee18_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/43Ce8GD",
      features: ["商品18の特徴1", "商品18の特徴2"],
      description: "商品18の詳細説明です。"
    },
    {
      id: 19,
      title: "【おもしろ】泣きっつらにポチっとな 泣きっ面に蜂のダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee19.png",
      designImage: "/designshelf/images/tee19_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3H6FxI1",
      features: ["商品19の特徴1", "商品19の特徴2"],
      description: "商品19の詳細説明です。"
    },
    {
      id: 20,
      title: "【おもしろ】知らぬが日焼け 知らぬが仏のダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee20.png",
      designImage: "/designshelf/images/tee20_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3H4CHU4",
      features: ["商品20の特徴1", "商品20の特徴2"],
      description: "商品20の詳細説明です。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <nav>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Design Shelf" 
                width={120} 
                height={60}
                className="h-15 w-auto hover:scale-105 transition-transform"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">ホーム</Link>
              <div className="relative group">
                <span className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">ブランド</span>
                <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ゆるスタイル・ジャパン</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">Japanese Art Studio</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">ワロタ商店</Link>
                    <Link href="/designshelf" className="text-gray-700 hover:bg-gray-100 p-2 rounded transition-colors">詳しくはこちら</Link>
                  </div>
                </div>
              </div>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">お問い合わせ</Link>
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">運営者情報</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* バナースライドショー */}
        <section className="mb-12">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
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
                  className="object-cover"
                />
              </div>
            ))}
            
            {/* バナーインジケーター */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentBanner ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            {/* ナビゲーションボタン */}
            <button
              onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              ❯
            </button>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">すべてのデザイン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div 
                  className="p-4 flex justify-center items-center h-72 bg-white cursor-pointer"
                  onClick={() => openImagePopup(product.id)}
                >
                  <Image 
                    src={product.image} 
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
                    onClick={() => toggleDetails(index)}
                    className="text-gray-600 hover:text-gray-900 mb-4 text-left transition-colors relative after:content-['▼'] after:absolute after:right-0 after:transition-transform after:duration-300"
                    style={{ 
                      transform: expandedDetails === index ? 'rotate(180deg)' : 'rotate(0deg)' 
                    }}
                  >
                    商品詳細
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedDetails === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mb-4">
                      {product.features.map((feature, idx) => (
                        <p key={idx} className="text-sm text-gray-600 mb-2">{feature}</p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-800">{product.price}</span>
                      <span className="text-sm text-gray-500">税込</span>
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
                    </div>
                    <a 
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Amazonで見る
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeImagePopup}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeImagePopup}
              className="absolute top-2 right-2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              ✕
            </button>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => switchImageType('product')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentImageType === 'product' 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                商品画像
              </button>
              <button
                onClick={() => switchImageType('design')}
                className={`px-4 py-2 rounded transition-colors ${
                  currentImageType === 'design' 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                デザイン画像
              </button>
            </div>
            <div className="relative">
              <Image
                src={popupImage}
                alt="拡大画像"
                width={800}
                height={800}
                className={`max-w-full max-h-[70vh] object-contain cursor-pointer transition-transform ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={toggleZoom}
              />
              <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                🔍 クリックでズーム
              </div>
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
                <li><Link href="/designshelf" className="text-gray-300 hover:text-white transition-colors">ブランド一覧</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">運営者情報</Link></li>
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
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