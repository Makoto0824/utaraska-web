'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Instagram埋め込みの型定義
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function WarotaShoten() {
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

  // Instagram埋め込みスクリプトの読み込み
  useEffect(() => {
    // 既にスクリプトが読み込まれているか確認
    if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // 商品リストが変更されたときにInstagram埋め込みを再処理
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 100);
    return () => clearTimeout(timer);
  });

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

  // ワロタ商店の商品データ
  const products: Product[] = [
    {
      id: 111,
      title: "向かい合うゆるいトナカイ face2face パーカー",
      brand: "ワロタ商店",
      image: "/designshelf/images/28_tonakai/hoodie/28_tonakai_hoodie.png",
      designImage: "/designshelf/images/28_tonakai/28_tonakai_design.png",
      modelImage: "/designshelf/images/28_tonakai/hoodie/28_tonakai_hoodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/4nUNrnw",
      features: [
        "左右に向かい合うトナカイの顔をワンポイントで配したビジュアル。線は柔らかくゆるいタッチで描かれており、派手になりすぎず日常のコーデに馴染む設計です。胸元に置いたサイズ感で視線を自然に引き、季節商品としての認識を高めます",
        "クリスマスカラー（深緑、白、赤など）と相性が良い配色想定で、ギフトやイベント着にも使いやすい。"
      ],
      description: "このデザインは、向かい合う二頭のトナカイをゆるいタッチで並べたシンプルなホリデーイラストです。表情は柔らかく親しみやすいため、年齢や性別を問わず着用しやすいのが特徴です。胸元ワンポイントに収めることで日常の着回しに溶け込み、クリスマスシーズンのアクセントとして使いやすく仕上げました。"
    },
    {
      id: 110,
      title: "パリピサンタ Tシャツ",
      brand: "ワロタ商店",
      image: "/designshelf/images/27_santa/tshirt/27_santa_tshirt.png",
      designImage: "/designshelf/images/27_santa/27_santa_design.png",
      modelImage: "/designshelf/images/27_santa/tshirt/27_santa_tshirt_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4qS4f1j",
      features: [
        "胸元に左右並べたサンタ顔のワンポイントデザイン。ゆるいタッチで親しみやすく、主張しすぎないため普段着に合わせやすい。",
        "シーズンのギフトやイベント着として目を引きやすく、年代・性別を問わず使いやすいビジュアルを意識"
      ],
      description: "胸元に並んだサンタ顔のイラストが、さりげないホリデームードを作るデザインです。線は柔らかく、顔の表情は遊び心を残したまま落ち着いた印象にまとめています。深緑や冬色の背景でよく映える配色に調整しているため、季節のコーデの差し込みとして使いやすい作りです。ギフトとして渡しやすいよう、主張しすぎない大きさに収めている点も特徴です"
    },
    {
      id: 109,
      title: "パリピサンタ パーカー",
      brand: "ワロタ商店",
      image: "/designshelf/images/27_santa/hoodie/27_santa_hoodie.png",
      designImage: "/designshelf/images/27_santa/27_santa_design.png",
      modelImage: "/designshelf/images/27_santa/hoodie/27_santa_hoodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/49IhqeX",
      features: [
        "胸元に左右並べたサンタ顔のワンポイントデザイン。ゆるいタッチで親しみやすく、主張しすぎないため普段着に合わせやすい。",
        "シーズンのギフトやイベント着として目を引きやすく、年代・性別を問わず使いやすいビジュアルを意識"
      ],
      description: "胸元に並んだサンタ顔のイラストが、さりげないホリデームードを作るデザインです。線は柔らかく、顔の表情は遊び心を残したまま落ち着いた印象にまとめています。深緑や冬色の背景でよく映える配色に調整しているため、季節のコーデの差し込みとして使いやすい作りです。ギフトとして渡しやすいよう、主張しすぎない大きさに収めている点も特徴です"
    },
    {
      id: 25,
      title: "やる気スイッチオフ おもしろ 面白い Tシャツ",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee25.png",
      designImage: "/designshelf/images/tee25_design.png",
      modelImage: "/designshelf/images/tee25_model.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/48L689n",
      features: [
        "胸元に描かれた\"やる気スイッチ\"をモチーフにしたユーモラスなデザイン",
        "ON／OFFの切り替えをモチーフにした、おもしろメッセージアート"
      ],
      description: "このデザインは『やる気スイッチ』をテーマにしたユーモラスなアート。誰もが共感する“やる気のON・OFF”をシンプルなスイッチで表現し、思わずクスッと笑えるデザインに仕上げました。職場や学校、カジュアルシーンなど、どんな場面でも話題になるおもしろアートです。ユーモアとシンプルデザインを両立した、日常に遊び心を添える一枚。"
    },
    {
      id: 13,
      title: "【おもしろ】笑うカバには福きたる 笑う門には福来たるのダジャレ ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee13.png",
      designImage: "/designshelf/images/tee13_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/43eKqHT",
      features: [
        "「笑う門には福来たる」を「笑うカバには福きたる」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「笑う門には福来たる」を「笑うカバには福きたる」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントやギフトにも最適です。"
    },
    {
      id: 14,
      title: "【おもしろ】二兎を追うものはワンダフル 二兎を追うものは一兎をも得ずのダジャレデザイン ことわざ×ギャグアート",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee14.png",
      designImage: "/designshelf/images/tee14_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3HetJDv",
      features: [
        "「二兎を追うものは一兎をも得ず」を「二兎を追うものはワンダフル」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「二兎を追うものは一兎をも得ず」を「二兎を追うものはワンダフル」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインです。"
    },
    {
      id: 15,
      title: "【おもしろ】犬も歩けばカーニバル 犬の歩けば棒に当たるのダジャレデザイン ことわざ×ギャグ アート プレゼントに最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee15.png",
      designImage: "/designshelf/images/tee15_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4j8jHRK",
      features: [
        "「犬も歩けば棒に当たる」を「犬も歩けばカーニバル」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「犬も歩けば棒に当たる」を「犬も歩けばカーニバル」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントに最適です。"
    },
    {
      id: 16,
      title: "【おもしろ】棚から豚キムチ 棚からぼたもちのダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee16.png",
      designImage: "/designshelf/images/tee16_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44HqiiF",
      features: [
        "「棚からぼたもち」を「棚から豚キムチ」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「棚からぼたもち」を「棚から豚キムチ」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントやギフトにも最適です。"
    },
    {
      id: 17,
      title: "【おもしろ】塵も積もれば筋肉になる 塵も積もれば山となるのダジャレデザイン ことわざ×ギャグアート プレゼントに最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee17.png",
      designImage: "/designshelf/images/tee17_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/43Ce8GD",
      features: [
        "「塵も積もれば山となる」を「塵も積もれば筋肉になる」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「塵も積もれば山となる」を「塵も積もれば筋肉になる」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントに最適です。"
    },
    {
      id: 18,
      title: "【おもしろ】花より男子 花より団子のダジャレデザイン ことわざ×ギャグアートプレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee18.png",
      designImage: "/designshelf/images/tee18_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3H6FxI1",
      features: [
        "「花より団子」を「花より男子」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「花より団子」を「花より男子」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントやギフトにも最適です。"
    },
    {
      id: 19,
      title: "【おもしろ】泣きっつらにポチっとな 泣きっ面に蜂のダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee19.png",
      designImage: "/designshelf/images/tee19_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3H4CHU4",
      features: [
        "「泣きっ面に蜂」を「泣きっつらにポチっとな」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「泣きっ面に蜂」を「泣きっつらにポチっとな」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントやギフトにも最適です。"
    },
    {
      id: 20,
      title: "【おもしろ】知らぬが日焼け 知らぬが仏のダジャレデザイン ことわざ×ギャグアート プレゼント・ギフトにも最適",
      brand: "ワロタ商店",
      image: "/designshelf/images/tee20.png",
      designImage: "/designshelf/images/tee20_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4dqyHcx",
      features: [
        "「知らぬが仏」を「知らぬが日焼け」にダジャレ化",
        "ことわざ×ギャグアートのユニークなデザイン"
      ],
      description: "「知らぬが仏」を「知らぬが日焼け」にダジャレ化したことわざ×ギャグアート。ユニークで面白いデザインで、プレゼントやギフトにも最適です。"
    }
  ];

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
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">ワロタ商店</h1>
            <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto">
              ワロタ商店は、「おもしろ」「ギャグ」「ことわざ逆」「パロディ」「ユーモア」「遊び心」をテーマにした、オリジナルグッズブランドです。<br />
              ふと目にした瞬間にクスッと笑える。<br />
              そんな商品を目指しています。
            </p>
          </div>
        </section>

        {/* 商品セクション */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">ワロタ商店の商品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div 
                  className={`relative p-4 flex justify-center items-center bg-white ${product.id === 111 ? 'min-h-[500px]' : 'h-72 cursor-pointer'}`}
                  onClick={() => product.id !== 111 && openImagePopup(product.id)}
                >
                  {product.id === 111 ? (
                    <div 
                      className="w-full flex justify-center"
                      id={`instagram-embed-${product.id}`}
                      dangerouslySetInnerHTML={{
                        __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DQ_wi85AZ91/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DQ_wi85AZ91/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">この投稿をInstagramで見る</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DQ_wi85AZ91/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">2人の娘と妻にカッコつけたい、しがないクリエイター(@designshelf2025)がシェアした投稿</a></p></div></blockquote>`
                      }}
                    />
                  ) : (
                    <Image 
                      src={product.modelImage ?? product.image}
                      alt={product.title}
                      width={256}
                      height={256}
                      className="object-contain hover:scale-105 transition-transform"
                    />
                  )}
                  {(product.id === 109 || product.id === 110 || product.id === 111) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
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
              <button
                onClick={() => switchImageType('product')}
                className={`flex flex-col items-center p-3 rounded transition-colors ${
                  currentImageType === 'product' 
                    ? 'bg-white text-black' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Image
                  src={popupImage.includes('_design') ? popupImage.replace('_design', '') : popupImage}
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
                  src={popupImage.includes('_design') ? popupImage : popupImage.replace('.png', '_design.png')}
                  alt="デザイン画像"
                  width={64}
                  height={64}
                  className="object-contain mb-2"
                />
                <span className="text-sm">デザイン画像</span>
              </button>
              {/* 現在のポップアップ対象（着用イメージタブの表示制御） */}
              {(() => {
                const id = popupId ? parseInt(popupId.replace('imagePopup','')) : null;
                const current: Product | undefined = id ? products.find(p => p.id === id) : undefined;
                return current?.modelImage;
              })() && (
                <button
                  onClick={() => switchImageType('model')}
                  className={`flex flex-col items-center p-3 rounded transition-colors ${
                    currentImageType === 'model' 
                      ? 'bg-white text-black' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Image
                    src={(() => {
                      const id = popupId ? parseInt(popupId.replace('imagePopup','')) : null;
                      const current: Product | undefined = id ? products.find(p => p.id === id) : undefined;
                      return current?.modelImage ?? '';
                    })()}
                    alt="着用イメージ"
                    width={64}
                    height={64}
                    className="object-contain mb-2"
                  />
                  <span className="text-sm">着用イメージ</span>
                </button>
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
