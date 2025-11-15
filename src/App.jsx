import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Page/Home'
import { Life_Chapters } from './Page/Life_Chapters'
import { Achievements } from './Page/Achievements'
import { Business } from './Page/Business'
import { Salesadvisor } from './Page/Salesadvisor'
import { Contact } from './Page/Contact'

const Layout = ({ children }) => (
  <div className="max-w-screen-2xl mx-auto overflow-x-hidden">
    {children}
  </div>
)

export const App = () => {
  return (
    <BrowserRouter>
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