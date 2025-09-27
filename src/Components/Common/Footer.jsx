import React from 'react'

export const Footer = () => {
  return (
    <footer className="relative bg-black/90 backdrop-blur-sm text-white pt-16 px-4 overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        {/* メインコンテンツ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* ブランド・メッセージ */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                アリエスノワール
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              地獄を味わい、ぶち上げられた男が今度は
              <span className="text-white font-semibold">あなたをぶち上げる</span>
            </p>
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-2xl p-6">
              <p className="text-xl font-bold text-red-400 mb-2">「1億人の人生をぶち上げる」</p>
              <p className="text-gray-400">営業の設計士として、あなたの挑戦を支援します</p>
            </div>
          </div>

          {/* クイックリンク */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">
              ページ
            </h4>
            <div className="space-y-3">
              {[
                { name: 'ホーム', href: '/' },
                { name: 'これまで', href: '/life_chapters' },
                { name: '実績', href: '/achievements' },
                { name: '会社について', href: '/business' },
                { name: 'お問い合わせ', href: '/contact' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-red-500 rounded-full group-hover:w-2 transition-all duration-300"></div>
                    <span>{link.name}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* お問い合わせ・CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">
              相談する
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                営業でお困りですか？<br />
                まずはお気軽にご相談ください
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                今すぐ相談
              </a>
              <div className="text-sm text-gray-500">
                <p>代表: 若菜龍之介</p>
                <p>営業顧問・コンサルティング</p>
              </div>
            </div>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-gray-700/50 text-center py-3 md:py-4 lg:py-6">
              <p className="text-gray-500 text-base md:text-xl">© 2025 - アリエスノワール</p>
        </div>
      </div>
    </footer>
  )
}