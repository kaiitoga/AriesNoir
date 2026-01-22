import React, { useRef } from 'react'
import { useAnimation } from '../../hooks/useAnimation'

export const Before = () => {
  const titleMobileRef = useRef(null)
  const titleDesktopRef = useRef(null)
  const subtitle1Ref = useRef(null)
  const subtitle2Ref = useRef(null)
  const contentRef = useRef(null)

  useAnimation({
    triggerElements: [
      {
        element: titleMobileRef,
        animationType: 'slideFromLeft',
        animationOptions: { duration: 1.0, ease: 'power3.out' }
      },
      {
        element: titleDesktopRef,
        animationType: 'slideFromLeft',
        animationOptions: { duration: 1.0, ease: 'power3.out' }
      },
      {
        element: subtitle1Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 50, duration: 0.9, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: subtitle2Ref,
        animationType: 'slideFromRight',
        animationOptions: { distance: 50, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: contentRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 35, duration: 1.2, ease: 'power4.out' },
        position: "-=0.3"
      }
    ],
    triggerSettings: {
      start: "top 85%"
    }
  })

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
        <div ref={titleMobileRef} className="block md:hidden">
          <h2 className="font-bold text-2xl">
            代表 若菜の<span className="text-red-600">「これまで」</span>
          </h2>
        </div>
        <div
          ref={titleDesktopRef}
          className="hidden md:block"
          style={{ writingMode: "vertical-rl" }}
        >
          <h2 className="font-bold text-4xl lg:text-5xl whitespace-nowrap">
            代表 若菜の<span className="text-red-600">「これまで」</span>
          </h2>
        </div>

        <div className="mt-4 md:ml-20 md:flex md:flex-col md:justify-center">
          <div ref={subtitle1Ref} className="bg-black w-fit py-1 px-2">
            <h3 className="font-bold text-white text-xl md:text-3xl lg:text-4xl">
              <span className="text-red-600">「情熱」</span>と
              <span className="text-red-600">「可能性」</span>を
            </h3>
          </div>
          <div ref={subtitle2Ref} className="bg-black w-fit py-1 px-2 mt-2">
            <h3 className="font-bold text-white text-xl md:text-3xl lg:text-4xl">
              見出した瞬間
            </h3>
          </div>
          <div ref={contentRef} className="mt-4 pr-12 font-semibold md:text-xl lg:text-2xl max-w-xl lg:max-w-2xl">
            <p>
              私の起業のきっかけは、イベント運営での
              <span className="text-red-600 border-b-2 border-red-600">感動的な体験</span>でした。<br />
              人々が一つの空間で楽しみ、
              <span className="text-red-600 border-b-2 border-red-600">喜びを共有する瞬間に</span>、ビジネスの本質を見出したのです。
            </p>
            <p>
              その経験から、<span className="text-red-600 border-b-2 border-red-600">人々の生活を豊かにする場の創造</span>と<span className="text-red-600 border-b-2 border-red-600">コミュニティの力</span>を学びました。<br />
              様々な経験を積み、より多面的に人々の喜びに貢献したいという思いが強くなり、アリエスノワールを創業するに至りました。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}