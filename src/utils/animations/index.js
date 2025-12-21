import { animationTypes, animationSets } from './animationTypes.js';
import { fadeAnimations } from './fadeAnimations.js';
import { slideAnimations } from './slideAnimations.js';
import { textAnimations } from './textAnimations.js';

// 全てのアニメーション関数をまとめる
export const animations = {
  ...fadeAnimations,
  ...slideAnimations,
  ...textAnimations
};

// アニメーション設定を取得する関数
export const getAnimationConfig = (type, target, options = {}) => {
  // 基本設定から取得
  if (animationTypes[type]) {
    return {
      set: { ...animationTypes[type].set, ...options.set },
      to: { ...animationTypes[type].to, ...options.to }
    };
  }

  // カスタム関数から取得
  if (animations[type]) {
    return animations[type](target, options);
  }

  // デフォルトフォールバック
  return {
    set: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
  };
};

// アニメーションセットを取得する関数
export const getAnimationSet = (setName) => {
  return animationSets[setName] || ['fadeInUp'];
};

// エクスポート
export { animationTypes, animationSets };
export { fadeAnimations, slideAnimations, textAnimations };

// 個別のアニメーション関数をエクスポート（fadeAnimations）
export const fadeInUp = fadeAnimations.fadeInUp;
export const fadeInDown = fadeAnimations.fadeInDown;
export const fadeIn = fadeAnimations.fadeIn;
export const fadeInStagger = fadeAnimations.fadeInStagger;

// 個別のアニメーション関数をエクスポート（slideAnimations）
export const slideFromLeft = slideAnimations.slideFromLeft;
export const slideFromRight = slideAnimations.slideFromRight;
export const slideFromTop = slideAnimations.slideFromTop;
export const slideFromBottom = slideAnimations.slideFromBottom;

// 個別のアニメーション関数をエクスポート（textAnimations）
export const typeWriter = textAnimations.typeWriter;
export const fadeInWords = textAnimations.fadeInWords;
export const fadeInLetters = textAnimations.fadeInLetters;
export const waveLetters = textAnimations.waveLetters;
export const rotate3DLetters = textAnimations.rotate3DLetters;
export const scaleLetters = textAnimations.scaleLetters;
export const elegantLetters = textAnimations.elegantLetters;
export const blurLetters = textAnimations.blurLetters;

// animationTypesの設定もエクスポート（互換性のため）
// これらは関数ではなく設定オブジェクトですが、useAnimationフックで使用されます
export const scaleUp = (target, options = {}) => ({
  set: { opacity: 0, scale: 0.8, ...options.set },
  to: { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)", ...options.to }
});

export const scaleDown = (target, options = {}) => ({
  set: { opacity: 0, scale: 1.2, ...options.set },
  to: { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", ...options.to }
});

export const rotateIn = (target, options = {}) => ({
  set: { opacity: 0, rotation: 10, ...options.set },
  to: { opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out", ...options.to }
});

export const bounceInUp = (target, options = {}) => ({
  set: { opacity: 0, y: 50, ...options.set },
  to: { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out", ...options.to }
});

export const slideScaleUp = (target, options = {}) => ({
  set: { opacity: 0, y: 30, scale: 0.9, ...options.set },
  to: { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)", ...options.to }
});