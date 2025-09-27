import React from 'react'
import { ArrowRight } from 'lucide-react'

export const LifeChanging = () => {
 return (
   <div className="relative min-h-screen overflow-hidden">
     {/* 背景画像 */}
     <div className="absolute inset-0">
       <img 
         src="../img/human/photo3.jpg" 
         alt="photo3" 
         className="w-full h-full object-cover object-left md:object-center"
       />
       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
     </div>

     {/* 背景光 */}
     <div className="absolute inset-0">
       {/* 上部の光 */}
       <div className="absolute top-10 left-1/4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-[0ms]" />
       <div className="absolute top-20 right-1/3 w-28 h-28 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-[300ms]" />
       <div className="absolute top-16 left-1/6 w-20 h-20 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-[600ms]" />
       <div className="absolute top-12 right-1/5 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-[900ms]" />

       {/* 中下部の光 */}
       <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-red-600/20 rounded-full blur-2xl animate-pulse delay-[1200ms]" />
       <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-[1500ms]" />
       <div className="absolute top-3/4 right-1/3 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-[1800ms]" />
       <div className="absolute top-1/3 left-1/6 w-28 h-28 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-[2100ms]" />
     </div>

     <div className="relative z-10 flex items-center min-h-screen py-8">
       <div className="container mx-auto px-8">
         <div className="flex justify-end">
           <div className="max-w-4xl text-right">
             <div className="space-y-8">
               <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none">
                 人生を
                 <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 animate-pulse">
                   変える
                 </span>
                 <br />
                 仕事を
               </h2>

               <div className="space-y-6 max-w-4xl ml-auto">
                 <p className="text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
                   お客様の人生が変わる瞬間に立ち会う。
                   <br />
                   <span className="text-red-400">それが私たちの仕事です。</span>
                 </p>

                 <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                   美容で自信を与え、空間で心を豊かにする。
                   <br />
                   ただのサービス業ではない、
                   <span className="text-cyan-400 font-semibold">人生に彩りを添える</span>
                   プロフェッショナルを目指しませんか？
                 </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                 <div className="text-center md:text-right">
                   <div className="text-5xl md:text-6xl font-black text-red-400 mb-2 counter-animation">
                     1000+
                   </div>
                   <div className="text-lg text-white/90">人生が変わったお客様</div>
                 </div>
                 <div className="text-center md:text-right">
                   <div className="text-5xl md:text-6xl font-black text-cyan-400 mb-2 counter-animation">
                     24h
                   </div>
                   <div className="text-lg text-white/90">お客様に寄り添うサポート</div>
                 </div>
                 <div className="text-center md:text-right">
                   <div className="text-5xl md:text-6xl font-black text-purple-400 mb-2 counter-animation">
                     ∞
                   </div>
                   <div className="text-lg text-white/90">無限の成長可能性</div>
                 </div>
               </div>

               <div className="pt-16">
                 <div className="space-y-6">
                   <p className="text-xl md:text-2xl text-white font-bold">
                     あなたも、
                     <span className="text-red-400 glow-animation">人生を変える側</span>
                     になりませんか？
                   </p>
                   {/* <div className="flex flex-col sm:flex-row gap-6 justify-end">
                     <button className="group px-12 py-6 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl pulse-button">
                       <span className="flex items-center justify-center">
                         今すぐ話を聞いてみる
                         <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                       </span>
                     </button>
                     <button className="px-12 py-6 bg-white/20 backdrop-blur-md text-white text-xl font-bold rounded-2xl hover:bg-white/30 transition-all duration-300 border-2 border-white/30 hover:border-white/50 shimmer-border">
                       詳しい募集要項を見る
                     </button>
                   </div> */}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}


