import React, { useLayoutEffect, useRef } from 'react'
import { Header } from '../Components/Common/Header'
import { Footer } from '../Components/Common/Footer'
import { TrendingUp, Users, Award, Building, Zap, Target, Heart, Star, Briefcase, MessageSquare, Search, PuzzleIcon, HandHeart, GraduationCap, Clock, Globe } from 'lucide-react';
import { useAnimation } from '../hooks/useAnimation';
import {
  fadeInUp,
  fadeIn,
  slideFromLeft,
  slideFromRight,
  scaleUp,
  bounceInUp,
  rotateIn,
} from '../utils/animations';


const CLIENT_SUCCESS_STORIES = [
  {
    company: "IT系スタートアップ",
    companyCode: "A",
    industry: "SaaS開発",
    challenge: "創業3年目、営業組織が未整備で売上が頭打ち。エンジニア出身の創業者が営業に苦戦していた。",
    solution: "3ヶ月間の集中コンサルティング。営業戦略の策定から、アポ同席、クロージング支援まで現場密着で実行。",
    result: "月間売上300%向上",
    ceo: "代表取締役 田中様",
    quote: "若菜さんの『ぶち上げ』エネルギーが、チーム全体に火をつけてくれました。営業が楽しくなったと社員が言っています。週次のミーティングでは、数字以上に社員の表情が変わったのが印象的でした。",
    bgGradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    resultColor: "bg-blue-600",
    companySize: "従業員25名"
  },
  {
    company: "精密機器製造業",
    companyCode: "B",
    industry: "製造・メーカー",
    challenge: "技術力は高いが営業経験ゼロの技術者集団。新規開拓ができず既存顧客依存の状態が続いていた。",
    solution: "現場密着型の営業指導。技術者の強みを活かした営業手法を設計し、3ヶ月間毎週現場で実践指導。",
    result: "新規顧客獲得率200%UP",
    ceo: "代表取締役 佐藤様",
    quote: "技術者の私たちに営業を教えてくれるなんて無理だと思っていました。でも若菜さんは現場で一緒に汗をかいてくれた。技術の話を営業トークに変える方法を学べたのが大きかったです。",
    bgGradient: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
    resultColor: "bg-emerald-600",
    companySize: "従業員40名"
  },
  {
    company: "人材コンサルティング",
    companyCode: "C",
    industry: "サービス業",
    challenge: "営業チーム8名のモチベーション低下。コロナ禍で売上が半減し、チーム全体に諦めムードが蔓延していた。",
    solution: "ぶち上げマインド改革プログラム。個別面談から始まり、チーム研修、実践指導まで6ヶ月間継続支援。",
    result: "チーム成約率180%向上",
    ceo: "営業部長 鈴木様",
    quote: "『営業の設計士』という言葉通り、戦略から実行まで全て設計してもらいました。まさに職人技です。何より、チームが再び笑顔で営業に向かうようになったことが一番の成果だと思います。",
    bgGradient: "from-purple-50 to-violet-50",
    iconColor: "text-purple-600",
    resultColor: "bg-purple-600",
    companySize: "営業部8名"
  }
];

const SUPPORT_PROCESS = [
  {
    step: "01",
    title: "現状分析",
    subtitle: "徹底的な現場理解",
    description: "営業組織の課題を根本から洞察。数字だけでなく、人の心も読み解く。",
    icon: <Search className="w-8 h-8" />,
    color: "from-red-500 to-pink-500"
  },
  {
    step: "02",
    title: "戦略設計",
    subtitle: "オーダーメイドの営業設計",
    description: "その企業だけの営業戦略を設計。テンプレートは使わない。",
    icon: <PuzzleIcon className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "03",
    title: "現場実行",
    subtitle: "一緒に汗をかく",
    description: "アポ同席、クロージング立会い。現場で結果が出るまで伴走する。",
    icon: <HandHeart className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    step: "04",
    title: "人材育成",
    subtitle: "ぶち上げマインド伝授",
    description: "営業スキルだけでなく、『ぶち上げ』の精神を組織に根付かせる。",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500"
  }
];

const SALES_PHILOSOPHY = [
  {
    title: "営業は人の心を動かす芸術",
    description: "テクニックより先に、相手の心に響く言葉を見つける",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "現場主義。理論だけでは何も変わらない",
    description: "一緒に汗をかき、歯を食いしばりながら結果を出す",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "成功は到達点ではなく、挑戦し続ける状態",
    description: "常にハングリーでいることが、真の成功への道",
    icon: <Star className="w-6 h-6" />
  }
];

const GROWTH_MILESTONES = [
  {
    year: "2022",
    title: "ぶち上げコンサル開始",
    description: "営業顧問として本格始動。「営業の設計士」としてのスタイルを確立",
    gradient: "from-red-400 to-rose-500"
  },
  {
    year: "2023",
    title: "支援企業10社突破",
    description: "多業種での実績を積み重ね、ぶち上げメソッドが確立される",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    year: "2024",
    title: "講演・研修活動本格化",
    description: "「1億人の人生をぶち上げる」ミッションに向けた活動を拡大",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    year: "2025",
    title: "顧問先18社達成",
    description: "営業の設計士として確固たる地位を確立。次のステージへ",
    gradient: "from-purple-400 to-violet-500"
  }
];

