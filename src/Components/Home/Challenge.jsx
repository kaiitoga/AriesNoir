import React, { useRef } from 'react'
import { useAnimation } from '../../hooks/useAnimation'

export const Challenge = () => {
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const subtitle1Ref = useRef(null)
  const subtitle2Ref = useRef(null)
  const contentRef = useRef(null)

  useAnimation({
    triggerElements: [
      {
        element: imageRef,
        animationType: 'slideFromRight',
        animationOptions: { distance: 70, duration: 1.2, ease: 'power3.out' }
      },
      {
        element: titleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 40, duration: 1.0, ease: 'power3.out' },
        position: "-=0.6"
      },
      {
        element: subtitle1Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 55, duration: 0.9, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: subtitle2Ref,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 55, duration: 0.9, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: contentRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 30, duration: 1.1, ease: 'power4.out' },
        position: "-=0.3"
      }
    ],
    triggerSettings: {
      start: "top 85%"
    }
  })

  return (
    <section className="w-full px-8 py-16 lg:pt-36 bg-red-600 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div ref={imageRef} className="order-1 lg:order-2 w-96 -mb-10 -mr-7 lg:w-[380px] lg:-mt-20 lg:-ml-24 xl:w-[430px] xl:-ml-20 xl:-mt-14 2xl:w-[600px] 2xl:-ml-24 2xl:-mt-28">
          <img
            src="../img/human/photo1.jpg"
            alt="photo1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="order-2 lg:order-1 bg-gray-50 px-4 py-8 max-w-2xl xl:max-w-4xl relative z-10 flex-shrink-0">
          <h2 ref={titleRef} className="font-bold text-2xl xl:text-3xl 2xl:text-4xl p-1">
            アリエスノワールの
            <span className="font-extrabold text-4xl xl:text-5xl 2xl:text-6xl">挑戦</span>
          </h2>
          <div ref={subtitle1Ref} className="bg-black w-fit py-1 px-2 mt-4">
            <h4 className="font-bold text-white text-lg xl:text-2xl 2xl:text-3xl">
              <span className="text-red-600">決断</span>と
              <span className="text-red-600">挑戦</span>が
            </h4>
          </div>
          <div ref={subtitle2Ref} className="bg-black w-fit py-1 px-2 mt-2">
            <h4 className="font-bold text-white text-lg xl:text-xl 2xl:text-2xl">
              アリエスノワール成長の原動力になった
            </h4>
          </div>
          <div ref={contentRef} className="mt-4">
            <p className="font-semibold xl:text-lg 2xl:text-xl">
              「喜びを共有する場所を創りたい」という想いからイベント事業を始めました。<br />
              多くの人々が笑顔になる瞬間を見るたびに、もっと多様な形で人々を豊かにできないかと考えるようになりました。<br />
              そこで決断したのが<span className="text-red-600 border-b-2 border-red-600">2つの大きな挑戦</span>です。<br />
              まず1つ目は<span className="text-red-600 border-b-2 border-red-600">美容サロン事業への参入</span><br />
              「デキる男」をプロデュースするという明確なコンセプトを掲げて、美容に関心はあるものの一歩を踏み出せない男性たちに新たな可能性を提供しました。<br />
              2つ目は<span className="text-red-600 border-b-2 border-red-600">BAR運営</span>です<br />
              イベント事業の経験を活かし、団体様の貸切やイベント利用にも柔軟に対応することで、飲食店だけではない価値提供を実現しています。<br />
              どの事業も根底にあるのは「人々の人生に彩りを添えたい」という変わらぬ情熱です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}