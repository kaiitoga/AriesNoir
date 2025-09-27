import React from 'react'

export const Before = () => {
 return (
   <section className="relative pt-12 md:pt-36 pb-36 flex flex-col justify-center">
     <div 
       className="absolute inset-0 w-full h-full"
       style={{ 
         backgroundImage: "url(../img/human/photo6.jpg)", 
         backgroundSize: "cover", 
         backgroundPosition: "bottom right", 
         backgroundRepeat: "no-repeat" 
       }}
     />
     <div 
       className="absolute inset-0 z-0 bg-white w-full h-full" 
       style={{ opacity: 0.4 }}
     />

     <div className="relative z-10 md:flex md:justify-start ml-5 md:ml-20">
       <div className="block md:hidden">
         <h2 className="font-bold text-2xl">
           代表 若菜の<span className="text-red-600">「これまで」</span>
         </h2>
       </div>
       <div 
         className="hidden md:block" 
         style={{ writingMode: "vertical-rl" }}
       >
         <h2 className="font-bold text-4xl lg:text-5xl">
           代表 若菜の<span className="text-red-600">「これまで」</span>
         </h2>
       </div>

       <div className="mt-4 md:ml-20 md:flex md:flex-col md:justify-center">
         <div className="bg-black w-fit py-1 px-2">
           <h3 className="font-bold text-white text-xl md:text-3xl lg:text-4xl">
             <span className="text-red-600">「情熱」</span>と
             <span className="text-red-600">「可能性」</span>を
           </h3>
         </div>
         <div className="bg-black w-fit py-1 px-2 mt-2">
           <h3 className="font-bold text-white text-xl md:text-3xl lg:text-4xl">
             見出した瞬間
           </h3>
         </div>
         <div className="mt-4 pr-12 font-semibold md:text-xl lg:text-2xl max-w-xl lg:max-w-2xl">
           <p>
             私の起業のきっかけは、イベント運営での
             <span className="text-red-600 border-b-2 border-red-600">感動的な体験</span>
             でした。人々が一つの空間で楽しみ、
             <span className="text-red-600 border-b-2 border-red-600">喜びを共有する瞬間に</span>
             、ビジネスの本質を見出したのです。
           </p>
           <p>
             その経験から、
             <span className="text-red-600 border-b-2 border-red-600">人々の生活を豊かにする場の創造</span>
             と
             <span className="text-red-600 border-b-2 border-red-600">コミュニティの力</span>
             を学びました。様々な経験を積み、より多面的に人々の喜びに貢献したいという思いが強くなり、アリエスノワールを創業するに至りました。
           </p>
         </div>
       </div>
     </div>
   </section>
 )
}