export const Achievements = ({ isLoading }) => {

  // sec1: 実績紹介（ダーク背景）- アニメーション不要のためref削除

  // sec2: 支援プロセス（ライト背景）
  const processTitleRef = useRef(null);
  const processGridRef = useRef(null);

  // sec3: お客様の声（白背景）
  const clientTitleRef = useRef(null);
  const clientStory1Ref = useRef(null);
  const clientStory2Ref = useRef(null);
  const clientStory3Ref = useRef(null);

  // sec4: 営業哲学（ダーク背景）
  const philosophyTitleRef = useRef(null);
  const philosophyGridRef = useRef(null);

  // sec5: 成長タイムライン（グラデーション背景）
  const timelineTitleRef = useRef(null);
  const milestone1Ref = useRef(null);
  const milestone2Ref = useRef(null);
  const milestone3Ref = useRef(null);
  const milestone4Ref = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // sec1: 実績紹介のアニメーション - 削除（MVにはアニメーション不要）

  // sec2: 支援プロセスのアニメーション
  useAnimation({
    triggerElements: [
      {
        element: processTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 1.2, ease: 'power3.out' }
      },
      {
        element: processGridRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 50, duration: 1.0, ease: 'power3.out' },
        position: "-=0.5"
      }
    ],
    scrollTriggerOptions: { start: "top 85%" }
  });

  // sec3: お客様の声のアニメーション
  useAnimation({
    triggerElements: [
      {
        element: clientTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 1.2, ease: 'power3.out' }
      },
      {
        element: clientStory1Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 60, duration: 0.9, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: clientStory2Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 60, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: clientStory3Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 60, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      }
    ],
    scrollTriggerOptions: { start: "top 85%" }
  });

  // sec4: 営業哲学のアニメーション
  useAnimation({
    triggerElements: [
      {
        element: philosophyTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 1.2, ease: 'power3.out' }
      },
      {
        element: philosophyGridRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 50, duration: 1.0, ease: 'power3.out' },
        position: "-=0.5"
      }
    ],
    scrollTriggerOptions: { start: "top 85%" }
  });

  // sec5: 成長タイムラインのアニメーション
  useAnimation({
    triggerElements: [
      {
        element: timelineTitleRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 1.2, ease: 'power3.out' }
      },
      {
        element: milestone1Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 80, duration: 0.9, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: milestone2Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 80, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: milestone3Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 80, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: milestone4Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 80, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      }
    ],
    scrollTriggerOptions: { start: "top 85%" }
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="w-full mx-auto overflow-x-hidden">
        <Header />
        <main className="pt-20">
          <div className="w-full">
            <section className="w-full px-8 py-24 md:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]"></div>
              
              <div className="max-w-screen-2xl mx-auto relative z-10 text-center">

                <h1 className="font-lora text-6xl md:text-7xl lg:text-9xl font-black leading-tight mb-8">
                  <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                    実績
                  </span>
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
                  営業の設計士として<br />
                  <span className="text-white font-semibold">確かな結果を積み重ねてきた軌跡</span>
                </p>
              </div>
            </section>
            


            {/* 支援プロセス */}
            <section className="w-full px-8 py-24 md:py-32 bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-screen-2xl mx-auto">
                <div ref={processTitleRef} className="text-center mb-16 md:mb-20">
                  <h3 className="font-lora text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                    支援プロセス
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 font-light">
                    営業の設計士による4つのステップ
                  </p>
                </div>

                <div ref={processGridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                  {SUPPORT_PROCESS.map((process, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${process.color}`}></div>
                        
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-4 mb-6">
                            <span className={`text-4xl font-black bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
                              {process.step}
                            </span>
                            <div className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                              <div className="text-white">
                                {process.icon}
                              </div>
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {process.title}
                          </h4>
                          <h5 className={`text-lg font-medium bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-4`}>
                            {process.subtitle}
                          </h5>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* お客様の声 */}
            <section className="w-full px-8 py-24 md:py-32 bg-white">
              <div className="max-w-screen-2xl mx-auto">
                <div ref={clientTitleRef} className="text-center mb-16 md:mb-20">
                  <h3 className="font-lora text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                    お客様の声
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 font-light">
                    ぶち上げられた企業の実体験
                  </p>
                </div>

                <div className="space-y-16 md:space-y-20">
                  {CLIENT_SUCCESS_STORIES.map((story, index) => (
                    <div key={index} ref={index === 0 ? clientStory1Ref : index === 1 ? clientStory2Ref : clientStory3Ref} className="group">
                      <div className={`bg-gradient-to-br ${story.bgGradient} rounded-3xl p-8 md:p-12 border border-gray-200 hover:shadow-2xl transition-all duration-700`}>
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                          
                          {/* 企業情報 */}
                          <div className="lg:col-span-1">
                            <div className="space-y-6">
                              {/* 業界バッジ */}
                              <div className="flex items-center space-x-3">
                                <div className={`w-4 h-4 rounded-full ${story.resultColor}`}></div>
                                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                                  {story.industry}
                                </span>
                              </div>
                              
                              {/* 企業名とコード */}
                              <div className="relative">
                                <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                                  {story.company}
                                </h4>
                                {/* おしゃれな円形コード */}
                                <div className="absolute -top-2 -right-2">
                                  <div className={`w-8 h-8 ${story.resultColor} rounded-full flex items-center justify-center shadow-lg`}>
                                    <span className="text-white font-bold text-sm">
                                      {story.companyCode}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* 企業規模 */}
                              <div className="flex items-center space-x-2">
                                <Building className={`w-4 h-4 ${story.iconColor}`} />
                                <span className="text-sm text-gray-600">
                                  {story.companySize}
                                </span>
                              </div>
                              
                              {/* 結果バッジ */}
                              <div className={`${story.resultColor} text-white font-bold text-lg px-4 py-3 rounded-xl inline-block shadow-lg`}>
                                {story.result}
                              </div>
                            </div>
                          </div>

                          {/* プロセス */}
                          <div className="lg:col-span-1">
                            <div className="space-y-4">
                              <div>
                                <h5 className="font-bold text-gray-900 mb-2">課題</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">{story.challenge}</p>
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 mb-2">解決策</h5>
                                <p className="text-gray-700 text-sm leading-relaxed">{story.solution}</p>
                              </div>
                            </div>
                          </div>

                          {/* お客様の声 */}
                          <div className="lg:col-span-1">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 relative">
                              <div className={`absolute -top-2 -left-2 w-8 h-8 ${story.resultColor} rounded-full flex items-center justify-center`}>
                                <MessageSquare className="w-4 h-4 text-white" />
                              </div>
                              <blockquote className="text-gray-800 leading-relaxed mb-4 italic text-sm">
                                "{story.quote}"
                              </blockquote>
                              <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 ${story.resultColor} rounded-full flex items-center justify-center`}>
                                  <span className="text-white font-bold text-sm">
                                    {story.ceo.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-bold text-gray-900 text-sm">
                                    {story.ceo}
                                  </p>
                                  <p className={`text-xs ${story.iconColor} font-medium`}>
                                    {story.company}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 営業哲学 */}
            <section className="w-full px-8 py-24 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white">
              <div className="max-w-screen-2xl mx-auto">
                <div ref={philosophyTitleRef} className="text-center mb-16 md:mb-20">
                  <h3 className="font-lora text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      営業哲学
                    </span>
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-400 font-light">
                    営業の設計士としての信念
                  </p>
                </div>

                <div ref={philosophyGridRef} className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {SALES_PHILOSOPHY.map((item, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <div className="text-white">
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-3 leading-tight">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 成長タイムライン */}
            <section className="w-full px-8 py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white">
              <div className="max-w-screen-2xl mx-auto">
                <div ref={timelineTitleRef} className="text-center mb-16 md:mb-20">
                  <h3 className="font-lora text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                    成長の軌跡
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-700 font-light">
                    営業の設計士への道のり
                  </p>
                </div>

                {/* モバイル用 */}
                <div className="lg:hidden space-y-12">
                  {GROWTH_MILESTONES.map((milestone, index) => (
                    <div key={index} ref={index === 0 ? milestone1Ref : index === 1 ? milestone2Ref : index === 2 ? milestone3Ref : milestone4Ref} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${milestone.gradient} rounded-full flex items-center justify-center shadow-xl flex-shrink-0 mt-2`}>
                          <span className="text-white font-bold text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className={`text-2xl font-black bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                                {milestone.year}
                              </span>
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.gradient}`}></div>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {milestone.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index < GROWTH_MILESTONES.length && (
                        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-gray-300 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* デスクトップ用 */}
                <div className="hidden lg:block relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-blue-500 via-green-500 to-purple-500 transform -translate-x-1/2"></div>

                  <div className="space-y-20">
                    {GROWTH_MILESTONES.map((milestone, index) => (
                      <div key={index} ref={index === 0 ? milestone1Ref : index === 1 ? milestone2Ref : index === 2 ? milestone3Ref : milestone4Ref} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="w-5/12">
                          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-center space-x-4 mb-4">
                              <span className={`text-4xl font-black bg-gradient-to-r ${milestone.gradient} bg-clip-text text-transparent`}>
                                {milestone.year}
                              </span>
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${milestone.gradient}`}></div>
                            </div>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">
                              {milestone.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="w-2/12 flex justify-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${milestone.gradient} rounded-full flex items-center justify-center shadow-xl relative z-10`}>
                            <span className="text-white font-bold text-lg">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        </div>
                        
                        <div className="w-5/12"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </main>
        <Footer />
      </div>
  )
}