import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './Page/Home'
import { Life_Chapters } from './Page/Life_Chapters'
import { Achievements } from './Page/Achievements'
import { Business } from './Page/Business'
import { Salesadvisor } from './Page/Salesadvisor'
import { Contact } from './Page/Contact'

// スクロール位置をリセットするコンポーネント
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // ページ遷移時
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // リロード時（マウント時）
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const Layout = ({ children }) => (
  <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
    {children}
  </div>
)

export const App = () => {
  // ブラウザのスクロール復元を無効化
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life_chapters" element={<Life_Chapters />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/business" element={<Business />} />
          <Route path="/salesadvisor" element={<Salesadvisor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}