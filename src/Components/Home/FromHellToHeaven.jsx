import React, { useRef } from 'react'
import { useAnimation } from '../../hooks/useAnimation'

export const FromHellToHeaven = () => {
  const imageRef = useRef(null)
  const contentBoxRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const textRef = useRef(null)

  useAnimation({
    triggerElements: [
      {
        element: imageRef,
        animationType: 'slideFromLeft',
        animationOptions: { distance: 90, duration: 1.4, ease: 'power3.out' }
      },
      {
        element: contentBoxRef,
        animationType: 'scaleUp',
        animationOptions: { duration: 1.0, ease: 'power3.out' },
        position: "-=0.7"
      },
      {
        element: titleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 35, duration: 1.0, ease: 'power3.out' },
        position: "-=0.5"
      },
      {
        element: subtitleRef,
        animationType: 'fadeInUp',
        animationOptions: { distance: 30, duration: 1.0, ease: 'power3.out' },
        position: "-=0.4"
      },
      {
        element: textRef,
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
    <section className="w-full px-8 py-16 lg:pt-36 bg-gray-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div ref={imageRef} className="order-1 lg:order-1 w-96 -mb-10 -ml-3  lg:w-[380px] lg:-mt-20 lg:-mr-24 xl:w-[430px] xl:-mr-20 xl:-mt-14 2xl:w-[600px] 2xl:-mr-24 2xl:-mt-28">
          <img className='w-max' src="../img/Home/rain.jpg" alt="" />
        </div>
        <div ref={contentBoxRef} className="order-2 lg:order-2 bg-white px-4 py-8 max-w-2xl xl:max-w-4xl relative z-10 flex-shrink-0">
          <h2 ref={titleRef} className="font-bold text-2xl xl:text-3xl 2xl:text-4xl p-1 text-gray-900">
            <span className="whitespace-nowrap">地獄から這い上がった</span>
            <br className='sm:hidden'/>
            <span className="font-extrabold text-4xl xl:text-5xl 2xl:text-6xl text-gray-900">ドラマ</span>
          </h2>

          <div ref={subtitleRef} className="mt-6 space-y-6">
            <div>
              <div className="bg-red-800 w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-red-200">2020-2021</span> THE FALL
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                独立への挑戦が想定外の結果に。資金繰りに行き詰まり、税金未納、口座差し押さえ。<br />
                <span className="text-gray-900 border-b-2 border-gray-900">住む場所も失い、極限状態が続いた</span>
              </p>
            </div>

            <div>
              <div className="bg-orange-700 w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-orange-200">2021-2022</span> THE STRUGGLE
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                住む場所を転々とし、わずかな食事で命をつないだ。<br />
                <span className="text-gray-900 border-b-2 border-gray-900">全てを失っても、夢を諦めることはなかった</span>
              </p>
            </div>

            <div>
              <div className="bg-green-700 w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-green-200">2022-現在</span> THE RISE
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                人生を変える機会が到来。その瞬間に全てを賭けた。営業顧問として一気に駆け上がる。<br />
                <span className="text-gray-900 border-b-2 border-gray-900">諦めなければ、必ず道は開ける</span>
              </p>
            </div>
          </div>

          <div ref={textRef} className="mt-8 pt-6 border-t-2 border-gray-900">
            <p className="font-bold text-xl xl:text-2xl 2xl:text-3xl">
              「生きてさえいれば何か起きる」と信じ、ギリギリを這い続けた
            </p>
            <p className="font-bold text-lg xl:text-xl 2xl:text-2xl mt-4 text-gray-900">
              地獄を味わったからこそ、今度は人をぶち上げる番だ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}