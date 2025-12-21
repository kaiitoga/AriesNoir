import React, { useLayoutEffect } from 'react'
import { Header } from '../Components/Common/Header'
import { MV } from '../Components/Home/MV'
import { Before } from '../Components/Home/Before'
import { Challenge } from '../Components/Home/Challenge'
import { LifeChanging } from '../Components/Home/LifeChanging'
import { DrivingForce } from '../Components/Home/DrivingForce'
import { FromHellToHeaven } from '../Components/Home/FromHellToHeaven'
import { Footer } from '../Components/Common/Footer'


export const Home = ({ isLoading }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="w-full mx-auto overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <MV />
        <Before />
        <Challenge />
        <FromHellToHeaven />
        <DrivingForce />
        <LifeChanging />
      </main>
      <Footer />
    </div>
  )
}




// What Drives Me 新規 - 突き動かす原動力・情熱

