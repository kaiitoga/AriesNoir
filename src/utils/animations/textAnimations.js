// テキスト専用アニメーションの実装
export const textAnimations = {
  typeWriter: (target, options = {}) => {
    const text = target.textContent;
    const speed = options.speed || 0.05;

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        target.textContent = '';
        timeline.to({}, {
          duration: text.length * speed,
          onUpdate: function() {
            const progress = this.progress();
            const currentLength = Math.floor(text.length * progress);
            target.textContent = text.slice(0, currentLength);
          },
          ease: "none"
        }, position);
      }
    };
  },

  fadeInWords: (target, options = {}) => {
    const words = target.innerHTML.split(' ');
    const wrappedWords = words.map(word => `<span style="opacity: 0">${word}</span>`);
    target.innerHTML = wrappedWords.join(' ');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const wordElements = target.querySelectorAll('span');
        timeline.to(wordElements, {
          opacity: 1,
          duration: options.duration || 0.5,
          stagger: options.stagger || 0.1,
          ease: options.ease || "power2.out"
        }, position);
      }
    };
  },

  fadeInLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="opacity: 0">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          duration: options.duration || 0.03,
          stagger: options.stagger || 0.03,
          ease: options.ease || "power2.out"
        }, position);
      }
    };
  },

  // ===== 高度な文字演出 =====

  // 波打つように1文字ずつ表示（エレガント）
  waveLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.5,
          stagger: options.stagger || 0.05,
          ease: options.ease || "power3.out"
        }, position);
      }
    };
  },

  // 3D回転しながら1文字ずつ表示（上品）
  rotate3DLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: rotateY(90deg);">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          rotationY: 0,
          duration: options.duration || 0.6,
          stagger: options.stagger || 0.04,
          ease: options.ease || "power3.out",
          transformPerspective: 1000
        }, position);
      }
    };
  },

  // スケールしながら1文字ずつ表示（優雅）
  scaleLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: scale(0);">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          scale: 1,
          duration: options.duration || 0.5,
          stagger: options.stagger || 0.04,
          ease: options.ease || "back.out(2)"
        }, position);
      }
    };
  },

  // フェード＋スライドで1文字ずつ（洗練）
  elegantLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(30px) scale(0.8);">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration || 0.6,
          stagger: options.stagger || 0.03,
          ease: options.ease || "power4.out"
        }, position);
      }
    };
  },

  // ブラー効果から1文字ずつ表示（モダン）
  blurLetters: (target, options = {}) => {
    const text = target.textContent;
    const letters = text.split('').map(letter =>
      letter === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; filter: blur(10px);">${letter}</span>`
    );
    target.innerHTML = letters.join('');

    return {
      set: { opacity: 1 },
      custom: (timeline, position) => {
        const letterElements = target.querySelectorAll('span');
        timeline.to(letterElements, {
          opacity: 1,
          filter: "blur(0px)",
          duration: options.duration || 0.5,
          stagger: options.stagger || 0.04,
          ease: options.ease || "power3.out"
        }, position);
      }
    };
  }
};