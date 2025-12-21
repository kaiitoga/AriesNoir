// フェード系アニメーションの詳細実装
export const fadeAnimations = {
  fadeInUp: (target, options = {}) => ({
    set: { opacity: 0, y: options.distance || 40, ...options.set },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.7,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  fadeInDown: (target, options = {}) => ({
    set: { opacity: 0, y: -(options.distance || 40), ...options.set },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.7,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  fadeIn: (target, options = {}) => ({
    set: { opacity: 0, ...options.set },
    to: {
      opacity: 1,
      duration: options.duration || 0.8,
      ease: options.ease || "power2.out",
      ...options.to
    }
  }),

  fadeInStagger: (target, options = {}) => ({
    set: { opacity: 0, y: options.distance || 30, ...options.set },
    to: {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.6,
      ease: options.ease || "power2.out",
      stagger: options.stagger || 0.2,
      ...options.to
    }
  })
};