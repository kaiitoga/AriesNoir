// スライド系アニメーションの詳細実装
export const slideAnimations = {
  slideFromLeft: (target, options = {}) => ({
    set: { opacity: 0, x: -(options.distance || 60), ...options.set },
    to: {
      opacity: 1,
      x: 0,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  slideFromRight: (target, options = {}) => ({
    set: { opacity: 0, x: options.distance || 60, ...options.set },
    to: {
      opacity: 1,
      x: 0,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  slideFromTop: (target, options = {}) => ({
    set: { opacity: 0, y: -(options.distance || 60), ...options.set },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  slideFromBottom: (target, options = {}) => ({
    set: { opacity: 0, y: options.distance || 60, ...options.set },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out",
      ...options.to
    }
  })
};