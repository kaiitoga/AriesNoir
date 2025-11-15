import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../Components/Common/Header'
import { Footer } from '../Components/Common/Footer'
import { LoadingScreen } from '../Components/Common/Animation/LoadingScreen'
import { Star, GraduationCap, Briefcase, Flame, Crown, Heart, Users, Sparkles } from 'lucide-react';

const LIFE_CHAPTERS = [
  {
    period: "1996-2014",
    title: "幼少期・学生時代",
    subtitle: "人を巻き込む才能の開花",
    keyPoints: [
      "千葉県千葉市花見川区で誕生（1996年9月18日）",
      "人懐っこく、正義感の強い子どもとして成長",
      "好奇心旺盛で、何にでも首を突っ込むタイプ",
      "中学・高校時代は人間関係・イベント企画・文化祭の仕切り役が得意"
    ],
    description: "自然豊かな環境で育ち、小さい頃から「人を巻き込んで場をつくる」感覚が芽生えていた。学業よりも人とのつながりを重視し、リーダーシップを発揮する場面が多かった。",
    icon: <Star className="w-8 h-8" />,
    gradient: "from-blue-400 via-indigo-500 to-purple-600"
  },
  {
    period: "2015-2019",
    title: "大学時代",
    subtitle: "教育への情熱と枠を超える価値観",
    keyPoints: [
      "青山学院大学 教育学科へ進学",
      "中高の社会科教員免許を取得",
      "教育現場で実習を経験するも、学校の枠に疑問を感じる",
      "学生時代から社会人イベントを主催（300〜400人規模）",
      "累計2,000人以上の動員実績を達成"
    ],
    description: "教育への関心から教員免許を取得するも、学校という枠に収まらない価値観を強く感じる。一方で、大規模イベントの主催を通じて「人を巻き込んで場をつくる」才能が本格開花。",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600"
  },
  {
    period: "2019-2020",
    title: "新卒社会人時代",
    subtitle: "軍隊のような営業文化との出会い",
    keyPoints: [
      "株式会社大塚商会に新卒入社（東証一部上場の大手IT商社）",
      "入社直後に2ヶ月で1,000件の飛び込み営業を経験",
      "軍隊のような営業体制で「根性・努力・執念」を叩き込まれる",
      "当時の恋人に安定を求められ価値観が衝突",
      "「自分の人生を生きる」と決意し、退職を決断"
    ],
    description: "大塚商会での厳しい営業経験が、後の「ぶち上げマインド」の原点となる。根性・努力・執念を叩き込まれた一方で、自分らしい人生を歩む決意を固めた転機の時期。",
    icon: <Briefcase className="w-8 h-8" />,
    gradient: "from-violet-400 via-purple-500 to-indigo-600"
  },
  {
    period: "2020-2021",
    title: "独立と地獄の体験",
    subtitle: "やりたいことへの挑戦と極限状態",
    keyPoints: [
      "イベント・アパレル・オーダースーツなど次々と事業に挑戦",
      "しかし収益化できず、税金未納・借金・口座差し押さえ",
      "家には帰れず、住む場所を転々とする日々",
      "わずかな食事で命をつなぐ極限状態を経験",
      "「生きてさえいれば何か起きる」と信じ、ギリギリを這い続ける"
    ],
    description: "自分のやりたいことを追求するも、現実は厳しく極限状態に。しかし、この地獄の経験が後の強さとマインドセットの基盤となる。諦めない精神力が培われた重要な時期。",
    icon: <Flame className="w-8 h-8" />,
    gradient: "from-red-500 via-orange-500 to-amber-500"
  },
  {
    period: "2022-現在",
    title: "再起と飛躍",
    subtitle: "営業の設計士として確立",
    keyPoints: [
      "チャンスが舞い込み、フルコミットで再起を果たす",
      "「勝つまでやめなければ、絶対に勝てる」を確信",
      "営業顧問として「ぶち上げコンサル」を本格展開",
      "「営業の設計士」として累計18社を支援",
      "「1億人の人生をぶち上げる」ミッションを掲げ活動拡大"
    ],
    description: "地獄を味わった経験を活かし、営業顧問として企業支援に注力。「数字×仕組み×人材育成」の三位一体で現場から売上向上を支援。今度は自分が人をぶち上げる番として活躍中。",
    icon: <Crown className="w-8 h-8" />,
    gradient: "from-yellow-400 via-orange-500 to-red-500"
  }
];

