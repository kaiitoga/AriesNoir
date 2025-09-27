import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null)
  const textContainerRef = useRef(null)
  const textElementsRef = useRef([])
  const topBgRef = useRef(null)
  const bottomBgRef = useRef(null)

  useEffect(() => {
    const loading = loadingRef.current
    const textContainer = textContainerRef.current
    const textElements = textElementsRef.current
    const topBg = topBgRef.current
    const bottomBg = bottomBgRef.current

    // 初期設定
    gsap.set(loading, { autoAlpha: 1 })
    gsap.set(textContainer, { autoAlpha: 1 })
    gsap.set(textElements, {
      autoAlpha: 0,
      scale: 2,
      y: -50
    })

    // アニメーションタイムライン
    const loadingAnimation = gsap.timeline({ delay: 1 })

    loadingAnimation
      .to(textElements[0], { autoAlpha: 1, scale: 1, y: 0, duration: 0.1, ease: "back.out(2)" })
      .to(textElements[1], { autoAlpha: 1, scale: 1, y: 0, duration: 0.1, ease: "back.out(2)" }, "+=0.2")
      .to(textElements[2], { autoAlpha: 1, scale: 1, y: 0, duration: 0.1, ease: "back.out(2)" }, "+=0.2")
      .to(textContainer, { autoAlpha: 0, duration: 0.5 }, "fadeOut")
      .to(topBg, { yPercent: -100, ease: "power3.inOut", duration: 0.7 }, "fadeOut")
      .to(bottomBg, { yPercent: 100, ease: "power3.inOut", duration: 0.7 }, "fadeOut")
      .to(loading, { 
        autoAlpha: 0, 
        duration: 0, 
        onComplete: () => {
          loading.style.display = "none"
          if (onComplete) onComplete()
        }
      })

    // クリーンアップ
    return () => {
      loadingAnimation.kill()
    }
  }, [onComplete])

  return (
    <section 
      ref={loadingRef}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-screen-2xl mx-auto h-screen overflow-hidden"
      style={{ visibility: 'hidden' }}
    >
      <div 
        ref={topBgRef}
        className="absolute w-full bg-red-600 z-[1100] top-0"
        style={{ 
          height: '55vh',
          border: 'none',
          marginBottom: '0'
        }}
      />
      <div 
        ref={bottomBgRef}
        className="absolute w-full bg-red-600 z-[1100]"
        style={{ 
          height: '55vh',
          top: '50vh',
          border: 'none',
          marginTop: '0'
        }}
      />
      <div 
        ref={textContainerRef}
        className="w-full h-full flex justify-center items-center relative z-[1200]"
      >
        <div className="relative z-[1300] text-white text-[100px] md:text-[150px] lg:text-[200px] font-black tracking-xl">
          <div ref={el => textElementsRef.current[0] = el}>TRY</div>
          <div ref={el => textElementsRef.current[1] = el}>TRY</div>
          <div ref={el => textElementsRef.current[2] = el}>TRY</div>
        </div>
      </div>
    </section>
  )
}