// アニメーション種類の設定データベース
export const animationTypes = {
  // フェード系アニメーション
  fadeInUp: {
    set: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
  },
  fadeInDown: {
    set: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
  },
  fadeIn: {
    set: { opacity: 0 },
    to: { opacity: 1, duration: 0.8, ease: "power2.out" }
  },

  // スライド系アニメーション
  slideFromLeft: {
    set: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },
  slideFromRight: {
    set: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
  },

  // スケール系アニメーション
  scaleUp: {
    set: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  },
  scaleDown: {
    set: { opacity: 0, scale: 1.2 },
    to: { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
  },

  // 回転系アニメーション
  rotateIn: {
    set: { opacity: 0, rotation: 10 },
    to: { opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }
  },

  // 組み合わせ系アニメーション
  bounceInUp: {
    set: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" }
  },
  slideScaleUp: {
    set: { opacity: 0, y: 30, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" }
  },

  // 特殊効果
  glitch: {
    set: { opacity: 0, x: 0 },
    to: {
      opacity: 1,
      duration: 0.1,
      ease: "none",
      keyframes: {
        x: [0, -2, 2, -1, 1, 0],
        opacity: [0, 0.7, 1, 0.8, 1, 1]
      }
    }
  }
};

// よく使用されるアニメーション組み合わせ
export const animationSets = {
  hero: ['fadeIn', 'slideFromLeft', 'scaleUp'],
  content: ['fadeInUp', 'slideFromRight'],
  cards: ['scaleUp', 'bounceInUp'],
  text: ['fadeInUp', 'slideFromLeft']
};