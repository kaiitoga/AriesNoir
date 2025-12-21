import React, { useEffect, useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LoadingScreen } from './Components/Common/Animation/LoadingScreen'
import { Home } from './Page/Home'
import { Life_Chapters } from './Page/Life_Chapters'
import { Achievements } from './Page/Achievements'
import { Business } from './Page/Business'
import { Salesadvisor } from './Page/Salesadvisor'
import { Contact } from './Page/Contact'

// ローディングコンテキストを作成
const LoadingContext = createContext()

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

// スクロール位置をリセットするコンポーネント
const ScrollToTop = ({ setIsLoading }) => {
  const { pathname } = useLocation();

  // ページ遷移時
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
  }, [pathname, setIsLoading]);

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
  const [isLoading, setIsLoading] = useState(true);

  // ブラウザのスクロール復元を無効化
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const startLoading = () => {
    setIsLoading(true);
  };

  return (
    <LoadingContext.Provider value={{ startLoading }}>
      <BrowserRouter>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
        <ScrollToTop setIsLoading={setIsLoading} />
        <Layout>
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/life_chapters" element={<Life_Chapters isLoading={isLoading} />} />
            <Route path="/achievements" element={<Achievements isLoading={isLoading} />} />
            <Route path="/business" element={<Business isLoading={isLoading} />} />
            <Route path="/salesadvisor" element={<Salesadvisor isLoading={isLoading} />} />
            <Route path="/contact" element={<Contact isLoading={isLoading} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LoadingContext.Provider>
  )
}