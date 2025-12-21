import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "../Components/Common/Header";
import { Footer } from "../Components/Common/Footer";
import { LoadingScreen } from "../Components/Common/Animation/LoadingScreen";
import { List, Check, Handshake } from "lucide-react";
import { useAnimation } from "../hooks/useAnimation";
import {
  fadeInUp,
  fadeIn,
  slideFromLeft,
  slideFromRight,
  scaleUp,
  bounceInUp,
} from "../utils/animations";

export const Business = () => {
  const [isLoading, setIsLoading] = useState(true);

  // sec1: ABOUT - 会社案内
  const aboutBusinessTitleRef = useRef(null);
  const aboutBusinessTextRef = useRef(null);
  const aboutBusinessImgRef = useRef(null);
  const aboutStrengthTitleRef = useRef(null);
  const aboutStrength1Ref = useRef(null);
  const aboutStrength2Ref = useRef(null);
  const aboutStrength3Ref = useRef(null);
  const aboutPhilosophyTitleRef = useRef(null);
  const aboutMissionRef = useRef(null);
  const aboutVisionRef = useRef(null);
  const aboutValueRef = useRef(null);
  const aboutPhilosophyImgRef = useRef(null);

  // sec2: Business - 事業内容
  const businessTitleRef = useRef(null);
  const salonTitleRef = useRef(null);
  const salonTextRef = useRef(null);
  const salonImgRef = useRef(null);
  const barTitleRef = useRef(null);
  const barTextRef = useRef(null);
  const barImgRef = useRef(null);

  // sec3: ACCESS - 所在地
  const accessTitleRef = useRef(null);
  const accessInfoRef = useRef(null);
  const accessMapRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  // sec1: ABOUTのアニメーション
  useAnimation({
    triggerElements: [
      {
        element: aboutBusinessTitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.5, ease: 'power3.out' }
      },
      {
        element: aboutBusinessTextRef,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: aboutBusinessImgRef,
        animationType: 'slideFromRight',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: aboutStrengthTitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 30, duration: 0.5, ease: 'power3.out' }
      },
      {
        element: aboutStrength1Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 35, duration: 0.5, ease: 'power3.out' },
        position: "-=0.2"
      },
      {
        element: aboutStrength2Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 35, duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: aboutStrength3Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 35, duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: aboutPhilosophyTitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.5, ease: 'power3.out' }
      },
      {
        element: aboutMissionRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 20, duration: 0.4, ease: 'power3.out' },
        position: "-=0.2"
      },
      {
        element: aboutVisionRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 20, duration: 0.4, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: aboutValueRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 20, duration: 0.4, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: aboutPhilosophyImgRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power3.out' },
        position: "-=0.2"
      }
    ],
    triggerSettings: {
      start: "top 85%"
    }
  });

  // sec2: Businessのアニメーション
  useAnimation({
    triggerElements: [
      {
        element: businessTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power3.out' }
      },
      {
        element: salonTitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.5, ease: 'power3.out' },
        position: "-=0.2"
      },
      {
        element: salonTextRef,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: salonImgRef,
        animationType: 'slideFromRight',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: barTitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.5, ease: 'power3.out' }
      },
      {
        element: barTextRef,
        animationType: 'slideFromRight',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      },
      {
        element: barImgRef,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 40, duration: 0.5, ease: 'power3.out' },
        position: "-=0.4"
      }
    ],
    triggerSettings: {
      start: "top 85%"
    }
  });

  // sec3: ACCESSのアニメーション
  useAnimation({
    triggerElements: [
      {
        element: accessTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power3.out' }
      },
      {
        element: accessInfoRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.5, ease: 'power3.out' },
        position: "-=0.2"
      },
      {
        element: accessMapRef,
        animationType: 'fadeIn',
        animationOptions: { duration: 0.5, ease: 'power3.out' },
        position: "-=0.3"
      }
    ],
    triggerSettings: {
      start: "top 85%"
    }
  });

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="w-full mx-auto overflow-x-hidden">
        <Header />
        <main className="pt-20">
          {/* MV - 白ベースのモダンデザイン */}
          <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 overflow-hidden flex items-center">
            {/* 背景グリッドパターン */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}></div>
            </div>

            {/* 動的な装飾要素 - レスポンシブ調整 */}
            <div className="absolute top-[15%] sm:top-[12%] md:top-[10%] lg:top-[8%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border border-red-500/30 rounded-full"></div>
            <div className="absolute top-[22%] sm:top-[18%] md:top-[16%] lg:top-[14%] right-[12%] sm:right-[14%] md:right-[18%] lg:right-[20%] w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 border border-red-300/20 rounded-full"></div>
            <div className="absolute bottom-[18%] sm:bottom-[15%] md:bottom-[12%] lg:bottom-[10%] left-[5%] sm:left-[6%] md:left-[8%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="hidden md:block absolute top-[30%] lg:top-[28%] right-[22%] lg:right-[25%] w-40 h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-gradient-to-br from-orange-300/10 to-transparent rounded-full blur-3xl"></div>

            {/* 縦線デザイン - レスポンシブ調整 */}
            <div className="absolute left-4 sm:left-6 md:left-12 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-500/40 to-transparent"></div>
            <div className="hidden sm:block absolute right-4 sm:right-6 md:right-12 lg:right-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

            {/* コンテンツ */}
            <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
              <div className="max-w-5xl">
                {/* ラベル */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-12 h-px bg-red-500"></div>
                  <span className="text-red-500 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">Company</span>
                </div>

                {/* メインタイトル */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-gray-900 leading-none mb-4 sm:mb-6">
                  <span className="block">ABOUT</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                    US
                  </span>
                </h1>

                {/* サブタイトル */}
                <div className="max-w-md sm:max-w-lg lg:max-w-xl mb-8 sm:mb-10">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold mb-3 sm:mb-4">
                    "最高品質"を"大量生産"
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                    東京を拠点に、美容・飲食事業を通じて<br className="hidden sm:block" />
                    人々の日常に価値と彩りを届ける
                  </p>
                </div>

                {/* スタッツ */}
                <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                  <div className="group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 group-hover:text-red-500 transition-colors">2+</div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Business</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 group-hover:text-red-500 transition-colors">Tokyo</div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Location</div>
                  </div>
                  <div className="group">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 group-hover:text-red-500 transition-colors">24h</div>
                    <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">Service</div>
                  </div>
                </div>
              </div>
            </div>

            {/* スクロールインジケーター - 位置調整 */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2">
              <span className="text-gray-400 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </div>
          </section>

          <section className="w-full px-8 py-16 md:py-24 bg-red-50">
            {/* セクションタイトル */}
            <div className="mb-12">
              <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
                会社案内
              </h4>
              <h3 className="font-lora text-4xl md:text-5xl lg:text-6xl">
                ABOUT
              </h3>
            </div>

            <div className="w-full md:max-w-6xl md:flex justify-between items-center gap-8">
              <div className="md:w-2/5">
                <div ref={aboutBusinessTitleRef} className="bg-black w-fit py-1 px-2">
                  <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                    私たちの事業
                  </h4>
                </div>
                <p ref={aboutBusinessTextRef} className="font-semibold md:text-lg lg:text-xl mt-3 md:mt-5 max-w-md">
                  東京都を拠点に、人々の生活に価値を届ける
                  当社は東京都を拠点に、多岐にわたるサービス展開で人々の日常に彩りを添えています。
                  <br />
                  美容事業では、美容脱毛サロンを運営し、24時間予約可能な体制で迅速なサービスを提供。
                  <br />
                  飲食事業では、新宿区歌舞伎町において、若者が思う存分楽しめる特別な空間を創造しています。
                </p>
              </div>
              <div ref={aboutBusinessImgRef} className="mt-1 md:mt-3 lg:mt-5 max-w-md md:max-w-xl md:w-3/5">
                <img
                  className="w-4/5"
                  src="../img/business/企業説明.jpg"
                  alt="img"
                />
              </div>
            </div>

            <div>
              <div ref={aboutStrengthTitleRef} className="bg-black w-fit py-1 px-2 mt-6 md:mt-10 lg:mt-14">
                <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                  私たちの強み
                </h4>
              </div>
              <div className="mt-6 md:mt-16 font-semibold md:text-lg lg:text-xl">
                <div ref={aboutStrength1Ref} className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center md:max-w-3xl md:mx-0">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <List className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      豊富な実績
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    当社は、業界で豊富な実績を築いています。実績豊かなチームが協力してプロジェクトに取り組むことで、確かな価値と信頼をお届けしています。
                  </p>
                </div>
                <div ref={aboutStrength2Ref} className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center mt-6 md:mt-14 md:max-w-3xl md:mx-0 lg:ml-20">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <Check className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      迅速なサービス
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    私たちは迅速なサービスを提供し、お客様の要望に素早くお応えします。対応に時間がかかる心配は一切ございません。
                  </p>
                </div>
                <div ref={aboutStrength3Ref} className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center mt-6 md:mt-14 md:max-w-3xl md:mx-0 lg:ml-40">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <Handshake className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      数々の称賛のお声
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    当社はお客様から多くの好評をいただいており、お客様の声を大切にしています。ご満足いただけるサービスを提供し、お客様の期待を常に超える努力を続けます。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div>
                <div ref={aboutPhilosophyTitleRef} className="bg-black w-fit py-1 px-2 mt-6 md:mt-10 lg:mt-14">
                  <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                    私たちの理念
                  </h4>
                </div>
                <div className="md:max-w-sm lg:max-w-xl mt-4 md:mt-10 lg:mt-16">
                  <div ref={aboutMissionRef} className="md:flex justify-start">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Mission
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      "最高品質" を "大量生産"
                    </p>
                  </div>
                  <div ref={aboutVisionRef} className="md:flex justify-start mt-2 md:mt-4 lg:mt-8">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Vision
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      自由で、かっこいい人生を送る
                    </p>
                  </div>
                  <div ref={aboutValueRef} className="md:flex justify-start mt-2 md:mt-4 lg:mt-8">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Value
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      "幸福"の追求　~Well-Being~
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={aboutPhilosophyImgRef} className="w-4/5 min-w-80 max-w-5xl">
              <img
                className="w-full"
                src="../img/business/経営理念.png"
                alt="philosophy"
              />
            </div>
          </section>

          <section className="w-full px-8 py-4 md:py-10 bg-red-50">
            <div ref={businessTitleRef}>
              <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
                事業内容
              </h4>
              <h3 className="font-lora text-5xl md:text-6xl lg:text-7xl">
                Business
              </h3>
            </div>

            <div className="max-w-screen-xl mt-10 md:mt-14 lg:mt-18 lg:flex gap-4 justify-between items-center">
              <div className="lg:w-3/5 max-w-2xl">
                <div ref={salonTitleRef} className="bg-black w-fit py-1 px-2">
                  <h4 className="font-cactus text-red-400 text-lg md:text-2xl lg:text-3xl">
                    美容サロン
                  </h4>
                </div>
                <p ref={salonTextRef} className="mt-2 font-semibold md:text-lg lg:text-xl">
                  美容のプロである女性目線で
                  <span className="text-red-600 border-red-600">
                    『デキる男』
                  </span>
                  をプロデュース。美容に興味があるけど何から始めたらいいか分からない方に、美容大好きなスタッフが親身に対応。
                  <br className="hidden md:block" />
                  豊富な知識と経験を積み上げ、長年培った専門の女性スタッフが一人ひとりに担当制でサポート。
                  <br className="hidden md:block" />
                  『SHR方式』と『IPL方式』の組み合わせで、各部位に最適な脱毛効果を実感でき、痛みも最小限。
                  <br className="hidden md:block" />
                  さらに、Leoのお客様とスタッフだけのコミュニティ
                  <span className="text-red-600 border-red-600">
                    『Club Dreamers』
                  </span>
                  では、夢を追い求める仲間たちが集まり、脱毛をきっかけに交流の場を提供しています。
                  <br className="hidden md:block" />
                  また、脱毛会員限定のコンテンツとして、オーダースーツの原価販売やブランド品アウトレット価格販売サービスなども合わせて提供しています。
                  <br />
                  詳細はこちら
                </p>
              </div>
              <div ref={salonImgRef} className="mt-2 min-w-80 w-3/4 lg:w-2/5 max-w-xl">
                <img src="../img/business/美容サロン.png" alt="img" />
              </div>
            </div>

            <div className="max-w-screen-xl mt-10 md:mt-14 lg:mt-18 lg:flex gap-4 justify-between items-center">
              <div className="lg:w-3/5 max-w-2xl">
                <div ref={barTitleRef} className="bg-black w-fit py-1 px-2">
                  <h4 className="font-cactus text-red-400 text-lg md:text-2xl lg:text-3xl">
                    飲食事業（BAR）
                  </h4>
                </div>
                <p ref={barTextRef} className="mt-2 font-semibold md:text-lg lg:text-xl">
                  当店は、歌舞伎町の躍動感あふれる雰囲気を感じながら、居心地の良い空間で至福のひとときをお過ごしいただけます。
                  <br className="hidden md:block" />
                  私たちのBARは、若々しいエネルギーと洗練された雰囲気が見事に調和した特徴的な場所です。
                  <br className="hidden md:block" />
                  カラオケやダーツ、テーブルゲームなどをご用意しており、
                  <span className="text-red-600 border-red-600">『遊ぶ』</span>
                  に特化しています。
                  <br className="hidden md:block" />
                  おしゃれな夜を求める若者から、くつろぎのひとときを望む大人まで、どんな方でも歓迎です。
                  <br className="hidden md:block" />
                  イベント事業を過去に展開していた経験から、団体様の貸切利用やイベント利用も柔軟に対応しております。
                  <br className="hidden md:block" />
                  皆さんのご来店お待ちしております。
                </p>
              </div>
              <div ref={barImgRef} className="mt-2 min-w-80 w-3/4 lg:w-2/5 max-w-xl">
                <img src="../img/business/BAR.jpg" alt="img" />
              </div>
            </div>
          </section>

          <section className="w-full px-8 py-4 md:py-10 bg-red-50">
            <div ref={accessTitleRef}>
              <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
                所在地
              </h4>
              <h3 className="font-lora text-5xl md:text-6xl lg:text-7xl">
                ACCESS
              </h3>
            </div>
            <div ref={accessInfoRef}>
              <div className="font-semibold md:text-lg lg:text-xl">
                ・Men's Beauty Salon Leo
              </div>
              <div>
                <p>〒170-0013</p>
                <p>東京都豊島区東池袋4-7-6</p>
                <p>アーバイル池袋East</p>
                <p>501号室</p>
              </div>
            </div>
            <div ref={accessMapRef} className="w-80 h-[250px] sm:w-[450px] sm:h-[350px] lg:w-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477.884181086521!2d139.70830367770998!3d35.72764269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6ec58035cf%3A0x6d6dc0b7dd285a3f!2z44Ki44O844OQ44Kk44Or5rGg6KGLRUFTVA!5e0!3m2!1sja!2sjp!4v1753498851215!5m2!1sja!2sjp"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

