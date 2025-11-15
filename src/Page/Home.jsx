import React, { useState, useEffect } from 'react'
import { Header } from '../Components/Common/Header'
import { LoadingScreen } from '../Components/Common/Animation/LoadingScreen'
import { MV } from '../Components/Home/MV'
import { Before } from '../Components/Home/Before'
import { Challenge } from '../Components/Home/Challenge'
import { LifeChanging } from '../Components/Home/LifeChanging'
import { DrivingForce } from '../Components/Home/DrivingForce'
import { FromHellToHeaven } from '../Components/Home/FromHellToHeaven'
import { Footer } from '../Components/Common/Footer'


export const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
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
    </>
  )
}




// What Drives Me 新規 - 突き動かす原動力・情熱

