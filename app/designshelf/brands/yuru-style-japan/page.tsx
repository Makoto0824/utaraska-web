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
    variations?: ProductVariation[]; // 商品バリエーション（Tシャツ、パーカーなど）
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
      id: 114,
      title: "向かい合うゆるい般若 face2face",
      brand: "ゆるスタイル・ジャパン",
      image: "/designshelf/images/30_hannya/hoodie/30_hannya_hoodie.png",
      designImage: "/designshelf/images/30_hannya/30_hannya_design.png",
      modelImage: "/designshelf/images/30_hannya/hoodie/30_hannya_model_hoodie.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/3JRLlal",
      features: [
        "向かい合う般若の顔を炎で囲んだ和風モチーフ。輪郭は太めでゆるいタッチにまとめ、強すぎない存在感を狙ったビジュアル設計。",
        "デザインを主役にするワンポイント配置。和の伝統要素とポップな線表現を組み合わせ、年代や性別を問わずコーデに取り入れやすい見え方を意識している。"
      ],
      description: "向かい合う二つの般若の顔を、炎のモチーフで包んだ和風イラストです。線は柔らかめにしつつ表情の輪郭を強調することで、和の雰囲気を保ちながら日常使いしやすいデザインに仕上げています。胸元ワンポイントに収めることで主張が強くなりすぎず、ジャケットや重ね着とも相性が良くなります。",
      videoUrl: "https://www.instagram.com/reel/DRZ2iqDAfIj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      variations: [
        {
          name: "Tシャツ",
          price: "¥2,300",
          amazonLink: "https://amzn.to/3JRLlal"
        },
        {
          name: "パーカー",
          price: "¥4,400",
          amazonLink: "https://amzn.to/4oggGS5"
        },
        {
          name: "ジップパーカー",
          price: "¥4,600",
          amazonLink: "https://amzn.to/44mPD03"
        }
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
      price: "¥2,300",
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
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full self-start">
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
                  {(product.id === 101 || product.id === 102 || product.id === 103 || product.id === 104 || product.id === 105 || product.id === 106 || product.id === 107 || product.id === 108 || product.id === 112 || product.id === 113 || product.id === 114) && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 min-h-[3rem]">{product.title}</h3>
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
                        <span className="text-xl font-bold text-gray-800">{product.id === 101 ? '¥4,480' : product.id === 102 ? '¥4,400' : product.id === 103 ? '¥3,960' : product.price}</span>
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
                src={popupImage}
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
