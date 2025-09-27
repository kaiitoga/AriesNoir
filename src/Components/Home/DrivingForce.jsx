import React from 'react';
import { Flame, Heart, Users, Rocket } from 'lucide-react';

export const DrivingForce = () => {

  return (
    <section className="w-full px-8 py-16 lg:pt-36 bg-orange-500 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="order-1 lg:order-2 w-96 -mb-10 -mr-7 lg:w-[380px] lg:-mt-20 lg:-ml-24 xl:w-[430px] xl:-ml-20 xl:-mt-14 2xl:w-[600px] 2xl:-ml-24 2xl:-mt-28">
          <div className="w-full h-[400px] lg:h-[500px] xl:h-[600px]">
            <img className='w-max h-max' src="../img/Home/flame.jpg" alt="" />
          </div>
        </div>

        <div className="order-2 lg:order-1 bg-white px-4 py-8 max-w-2xl xl:max-w-4xl relative z-10 flex-shrink-0">
          <h2 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl p-1">
            若菜龍之介を
            <span className="font-extrabold text-4xl xl:text-5xl 2xl:text-6xl text-red-600">突き動かす</span>
          </h2>
          <div className="bg-red-600 w-fit py-1 px-2 mt-4">
            <h4 className="font-bold text-white text-lg xl:text-2xl 2xl:text-3xl">
              4つの原動力
            </h4>
          </div>
          
          <div className="mt-6 space-y-6">
            <div>
              <div className="bg-black w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-red-400">01.</span> 挑戦し続ける状態
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                成功は"到達点"ではなく、"挑戦し続ける状態"であると再定義。<br />
                <span className="text-red-600 border-b-2 border-red-600">持続的な安定よりも、常にハングリーで挑戦している状態が理想</span>
              </p>
            </div>

            <div>
              <div className="bg-black w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-red-400">02.</span> 言葉の力への信念
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                コンサルや本、上司・先輩の一言が人生を動かしてきた原体験。<br />
                <span className="text-red-600 border-b-2 border-red-600">言葉一つで人の人生を変えられる／壊せる</span>
              </p>
            </div>

            <div>
              <div className="bg-black w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-red-400">03.</span> 1億人の人生をぶち上げる
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                学び・出会い・環境を総動員して「1億人の人生をぶち上げる」をミッションに活動中。<br />
                <span className="text-red-600 border-b-2 border-red-600">かかわってきた人達に恩返しをする</span>
              </p>
            </div>

            <div>
              <div className="bg-black w-fit py-1 px-2 mb-2">
                <h5 className="font-bold text-white text-base xl:text-lg 2xl:text-xl">
                  <span className="text-red-400">04.</span> 自分を題材にした映画
                </h5>
              </div>
              <p className="font-semibold xl:text-lg 2xl:text-xl">
                園子温、クリント・イーストウッドなどが理想の監督として、自分を題材にした映画を遺したい。<br />
                <span className="text-red-600 border-b-2 border-red-600">レガシーの一つとして人生そのものを作品にする</span>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-red-600">
            <p className="font-bold text-xl xl:text-2xl 2xl:text-3xl text-center">
              この4つの原動力が、僕を
              <span className="text-red-600">最強のぶち上げマシン</span>
              にしてくれる
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};