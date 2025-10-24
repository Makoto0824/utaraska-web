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

  // 元のサイトと同じ24商品のデータ（完全な商品説明付き）
  const products: Product[] = [
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
      id: 8,
      title: "浮世絵 役者絵 サイケデリックアート 和風ビジュアル Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee8.png",
      designImage: "/designshelf/images/tee8_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/44I7S1h",
      features: [
        "浮世絵の役者絵をサイケデリックアートで再構築",
        "伝統的な和風要素を現代的にアレンジ"
      ],
      description: "浮世絵の役者絵をサイケデリックアートで再構築した和風ビジュアル。伝統的な和風要素を現代的にアレンジし、個性的なファッションアイテムとして仕上げました。"
    },
    {
      id: 9,
      title: "浮世絵 波 富士山 サイケデリックアート 和風ビジュアル Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee9.png",
      designImage: "/designshelf/images/tee9_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4mhTnrn",
      features: [
        "葛飾北斎の「神奈川沖浪裏」をサイケデリックアートで再構築",
        "富士山と波をモチーフにした和風ビジュアル"
      ],
      description: "葛飾北斎の「神奈川沖浪裏」をサイケデリックアートで再構築した和風ビジュアル。富士山と波をモチーフにした伝統的な和風要素を現代的にアレンジしました。"
    },
    {
      id: 10,
      title: "美人画 茶道 浮世絵風 ネオジャパネスク 和風アートTシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee10.png",
      designImage: "/designshelf/images/tee10_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4ktKJUX",
      features: [
        "浮世絵の美人画をネオジャパネスクスタイルで再構築",
        "茶道をテーマにした和風アート"
      ],
      description: "浮世絵の美人画をネオジャパネスクスタイルで再構築した和風アート。茶道をテーマにした伝統的な和風要素を現代的にアレンジしました。"
    },
    {
      id: 11,
      title: "富士山 サイケデリック浮世絵 和風ネオンアート Tシャツ",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee11.png",
      designImage: "/designshelf/images/tee11_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4k17XBV",
      features: [
        "富士山をサイケデリック浮世絵で表現",
        "ネオンアートスタイルの和風デザイン"
      ],
      description: "富士山をサイケデリック浮世絵で表現した和風ネオンアート。伝統的な和風要素を現代的にアレンジし、個性的なファッションアイテムとして仕上げました。"
    },
    {
      id: 12,
      title: "武士 サムライ サイケデリックアート ポップアートファッション 和風",
      brand: "Japanese Art Studio",
      image: "/designshelf/images/tee12.png",
      designImage: "/designshelf/images/tee12_design.png",
      price: "¥2,300",
      amazonLink: "https://amzn.to/4j90pLY",
      features: [
        "武士・サムライをサイケデリックアートで表現",
        "ポップアートファッションに合う和風デザイン"
      ],
      description: "武士・サムライをサイケデリックアートで表現したポップアートファッション。伝統的な和風要素を現代的にアレンジし、個性的なファッションアイテムとして仕上げました。"
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
              {currentProduct && currentProduct.modelImage && (
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
                  <div className="text-xs text-gray-500 mt-1">v0.1.3</div>
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