import React from 'react'

export const MV = () => {
  return (
    <section 
      className="relative w-full h-screen flex flex-col justify-center bg-center bg-cover bg-no-repeat pt-16 md:pt-20 lg:pt-32"
      style={{ backgroundImage: "url('../img/human/photo4.jpg')" }}
    >
      <div className="text-white w-72 sm:w-96 md:w-[420px] lg:w-[500px] xl:w-[550px] absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-16 lg:bottom-12 xl:right-24 xl:bottom-16">
        <h2 className="bg-black p-1 font-bold text-center text-2xl lg:text-4xl">
          アリエスノワールの未来
        </h2>
        <p className="font-semibold text-sm lg:text-lg py-1 px-2 text-white bg-black bg-opacity-45 leading-relaxed">
          アリエスノワールを創業した理由<br />
          ここまで成長できた理由<br />
          これからの成長について<br />
          将来どんな会社になっているのか？<br />
          アリエスノワールの「これまで」と「これから」を語ります。
        </p>
      </div>
    </section>
  )
}