const CORE_VALUES = [
  {
    title: "人として当たり前のことを当たり前にやる",
    description: "約束を守る・嘘をつかない・人を傷つけない",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "仁義・礼節・筋通しを何より重視",
    description: "人間関係において最も大切にしている価値観",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "ポジティブな言葉で人を動かす",
    description: "ネガティブな言葉で人を傷つけない",
    icon: <Sparkles className="w-6 h-6" />
  }
];

// カラフルな背景円 - シンプル版
const ColorfulCircle = ({ color, size, top, left }) => (
  <div
    className="absolute opacity-35"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: '50%',
      filter: 'blur(1px)'
    }}
  />
);

// 3Dカード
const Card3D = ({ children, index }) => {
  return (
    <div className="transform-gpu">
      {children}
    </div>
  );
};

export const Life_Chapters = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
    };
  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <div className="w-full mx-auto overflow-x-hidden relative">
        <Header />
        {/* 固定背景円 */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="max-w-screen-2xl mx-auto h-full relative">
            <ColorfulCircle color="#FF1493" size={700} top={5} left={8} />
            <ColorfulCircle color="#00FFFF" size={350} top={50} left={75} />
            <ColorfulCircle color="#FF4500" size={850} top={20} left={45} />
            <ColorfulCircle color="#9932CC" size={500} top={70} left={20} />
          </div>
        </div>
        
        <main className="pt-20 relative z-10">
            {/* ヒーローセクション - 背景画像版 */}
            <section className="relative min-h-screen flex items-center justify-start px-4 sm:px-8 py-24 md:py-32 overflow-hidden">
              {/* 背景画像 */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url("../img/human/photo7.jpg")',
                  filter: 'brightness(0.8)'
                }}
              />
              
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
              
              <div className="relative z-10 max-w-screen-2xl mx-auto w-full">
                <div className="max-w-4xl">
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                      <span className="text-red-400 text-sm tracking-[0.4em] uppercase font-light">Life Story</span>
                      <div className="w-16 h-px bg-gradient-to-l from-transparent via-red-500 to-transparent"></div>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-8 text-white">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block mb-4">
                      若菜龍之介
                    </span>
                    <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl block">
                      人生の軌跡
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-8">
                    1996年千葉生まれ、<br />
                    地獄を味わい、ぶち上げられた男の<br />
                    <span className="text-white font-semibold">28年間の物語</span>
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 text-lg">千葉県千葉市花見川区 → 全国</span>
                  </div>
                </div>
              </div>
            </section>
              
            {/* 5つの章セクション */}
            <section className="relative min-h-screen bg-black/80 backdrop-blur-sm text-white">
              <div className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                  {/* モバイル用縦並び */}
                  <div className="block lg:hidden space-y-12">
                    {LIFE_CHAPTERS.map((chapter, index) => (
                      <div 
                        key={index} 
                        className="w-full"
                        style={{
                          transform: `rotate(${[-0.5, 0.3, -0.2, 0.4, -0.3][index]}deg)`
                        }}
                      >
                        <Card3D index={index}>
                          <div className="bg-gradient-to-br from-white/8 to-white/12 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/15 hover:border-white/25 transition-all duration-500">
                            <div className="mb-4">
                              <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r ${chapter.gradient} text-white shadow-lg`}>
                                {chapter.period}
                              </span>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                              {chapter.title}
                            </h3>
                            
                            <h4 className={`text-lg font-bold bg-gradient-to-r ${chapter.gradient} bg-clip-text text-transparent mb-4`}>
                              {chapter.subtitle}
                            </h4>
                            
                            <p className="text-gray-300 leading-relaxed text-sm mb-6">
                              {chapter.description}
                            </p>
                            
                            <div className="space-y-3">
                              {chapter.keyPoints.slice(0, 2).map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.gradient} mt-2 flex-shrink-0`}></div>
                                  <p className="text-gray-400 leading-relaxed text-xs">{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card3D>
                      </div>
                    ))}
                  </div>
                  
                  {/* デスクトップ用重なり配置 */}
                  <div className="hidden lg:block relative" style={{ minHeight: '1600px' }}>
                    {LIFE_CHAPTERS.map((chapter, index) => (
                      <div 
                        key={index} 
                        className="absolute w-full max-w-lg"
                        style={{
                          top: `${[0, 250, 480, 720, 960][index]}px`,
                          left: `${[8, 52, 15, 58, 30][index]}%`,
                          transform: `rotate(${[-0.8, 0.6, -0.4, 0.9, -0.5][index]}deg)`,
                          zIndex: 5 - index
                        }}
                      >
                        <Card3D index={index}>
                          <div className="bg-gradient-to-br from-white/8 to-white/12 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/15 hover:border-white/25 transition-all duration-500">
                            <div className="mb-6">
                              <span className={`inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase bg-gradient-to-r ${chapter.gradient} text-white shadow-lg`}>
                                {chapter.period}
                              </span>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                              {chapter.title}
                            </h3>
                            
                            <h4 className={`text-lg font-bold bg-gradient-to-r ${chapter.gradient} bg-clip-text text-transparent mb-6`}>
                              {chapter.subtitle}
                            </h4>
                            
                            <p className="text-gray-300 leading-relaxed mb-8">
                              {chapter.description}
                            </p>
                            
                            <div className="space-y-3">
                              {chapter.keyPoints.slice(0, 3).map((point, pointIndex) => (
                                <div key={pointIndex} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.gradient} mt-2 flex-shrink-0`}></div>
                                  <p className="text-gray-400 leading-relaxed text-sm">{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card3D>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
                  
            {/* 信条・価値観 - 透明白いセクション */}
            <section className="w-full px-8 py-24 md:py-32 bg-white/85 backdrop-blur-sm text-gray-900">
              <div className="max-w-screen-2xl mx-auto">
                <div className="text-center mb-16 md:mb-20">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
                    信条・価値観
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    全ての行動と決断の根幹
                  </p>
                </div>
                  
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
                  {CORE_VALUES.map((value, index) => (
                    <div key={index} className="group">
                      <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-red-300 transition-all duration-500 shadow-lg">
                        <div className="text-center space-y-4">
                          <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto transition-transform duration-300">
                            <div className="text-white">
                              {value.icon}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 leading-tight">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 p-12 md:p-16 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-800 mb-8">
                      「自分の信念に正直に、<br />
                      胸を張って生きられる人生が
                      <span className="font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                        {" "}何より大切
                      </span>」
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>
                
            {/* クロージング - 透明黒いセクション */}
            <section className="w-full px-8 py-24 md:py-32 bg-gray-900/85 backdrop-blur-sm text-white">
              <div className="max-w-screen-2xl mx-auto text-center">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                    そして物語は続く
                  </h3>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-12">
                    地獄も味わった。ぶち上げられた。<br />
                    <span className="text-red-500 font-semibold">そして今、僕がぶち上げる番だ。</span>
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 md:p-12 inline-block shadow-xl">
                    <p className="text-2xl md:text-3xl font-bold">
                      「1億人の人生をぶち上げる」
                    </p>
                    <p className="text-lg md:text-xl mt-4 opacity-90">
                      新しい章の始まり
                    </p>
                  </div>
                </div>
              </div>
            </section>
        </main>
        <Footer />
      </div>
    </>
  );  
}
