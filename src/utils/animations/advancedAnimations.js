// 高度な複合アニメーションと視差効果

export const advancedAnimations = {
  // ===== エレガントな複合アニメーション =====

  // 優雅なフェード＋スケール＋回転
  elegantReveal: (target, options = {}) => ({
    set: {
      opacity: 0,
      scale: 0.85,
      rotation: -3,
      y: 30,
      ...options.set
    },
    to: {
      opacity: 1,
      scale: 1,
      rotation: 0,
      y: 0,
      duration: options.duration || 1.2,
      ease: options.ease || "power3.out",
      ...options.to
    }
  }),

  // 上品なスライド＋フェード＋スケール
  luxurySlideUp: (target, options = {}) => ({
    set: {
      opacity: 0,
      y: options.distance || 60,
      scale: 0.95,
      ...options.set
    },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: options.duration || 1.0,
      ease: options.ease || "power3.out",
      ...options.to
    }
  }),

  // 3D回転フェードイン（エレガント）
  rotate3DIn: (target, options = {}) => ({
    set: {
      opacity: 0,
      rotationY: options.rotationY || 15,
      transformPerspective: 1000,
      ...options.set
    },
    to: {
      opacity: 1,
      rotationY: 0,
      duration: options.duration || 1.2,
      ease: options.ease || "power3.out",
      ...options.to
    }
  }),

  // 浮遊効果付きフェードイン
  floatIn: (target, options = {}) => ({
    set: {
      opacity: 0,
      y: options.distance || 40,
      scale: 0.9,
      ...options.set
    },
    to: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: options.duration || 1.4,
      ease: options.ease || "power4.out",
      ...options.to
    }
  }),

  // スムーズな拡大＋フェード
  smoothZoomIn: (target, options = {}) => ({
    set: {
      opacity: 0,
      scale: options.scale || 0.8,
      transformOrigin: options.origin || "center center",
      ...options.set
    },
    to: {
      opacity: 1,
      scale: 1,
      duration: options.duration || 1.0,
      ease: options.ease || "expo.out",
      ...options.to
    }
  }),

  // ===== 視差効果アニメーション =====

  // 基本的な視差効果（スクロール連動）
  parallaxMove: (target, options = {}) => ({
    set: {
      y: 0,
      ...options.set
    },
    custom: (timeline, position) => {
      // ScrollTriggerを直接使用する視差効果
      const gsap = require('gsap').default;
      const { ScrollTrigger } = require('gsap/ScrollTrigger');

      gsap.to(target, {
        y: options.distance || -100,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: options.start || "top bottom",
          end: options.end || "bottom top",
          scrub: options.scrub || 1.5,
          ...options.scrollTrigger
        }
      });
    }
  }),

  // 視差スケール効果
  parallaxScale: (target, options = {}) => ({
    set: {
      scale: options.startScale || 1.1,
      ...options.set
    },
    custom: (timeline, position) => {
      const gsap = require('gsap').default;

      gsap.to(target, {
        scale: options.endScale || 1,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: options.start || "top bottom",
          end: options.end || "bottom top",
          scrub: options.scrub || 1.5,
          ...options.scrollTrigger
        }
      });
    }
  }),

  // 視差フェード効果
  parallaxFade: (target, options = {}) => ({
    set: {
      opacity: options.startOpacity || 0.3,
      ...options.set
    },
    custom: (timeline, position) => {
      const gsap = require('gsap').default;

      gsap.to(target, {
        opacity: options.endOpacity || 1,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: options.start || "top bottom",
          end: options.end || "center center",
          scrub: options.scrub || 1,
          ...options.scrollTrigger
        }
      });
    }
  }),

  // 複合視差効果（移動＋スケール＋フェード）
  parallaxComplex: (target, options = {}) => ({
    set: {
      y: 0,
      scale: options.startScale || 1.05,
      opacity: options.startOpacity || 0.8,
      ...options.set
    },
    custom: (timeline, position) => {
      const gsap = require('gsap').default;

      gsap.to(target, {
        y: options.yDistance || -80,
        scale: options.endScale || 1,
        opacity: options.endOpacity || 1,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: options.start || "top bottom",
          end: options.end || "bottom top",
          scrub: options.scrub || 2,
          ...options.scrollTrigger
        }
      });
    }
  })
};
