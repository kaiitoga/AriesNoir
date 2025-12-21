import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getAnimationConfig } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = ({
  triggerElements,
  triggerSettings = {},
  globalSettings = {}
}) => {
  useEffect(() => {
    const firstElement = triggerElements[0]?.element?.current;
    if (!firstElement) return;

    // デフォルトのScrollTrigger設定
    const defaultTriggerSettings = {
      trigger: firstElement,
      start: "top 75%",
      toggleActions: "play none none none",
      ...triggerSettings
    };

    const tl = gsap.timeline({
      scrollTrigger: defaultTriggerSettings,
      ...globalSettings
    });

    triggerElements.forEach(({
      element,
      position,
      setAnimation = {},
      toAnimation = {},
      children,
      animationType = 'fadeInUp',
      animationOptions = {},
      delay = 0
    }, index) => {
      const target = element.current;
      if (!target) return;

      // アニメーション設定を取得
      const animConfig = getAnimationConfig(animationType, target, {
        ...animationOptions,
        set: setAnimation,
        to: toAnimation
      });

      // セットアニメーションを適用
      gsap.set(target, animConfig.set);

      // ポジション計算
      let positionParam;
      if (index === 0) {
        positionParam = delay;
      } else if (position === undefined) {
        positionParam = "<";
      } else {
        positionParam = position;
      }

      // カスタムアニメーション関数がある場合
      if (animConfig.custom) {
        animConfig.custom(tl, positionParam);
      } else {
        // 通常のtoアニメーション
        tl.to(target, animConfig.to, positionParam);
      }

      // 子要素のアニメーション
      if (children && children.selector && target) {
        const childElements = target.querySelectorAll(children.selector);
        if(childElements.length > 0) {
          const childAnimConfig = getAnimationConfig(
            children.animationType || 'fadeInUp',
            childElements[0],
            children.animationOptions || {}
          );

          gsap.set(childElements, {
            ...childAnimConfig.set,
            ...(children.childSetAnimation || {})
          });

          tl.to(childElements, {
            ...childAnimConfig.to,
            stagger: children.staggerDelay || 0.2,
            ...(children.childToAnimation || {})
          }, positionParam + "+=0.3");
        }
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [triggerElements, triggerSettings, globalSettings]);
};