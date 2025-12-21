import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Header } from "../Components/Common/Header";
import { Footer } from "../Components/Common/Footer";
import { LoadingScreen } from "../Components/Common/Animation/LoadingScreen";
import { useAnimation } from "../hooks/useAnimation";
import { TrendingUp, Users, Target, Award, Zap, ArrowRight, Phone, Mail, Calendar, DollarSign, LineChart, Rocket, MessageSquare, CheckCircle } from "lucide-react";

export const Salesadvisor = () => {
  const [isLoading, setIsLoading] = useState(true);

  // sec2: 営業顧問とは refs
  const aboutTitleRef = useRef(null);
  const aboutCardsRef = useRef(null);
  const aboutMainCardRef = useRef(null);

  // sec3: 営業顧問スタイル refs
  const styleTitleRef = useRef(null);
  const styleStepsRef = useRef(null);

  // sec4: こんな会社に最適 refs
  const targetTitleRef = useRef(null);
  const targetCardsRef = useRef(null);

  // sec5: 実績 refs
  const resultsTitleRef = useRef(null);
  const resultsNumbersRef = useRef(null);
  const resultsStoryRef = useRef(null);

  // sec6: 顧問契約プラン refs
  const planTitleRef = useRef(null);
  const planCardRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // sec2: 営業顧問とはアニメーション
  useAnimation({
    triggerElements: [
      {
        element: aboutTitleRef,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 35, duration: 0.6, ease: 'power2.out' }
      },
      {
        element: aboutCardsRef,
        animationType: 'fadeIn',
        animationOptions: { duration: 0.3 },
        position: "-=0.3",
        children: {
          selector: '.about-card',
          animationType: 'fadeInUp',
          staggerDelay: 0.1,
          animationOptions: { distance: 25, duration: 0.6, ease: 'power2.out' }
        }
      },
      {
        element: aboutMainCardRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.7, ease: 'power2.out' },
        position: "-=0.2"
      }
    ],
    triggerSettings: { start: "top 90%" }
  });

  // sec3: 営業顧問スタイルアニメーション
  useAnimation({
    triggerElements: [
      {
        element: styleTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power2.out' }
      },
      {
        element: styleStepsRef,
        animationType: 'fadeIn',
        animationOptions: { duration: 0.3 },
        position: "-=0.3",
        children: {
          selector: '.style-step',
          animationType: 'fadeInUp',
          staggerDelay: 0.12,
          animationOptions: { distance: 30, duration: 0.6, ease: 'power2.out' }
        }
      }
    ],
    triggerSettings: { start: "top 90%" }
  });

  // sec4: こんな会社に最適アニメーション
  useAnimation({
    triggerElements: [
      {
        element: targetTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power2.out' }
      },
      {
        element: targetCardsRef,
        animationType: 'fadeIn',
        animationOptions: { duration: 0.3 },
        position: "-=0.3",
        children: {
          selector: '.target-card',
          animationType: 'fadeInUp',
          staggerDelay: 0.1,
          animationOptions: { distance: 25, duration: 0.6, ease: 'power2.out' }
        }
      }
    ],
    triggerSettings: { start: "top 90%" }
  });

  // sec5: 実績アニメーション
  useAnimation({
    triggerElements: [
      {
        element: resultsTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power2.out' }
      },
      {
        element: resultsNumbersRef,
        animationType: 'fadeIn',
        animationOptions: { duration: 0.3 },
        position: "-=0.3",
        children: {
          selector: '.result-number',
          animationType: 'bounceInUp',
          staggerDelay: 0.1,
          animationOptions: { distance: 25, duration: 0.5, ease: 'back.out(1.2)' }
        }
      },
      {
        element: resultsStoryRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.7, ease: 'power2.out' },
        position: "-=0.2"
      }
    ],
    triggerSettings: { start: "top 90%" }
  });

  // sec6: 顧問契約プランアニメーション
  useAnimation({
    triggerElements: [
      {
        element: planTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 0.6, ease: 'power2.out' }
      },
      {
        element: planCardRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 25, duration: 0.7, ease: 'power2.out' },
        position: "-=0.3"
      }
    ],
    triggerSettings: { start: "top 90%" }
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="w-full mx-auto overflow-x-hidden bg-black">
        <Header />
        <main className="pt-20">
          
          {/* 超攻めたヒーロー - 対角線スプリット */}
          <section className="relative h-screen overflow-hidden">
            {/* 対角線で分割 */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-black" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}></div>
              <div className="absolute inset-0 bg-black" 
                   style={{ clipPath: 'polygon(0 100%, 100% 70%, 100% 100%, 0 100%)' }}></div>
            </div>

            {/* コンテンツ */}
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-8 leading-none">
                  売上が
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-200">
                    止まらない
                  </span>
                </h1>

                <div className="flex items-start gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                  <div className="hidden lg:block w-1 h-24 lg:h-32 bg-red-500"></div>
                  <div className="max-w-2xl">
                    <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 sm:mb-6">
                      営業顧問 若菜龍之介が、
                      <br />
                      あなたの会社に"売れる仕組み"を実装する。
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                      戦略立案？それだけじゃ売上は上がらない。
                      <br className="hidden sm:block" />
                      現場に入って、一緒に売る。それが僕のスタイル。
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                  <a href="#apply"
                     className="group bg-white text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 font-black text-base sm:text-lg hover:bg-red-500 hover:text-white transition-all inline-flex items-center justify-center gap-3">
                    顧問契約を申し込む
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                  <a href="#case"
                     className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 font-black text-base sm:text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center gap-3">
                    支援事例を見る
                  </a>
                </div>

                {/* 実績バッジ - 斜めに配置 */}
                <div className="absolute bottom-[15%] sm:bottom-20 right-4 sm:right-10 transform rotate-12 hidden lg:block">
                  <div className="bg-red-600 text-white p-4 sm:p-6 shadow-2xl">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">18社</div>
                    <div className="text-xs sm:text-sm font-bold">支援実績</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 営業顧問って何？ - カード分割レイアウト */}
          <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-red-100 rounded-full filter blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div ref={aboutTitleRef} className="mb-10 sm:mb-16 lg:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
                  営業顧問とは？
                </h2>
              </div>

              {/* 横に3枚並べた後、1枚大きく */}
              <div className="space-y-6 sm:space-y-8">
                <div ref={aboutCardsRef} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="about-card bg-gradient-to-br from-zinc-900 to-black text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all hover:rotate-1">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 mb-3 sm:mb-4">X</div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">コンサルでもない</h3>
                  </div>
                  <div className="about-card bg-gradient-to-br from-zinc-900 to-black text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all hover:-rotate-1">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 mb-3 sm:mb-4">X</div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">代行でもない</h3>
                  </div>
                  <div className="about-card bg-gradient-to-br from-zinc-900 to-black text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all hover:rotate-1 sm:col-span-2 md:col-span-1">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-600 mb-3 sm:mb-4">X</div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">研修でもない</h3>
                  </div>
                </div>
                {/* デカいカード */}
                <div ref={aboutMainCardRef} className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-600 text-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white rounded-full opacity-10 transform translate-x-10 sm:translate-x-20 -translate-y-10 sm:-translate-y-20"></div>
                  <div className="absolute bottom-0 left-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-black rounded-full opacity-10 transform -translate-x-5 sm:-translate-x-10 translate-y-5 sm:translate-y-10"></div>
                  <div className="max-w-4xl relative z-10">
                    <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg">◎</div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 leading-tight">
                      売上を上げる為の
                      <br />
                      仕組みを創る。人を育てる。
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95">
                      営業戦略の立案から、アポ同行、クロージング、組織構築、人材育成まで。
                      経営者の右腕として、売上に責任を持つ。それが営業顧問。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 若菜龍之介の営業顧問 - 横スクロール風 */}
          <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-red-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-orange-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div ref={styleTitleRef} className="mb-10 sm:mb-16 lg:mb-20 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-black">
                  若菜龍之介の
                  <br />
                  営業顧問スタイル
                </h2>
              </div>

              {/* 数字入りの大きなステップ */}
              <div ref={styleStepsRef} className="space-y-6 sm:space-y-8">
                <div className="style-step grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="lg:col-span-2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">01</div>
                  </div>
                  <div className="lg:col-span-10 bg-gradient-to-br from-white via-gray-50 to-white text-black p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-100 rounded-full opacity-40 transform translate-x-10 translate-y-10"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 relative z-10">
                      <Target className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0" />
                      徹底的なヒアリング × 現場視察
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 relative z-10">
                      まずは貴社の営業プロセスを徹底的に分析。何が課題で、どこにボトルネックがあるのか。
                      現場に入って、リアルを掴む。
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base lg:text-lg relative z-10">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        経営者・営業責任者へのヒアリング
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        営業メンバーへの個別面談
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        商談プロセスの実地観察
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="style-step grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="lg:col-span-2 bg-gradient-to-br from-orange-600 via-red-500 to-red-600 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">02</div>
                  </div>
                  <div className="lg:col-span-10 bg-gradient-to-br from-slate-50 via-white to-slate-50 text-black p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-orange-100 rounded-full opacity-40 transform -translate-x-10 -translate-y-10"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 relative z-10">
                      <LineChart className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0" />
                      売れる戦略 × 実行可能な仕組み
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 relative z-10">
                      分析結果をもとに、売上を上げる戦略を設計。ただし、実行できなければ意味がない。
                      現場で回る仕組みまで落とし込む。
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base lg:text-lg relative z-10">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        売上目標から逆算したKPI設計
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        営業プロセスの標準化・可視化
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        トークスクリプト・資料の整備
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="style-step grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="lg:col-span-2 bg-gradient-to-br from-red-700 via-red-500 to-orange-600 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">03</div>
                  </div>
                  <div className="lg:col-span-10 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 text-black p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-36 h-36 bg-red-200 rounded-full opacity-30 transform -translate-x-10 translate-y-10"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 relative z-10">
                      <Zap className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0" />
                      アポ同行 × クロージング支援
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 relative z-10">
                      重要商談には必ず同席。その場でフィードバックし、次に活かす。
                      クロージングの技術を、実践で叩き込む。
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base lg:text-lg relative z-10">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        商談同席・リアルタイムフォロー
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        クロージング技術の実地指導
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        商談後の振り返り・改善提案
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="style-step grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="lg:col-span-2 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">04</div>
                  </div>
                  <div className="lg:col-span-10 bg-gradient-to-br from-white via-slate-50 to-white text-black p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-44 h-44 bg-orange-100 opacity-40 rounded-full transform translate-x-10 -translate-y-10"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 relative z-10">
                      <Users className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0" />
                      営業マンの育成 × マインドセット
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 relative z-10">
                      仕組みだけじゃ売上は上がらない。人が動かなければ意味がない。
                      若手を育て、組織全体の営業力を底上げする。
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base lg:text-lg relative z-10">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        1on1での徹底指導・メンタリング
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        営業マインドセットの醸成
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        定期的なロープレ・フィードバック
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="style-step grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl shadow-2xl">
                  <div className="lg:col-span-2 bg-gradient-to-br from-orange-600 via-red-600 to-red-700 p-6 sm:p-8 flex items-center justify-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl">05</div>
                  </div>
                  <div className="lg:col-span-10 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 text-black p-8 sm:p-10 lg:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-100/20 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-200 rounded-full opacity-30 transform translate-x-10 translate-y-10"></div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4 relative z-10">
                      <Rocket className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600 flex-shrink-0" />
                      継続的な改善 × 売上の最大化
                    </h3>
                    <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 relative z-10">
                      一度仕組みを作って終わりじゃない。数字を追い続け、PDCAを回し、売上を最大化する。
                      それが営業顧問の仕事。
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base lg:text-lg relative z-10">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        週次・月次での数字レビュー
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        施策の効果測定・改善提案
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        売上目標達成までの伴走支援
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 lg:py-32 bg-zinc-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={targetTitleRef} className="mb-10 sm:mb-16 lg:mb-20 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                  こんな会社に最適
                </h2>
              </div>

              <div ref={targetCardsRef} className="space-y-4 sm:space-y-6">
                <div className="target-card bg-gradient-to-br from-white via-red-50 to-white text-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 hover:text-white transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:-rotate-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-red-600 group-hover:text-white transition-colors">01</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">営業組織をゼロから立ち上げたい</h3>
                      <p className="text-base sm:text-lg">
                        営業経験がない創業者。何から始めればいいか分からない。そんな会社を、売れる組織に変える。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="target-card bg-gradient-to-br from-white via-orange-50 to-white text-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 hover:text-white transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:rotate-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-orange-600 group-hover:text-white transition-colors">02</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">売上が伸び悩んでいる</h3>
                      <p className="text-base sm:text-lg">
                        営業はしているけど、なかなか成約しない。どこに問題があるのか分からない。そんな課題を解決する。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="target-card bg-gradient-to-br from-white via-red-50 to-white text-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-700 hover:to-pink-600 hover:text-white transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:-rotate-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-red-600 group-hover:text-white transition-colors">03</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">属人化している営業を標準化したい</h3>
                      <p className="text-base sm:text-lg">
                        トップ営業マン1人に依存している状態。組織として再現性のある営業プロセスを構築する。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="target-card bg-gradient-to-br from-white via-orange-50 to-white text-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:text-white transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:rotate-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-red-700 group-hover:text-white transition-colors">04</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">若手営業マンが育たない</h3>
                      <p className="text-base sm:text-lg">
                        採用しても、すぐに辞めてしまう。育成の仕組みがない。そんな悩みを、現場指導で解決する。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="target-card bg-gradient-to-br from-white via-red-50 to-white text-black p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-700 hover:text-white transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:-rotate-1">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="text-4xl sm:text-5xl font-black text-orange-600 group-hover:text-white transition-colors">05</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">新規事業の営業戦略を立てたい</h3>
                      <p className="text-base sm:text-lg">
                        新しいサービスを始めたけど、どう売ればいいか分からない。ゼロイチの営業戦略を一緒に創る。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 実績 - ナンバーインパクト */}
          <section id="case" className="py-16 sm:py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={resultsTitleRef} className="mb-10 sm:mb-16 lg:mb-20 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black">
                  数字が証明する
                </h2>
              </div>

              <div ref={resultsNumbersRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 lg:mb-20">
                <div className="result-number text-center bg-gradient-to-br from-black via-zinc-900 to-black text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-red-500 to-red-600 mb-2 sm:mb-4">18</div>
                  <div className="text-sm sm:text-base lg:text-xl font-bold">顧問先企業</div>
                </div>
                <div className="result-number text-center bg-gradient-to-br from-red-600 via-red-500 to-orange-600 text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-black mb-2 sm:mb-4 drop-shadow-lg">1K</div>
                  <div className="text-sm sm:text-base lg:text-xl font-bold">飛び込み営業件数<br /><span className="text-xs sm:text-sm opacity-90">(2ヶ月)</span></div>
                </div>
                <div className="result-number text-center bg-gradient-to-br from-orange-600 via-red-500 to-red-600 text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-black mb-2 sm:mb-4 drop-shadow-lg">2K+</div>
                  <div className="text-sm sm:text-base lg:text-xl font-bold">イベント動員<br /><span className="text-xs sm:text-sm opacity-90">(学生時代)</span></div>
                </div>
                <div className="result-number text-center bg-gradient-to-br from-black via-red-900 to-black text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-110 hover:-rotate-3 transition-all duration-300">
                  <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-white mb-2 sm:mb-4">100%</div>
                  <div className="text-sm sm:text-base lg:text-xl font-bold">本気度</div>
                </div>
              </div>

              <div ref={resultsStoryRef} className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-red-600 rounded-full opacity-10 transform translate-x-10 sm:translate-x-20 -translate-y-10 sm:-translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-red-500 rounded-full opacity-10 transform -translate-x-5 sm:-translate-x-10 translate-y-5 sm:translate-y-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                    地獄を見たからこそ、分かることがある
                  </h3>
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed max-w-4xl">
                    <p>
                      大塚商会で2ヶ月1,000件の飛び込み営業。そこで営業の基礎を叩き込まれた。
                    </p>
                    <p>
                      独立後、税金未納・借金・口座差し押さえ。地獄の困窮生活を経験した。
                    </p>
                    <p>
                      それでも「生きてさえいれば何か起きる」と信じて、這い上がった。
                    </p>
                    <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 sm:p-6 rounded-xl sm:rounded-2xl my-6 sm:my-8">
                      <p className="text-xl sm:text-2xl lg:text-3xl font-black">
                        「勝つまでやめなければ、絶対に勝てる」
                      </p>
                    </div>
                    <p>
                      だから、僕は経営者の痛みが分かる。営業の苦しみが分かる。
                      <br className="hidden sm:block" />
                      中途半端な支援はしない。本気で、売上にコミットする。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-red-100 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-orange-100 rounded-full filter blur-3xl opacity-20"></div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div ref={planTitleRef} className="mb-10 sm:mb-16 lg:mb-20 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-black">
                  顧問契約プラン
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                  貴社の状況に合わせて、最適なプランをご提案します
                </p>
              </div>

              <div ref={planCardRef} className="relative bg-gradient-to-br from-white via-red-50 to-orange-50 text-black p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-red-200 rounded-full opacity-30 transform translate-x-5 sm:translate-x-10 -translate-y-5 sm:-translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-orange-200 rounded-full opacity-20 transform -translate-x-10 sm:-translate-x-20 translate-y-10 sm:translate-y-20"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8">まずは無料相談から</h3>
                  <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                    貴社の営業課題をヒアリングさせてください。
                    <br className="hidden sm:block" />
                    その上で、最適な支援内容・契約形態をご提案します。
                  </p>
                  <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                    <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
                      <div className="bg-red-100 p-1.5 sm:p-2 rounded-full">
                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <span className="font-bold">契約期間：</span> 3ヶ月〜<br className="sm:hidden" />(更新制)
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
                      <div className="bg-red-100 p-1.5 sm:p-2 rounded-full">
                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <span className="font-bold">料金：</span> 要相談<br className="sm:hidden" />(成果報酬型も可能)
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
                      <div className="bg-red-100 p-1.5 sm:p-2 rounded-full">
                        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                      </div>
                      <span className="font-bold">対応エリア：</span> 全国<br className="sm:hidden" />(オンライン対応可)
                    </div>
                  </div>
                  <a href="#apply"
                     className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-black text-base sm:text-lg lg:text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 w-full sm:w-auto">
                    無料相談を申し込む
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};