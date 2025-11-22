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
      <div className="bg-orange-50 border border-orange-300 rounded-lg p-3 mb-4">
        <p className="text-orange-800 font-bold text-xs text-center mb-2">期間限定商品</p>
        <p className="text-orange-700 text-xs text-center mb-2">販売終了: 2025年12月26日 00:00</p>
        <div className="flex justify-center items-center gap-1 text-center">
          <div className="bg-white rounded px-2 py-1.5 min-w-[45px]">
            <div className="text-orange-800 font-bold text-base leading-tight">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">日</div>
          </div>
          <div className="text-orange-800 font-bold text-base">:</div>
          <div className="bg-white rounded px-2 py-1.5 min-w-[45px]">
            <div className="text-orange-800 font-bold text-base leading-tight">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">時</div>
          </div>
          <div className="text-orange-800 font-bold text-base">:</div>
          <div className="bg-white rounded px-2 py-1.5 min-w-[45px]">
            <div className="text-orange-800 font-bold text-base leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">分</div>
          </div>
          <div className="text-orange-800 font-bold text-base">:</div>
          <div className="bg-white rounded px-2 py-1.5 min-w-[45px]">
            <div className="text-orange-800 font-bold text-base leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-orange-600 text-[10px] leading-tight">秒</div>
          </div>
        </div>
      </div>
    );
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
  };

  // 元のサイトと同じ24商品のデータ（完全な商品説明付き）
  const products: Product[] = [
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
      id: 112,
      title: "ゆるい風神雷神 トレーナー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/1_fujin_raijin/swet/1_fujin_raijin_swet.png",
      designImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/swet/1_fujin_raijin_swet_model.png",
      price: "¥3,980",
      amazonLink: "https://amzn.to/4i9oSC7",
      features: [
        "風神と雷神を可愛くデフォルメしたキャラクターアート。伝統モチーフをユーモラスに再構築した現代和風デザイン",
        "左右対称の配置とコンパクトな構図が印象的。ミニマルながらアート性が高く、ストリート系やポップアートファッションに最適"
      ],
      description: "このデザインは、日本の伝統美術に登場する「風神」と「雷神」をベースに、親しみやすいデフォルメキャラクターとして表現した和風ポップアートです。軽妙な表情とポップな色使いが特徴で、古典的な神話モチーフを現代的なスタイルへと再解釈しています。「風神雷神デザイン」「ポップアートファッション」など複数のキーワードに親和性が高く、日常着としてもギフトとしても魅力的なビジュアルアートです。",
      videoUrl: "https://www.instagram.com/reel/DRBGUjCgQZ4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
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
      description: "このデザインは、向かい合う二頭のトナカイをゆるいタッチで並べたシンプルなホリデーイラストです。表情は柔らかく親しみやすいため、年齢や性別を問わず着用しやすいのが特徴です。胸元ワンポイントに収めることで日常の着回しに溶け込み、クリスマスシーズンのアクセントとして使いやすく仕上げました。",
      videoUrl: "https://www.instagram.com/reel/DQ_wi85AZ91/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
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
      description: "胸元に並んだサンタ顔のイラストが、さりげないホリデームードを作るデザインです。線は柔らかく、顔の表情は遊び心を残したまま落ち着いた印象にまとめています。深緑や冬色の背景でよく映える配色に調整しているため、季節のコーデの差し込みとして使いやすい作りです。ギフトとして渡しやすいよう、主張しすぎない大きさに収めている点も特徴です",
      videoUrl: "https://www.instagram.com/reel/DQ6iV2DAYVA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      endDate: "2025-12-26T00:00:00"
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
      description: "胸元に並んだサンタ顔のイラストが、さりげないホリデームードを作るデザインです。線は柔らかく、顔の表情は遊び心を残したまま落ち着いた印象にまとめています。深緑や冬色の背景でよく映える配色に調整しているため、季節のコーデの差し込みとして使いやすい作りです。ギフトとして渡しやすいよう、主張しすぎない大きさに収めている点も特徴です",
      videoUrl: "https://www.instagram.com/reel/DQ6h8WhAVQo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      endDate: "2025-12-26T00:00:00"
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
      title: "ゆるい阿修羅 パーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/4_ashura/4_ashura_hoodie.png",
      designImage: "/designshelf/images/4_ashura/4_ashura_design.png",
      modelImage: "/designshelf/images/4_ashura/4_ashura_hoodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/4oIKozG",
      features: [
        "阿修羅像をモチーフに、ゆるキャラ風に再構築したユニークなアートデザイン。伝統とユーモアが融合した現代風ミニマル仏像イラスト。",
        "シンプルながら存在感のある線画スタイルと、和柄をあしらった腰巻がアクセント。仏像ファンや仏教カルチャーに興味のある人にも刺さる個性派グラフィック。"
      ],
      description: "このデザインは、日本で広く知られる阿修羅像を、ポップかつユーモラスなタッチで表現した\"ゆるアート\"作品です。宗教的荘厳さよりも、日常に溶け込むかわいさと不思議な存在感を持ち、仏像・仏教カルチャー・和風アート・ご利益デザイン・ゆるキャラ・サブカル・アジアンテイストといった複数のジャンルにアピールします。シンプルな白地に映えるミニマル構成で、老若男女問わず楽しめるデザインです。ユニークなギフトを探している方におすすめ。",
      videoUrl: "https://www.instagram.com/reel/DQi8IRygWyW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 106,
      title: "ゆるい日本のお面たち トレーナー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/2_japanese_masks/japanese_masks_sweat.png",
      designImage: "/designshelf/images/2_japanese_masks/japanese_masks_design.png",
      modelImage: "/designshelf/images/2_japanese_masks/japanese_masks_sweat_model.png",
      price: "¥3,960",
      amazonLink: "https://amzn.to/47lyTbK",
      features: [
        "6種類の日本伝統仮面をポップに表現した、視覚的にインパクトのあるデザイン。",
        "能・狂言・祭りなどに登場する仮面をモチーフに、日本文化の奥深さをユーモラスに表現。"
      ],
      description: "「JAPANESE MASKS」の文字の上に、6種類の日本の伝統的な仮面がカラフルに描かれたユニークなデザインです。それぞれの仮面は、能や狂言、祭りなどで使用されるもので、文化的な背景や象徴的な意味を持っています。表情豊かで個性的な仮面が並ぶことで、日本文化の多様性や奥深さをユーモラスかつアーティスティックに表現しています。インパクトのあるビジュアルで、日本文化が好きな方、和モチーフのアートを楽しみたい方、個性的なスタイルを求める方におすすめです。",
      videoUrl: "https://www.instagram.com/reel/DQiwNd3gWcj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 105,
      title: "ゆるい虎 パーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/3_tiger/3_tiger_hoodie.png",
      designImage: "/designshelf/images/3_tiger/3_tiger_design.png",
      modelImage: "/designshelf/images/3_tiger/3_tiger_hooodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/3JuRuZJ",
      features: [
        "大胆で印象的な虎の顔を和風テイストで表現した、ユニークで目を引くアートスタイル。",
        "ゆるキャラ風のかわいらしさと、伝統的なジャパニーズタトゥーアートの要素を融合したポップなデザイン。"
      ],
      description: "このデザインは、和風のタトゥーアートから着想を得た虎の顔を、ポップでゆるいキャラクター風にアレンジしたものです。力強さと愛嬌を併せ持つこの虎モチーフは、日本文化やアジアンテイストを好む方におすすめ。個性を演出したいシーンやプレゼントにも最適です。",
      videoUrl: "https://www.instagram.com/reel/DQc5u-SgTfA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 104,
      title: "ゆるい龍と龍 パーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/6_dragondragon/6_dragondragon.png",
      designImage: "/designshelf/images/6_dragondragon/6_dragondragon_design.png",
      modelImage: "/designshelf/images/6_dragondragon/6_dragondragon_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/49tW057",
      features: [
        "左右対称に配置されたドラゴンの顔がユニークで目を引くアートデザイン。ミニマルな構成ながらインパクト抜群。",
        "和風モチーフにポップアートの要素を加えた現代的グラフィック。アジアンテイスト、カジュアルファッション、ストリートアートにマッチ。"
      ],
      description: "このデザインは、左右対称に配置された龍（ドラゴン）の顔が特徴の、ポップで遊び心あふれる和風アートです。アート、ストリート系、アジアンモチーフ、和柄ファッション、オリエンタルデザインなど、幅広いジャンルに対応。デフォルメされた龍の表情がキャッチーで、男女問わず着こなしのアクセントとして最適です。個性的なファッションを楽しみたい方、ギフト用途にもおすすめの一着です。",
      videoUrl: "https://www.instagram.com/reel/DQaXIDAgQbC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 101,
      title: "風神雷神 ジップパーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_zip_hoodie.png",
      designImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_design.png",
      modelImage: "/designshelf/images/1_fujin_raijin/1_fujin_raijin_zip_hoodie_model.png",
      price: "¥4,480",
      amazonLink: "https://amzn.to/47HCMYw",
      features: [
        "風神と雷神を可愛くデフォルメしたキャラクターアート。伝統モチーフをユーモラスに再構築した現代和風デザイン。",
        "左右対称の配置とコンパクトな構図が印象的。ミニマルながらアート性が高く、ストリート系やポップアートファッションに最適。"
      ],
      description: "このデザインは、日本の伝統美術に登場する『風神』と『雷神』をベースに、親しみやすいデフォルメキャラクターとして表現した和風ポップアートです。軽妙な表情とポップな色使いが特徴で、古典的な神話モチーフを現代的なスタイルへと再解釈しています。『風神雷神デザイン』『ポップアートファッション』など複数のキーワードに親和性が高く、日常着としてもギフトとしても魅力的なビジュアルアートです。",
      videoUrl: "https://www.instagram.com/reel/DQOlTdWAWx8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 102,
      title: "ゆるい龍と虎 パーカー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/5_dragon_tiger/5_dragon_tiger.png",
      designImage: "/designshelf/images/5_dragon_tiger/5_dragon_tiger_design.png",
      modelImage: "/designshelf/images/5_dragon_tiger/5_dragon_tiger_hoodie_model.png",
      price: "¥4,400",
      amazonLink: "https://amzn.to/3WUYa6i",
      features: [
        "伝説の神獣「龍」と猛獣「虎」が向かい合う、力強くもユーモラスな構図。和風×対称構図の王道をポップなイラストで再構築。",
        "キャラクター調にデフォルメされた表情が印象的。親しみやすさとエネルギーを兼ね備えた現代アジアンアートの一作。"
      ],
      description: "このデザインは、東洋の象徴的存在である「龍」と「虎」が向かい合う\"龍虎相対\"の構図を、ポップなテイストとキャラクター風の表現で現代的に再解釈したアートワークです。左右に配置された顔が視線を交わすことで、静的ながらも緊張感のある対峙を演出。伝統的な龍虎モチーフにユーモアと親しみやすさを加えることで、アートファッション・和風ポップ・ストリート系・デフォルメアニマルデザインなど多ジャンルにマッチするビジュアルに仕上がっています。文化的象徴性とデザイン性の両方を兼ね備えた作品です。",
      videoUrl: "https://www.instagram.com/reel/DQSnANAgZiM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      id: 103,
      title: "ゆるい虎と虎 トレーナー",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/7_tigertiger/7_tigertiger_sweatshirt.png",
      designImage: "/designshelf/images/7_tigertiger/7_tigertiger_design.png",
      modelImage: "/designshelf/images/7_tigertiger/7_tigertiger_sweatshirt_model.png",
      price: "¥3,960",
      amazonLink: "https://amzn.to/4ocuRrV",
      features: [
        "左右対称に配置されたタイガーの顔がユニークな構成。シンプルなデザインに込められたインパクトとバランスが魅力。",
        "和風アートの虎モチーフに、現代的なポップイラストのテイストを融合。ストリートファッションやアート好きに刺さるキャッチーな表現。"
      ],
      description: "このデザインは、虎（タイガー）の顔を左右対称に配置したユーモラスかつ力強いグラフィックアートです。伝統的な日本の動物モチーフに、アメコミ風のポップアートテイストを加えることで、アジアン×モダンな独自の世界観を表現。ミニマルな配置ながら視線を惹きつけるデザインは、和柄、アニマルデザイン、タイガーアート、ストリート系、レトロポップ、アートファッションといったジャンルに幅広く親和性があります。視覚的インパクトと遊び心が共存する、唯一無二のビジュアルです。",
      videoUrl: "https://www.instagram.com/reel/DQX05pPASTA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
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
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 max-w-sm mx-auto">
                <div 
                  className="p-4 flex justify-center items-center h-72 bg-white cursor-pointer relative"
                  onClick={() => openImagePopup(product.id)}
                >
                  <Image 
                    src={product.modelImage ?? product.image}
                    alt={product.title}
                    width={256}
                    height={256}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                  {(product.id === 101 || product.id === 102 || product.id === 103 || product.id === 104 || product.id === 105 || product.id === 106 || product.id === 107 || product.id === 108 || product.id === 109 || product.id === 110 || product.id === 111 || product.id === 112 || product.id === 113) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3rem]">{product.title}</h3>
                  {product.endDate && <CountdownTimer endDate={product.endDate} />}
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
                      rel="noopener noreferrer nofollow"
                      className="amazon-btn"
                      aria-label="Amazonでこの商品を見る"
                    >
                      <span className="label">Amazon<br />で見る</span>
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