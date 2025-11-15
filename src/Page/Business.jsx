import React, { useState, useEffect } from "react";
import { Header } from "../Components/Common/Header";
import { Footer } from "../Components/Common/Footer";
import { LoadingScreen } from "../Components/Common/Animation/LoadingScreen";
import { List, Check, Handshake } from "lucide-react";

export const Business = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="w-full mx-auto overflow-x-hidden">
        <Header />
        <main className="pt-20">
          <section className="w-full px-8 py-4 md:py-10 bg-red-50">
            <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
              会社案内
            </h4>
            <h3 className="font-lora text-5xl md:text-6xl lg:text-7xl">
              ABOUT
            </h3>

            <div className="w-full md:max-w-6xl md:flex justify-between items-center gap-8">
              <div className="md:w-2/5">
                <div className="bg-black w-fit py-1 px-2 mt-6 md:mt-0 lg:mt-0">
                  <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                    私たちの事業
                  </h4>
                </div>
                <p className="font-semibold md:text-lg lg:text-xl mt-1 md:mt-3 lg:mt-5 max-w-md">
                  東京都を拠点に、人々の生活に価値を届ける
                  当社は東京都を拠点に、多岐にわたるサービス展開で人々の日常に彩りを添えています。
                  <br />
                  美容事業では、美容脱毛サロンを運営し、24時間予約可能な体制で迅速なサービスを提供。
                  <br />
                  飲食事業では、新宿区歌舞伎町において、若者が思う存分楽しめる特別な空間を創造しています。
                </p>
              </div>
              <div className="mt-1 md:mt-3 lg:mt-5 max-w-md md:max-w-xl md:w-3/5">
                <img
                  className="w-4/5"
                  src="../img/business/企業説明.jpg"
                  alt="img"
                />
              </div>
            </div>

            <div>
              <div className="bg-black w-fit py-1 px-2 mt-6 md:mt-10 lg:mt-14">
                <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                  私たちの強み
                </h4>
              </div>
              <div className="mt-6 md:mt-16 font-semibold md:text-lg lg:text-xl">
                <div className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center md:max-w-3xl md:mx-0">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <List className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      豊富な実績
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    当社は、業界で豊富な実績を築いています。実績豊かなチームが協力してプロジェクトに取り組むことで、確かな価値と信頼をお届けしています。
                  </p>
                </div>
                <div className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center mt-6 md:mt-14 md:max-w-3xl md:mx-0 lg:ml-20">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <Check className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      迅速なサービス
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    私たちは迅速なサービスを提供し、お客様の要望に素早くお応えします。対応に時間がかかる心配は一切ございません。
                  </p>
                </div>
                <div className="text-center w-11/12 max-w-md mx-auto md:flex md:justify-center mt-6 md:mt-14 md:max-w-3xl md:mx-0 lg:ml-40">
                  <div className="md:w-1/4">
                    <div className="mx-auto flex justify-center items-center border-[1px] border-sky-500 rounded-full w-14 h-14 md:w-20 md:h-20">
                      <Handshake className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                    </div>
                    <h5 className="text-center mt-1 md:mt-2 text-sky-500">
                      数々の称賛のお声
                    </h5>
                  </div>
                  <p className="text-center md:text-left mt-1 md:mt-0 md:w-3/4 md:flex items-center">
                    当社はお客様から多くの好評をいただいており、お客様の声を大切にしています。ご満足いただけるサービスを提供し、お客様の期待を常に超える努力を続けます。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <div>
                <div className="bg-black w-fit py-1 px-2 mt-6 md:mt-10 lg:mt-14">
                  <h4 className="font-bold text-white text-lg md:text-2xl lg:text-3xl">
                    私たちの理念
                  </h4>
                </div>
                <div className="md:max-w-sm lg:max-w-xl mt-4 md:mt-10 lg:mt-16">
                  <div className="md:flex justify-start">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Mission
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      "最高品質" を "大量生産"
                    </p>
                  </div>
                  <div className="md:flex justify-start mt-2 md:mt-4 lg:mt-8">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Vision
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      自由で、かっこいい人生を送る
                    </p>
                  </div>
                  <div className="md:flex justify-start mt-2 md:mt-4 lg:mt-8">
                    <p className="font-lora text-xl md:text-2xl lg:text-3xl md:w-28 lg:w-36">
                      Value
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl">
                      "幸福"の追求　~Well-Being~
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/5 min-w-80 max-w-5xl">
              <img
                className="w-full"
                src="../img/business/経営理念.png"
                alt="philosophy"
              />
            </div>
          </section>

          <section className="w-full px-8 py-4 md:py-10 bg-red-50">
            <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
              事業内容
            </h4>
            <h3 className="font-lora text-5xl md:text-6xl lg:text-7xl">
              Business
            </h3>

            <div className="max-w-screen-xl mt-10 md:mt-14 lg:mt-18 lg:flex gap-4 justify-between items-center">
              <div className="lg:w-3/5 max-w-2xl">
                <div className="bg-black w-fit py-1 px-2">
                  <h4 className="font-cactus text-red-400 text-lg md:text-2xl lg:text-3xl">
                    美容サロン
                  </h4>
                </div>
                <p className="mt-2 font-semibold md:text-lg lg:text-xl">
                  美容のプロである女性目線で
                  <span className="text-red-600 border-red-600">
                    『デキる男』
                  </span>
                  をプロデュース。美容に興味があるけど何から始めたらいいか分からない方に、美容大好きなスタッフが親身に対応。
                  <br className="hidden md:block" />
                  豊富な知識と経験を積み上げ、長年培った専門の女性スタッフが一人ひとりに担当制でサポート。
                  <br className="hidden md:block" />
                  『SHR方式』と『IPL方式』の組み合わせで、各部位に最適な脱毛効果を実感でき、痛みも最小限。
                  <br className="hidden md:block" />
                  さらに、Leoのお客様とスタッフだけのコミュニティ
                  <span className="text-red-600 border-red-600">
                    『Club Dreamers』
                  </span>
                  では、夢を追い求める仲間たちが集まり、脱毛をきっかけに交流の場を提供しています。
                  <br className="hidden md:block" />
                  また、脱毛会員限定のコンテンツとして、オーダースーツの原価販売やブランド品アウトレット価格販売サービスなども合わせて提供しています。
                  <br />
                  詳細はこちら
                </p>
              </div>
              <div className="mt-2 min-w-80 w-3/4 lg:w-2/5 max-w-xl">
                <img src="../img/business/美容サロン.png" alt="img" />
              </div>
            </div>

            <div className="max-w-screen-xl mt-10 md:mt-14 lg:mt-18 lg:flex gap-4 justify-between items-center">
              <div className="lg:w-3/5 max-w-2xl">
                <div className="bg-black w-fit py-1 px-2">
                  <h4 className="font-cactus text-red-400 text-lg md:text-2xl lg:text-3xl">
                    飲食事業（BAR）
                  </h4>
                </div>
                <p className="mt-2 font-semibold md:text-lg lg:text-xl">
                  当店は、歌舞伎町の躍動感あふれる雰囲気を感じながら、居心地の良い空間で至福のひとときをお過ごしいただけます。
                  <br className="hidden md:block" />
                  私たちのBARは、若々しいエネルギーと洗練された雰囲気が見事に調和した特徴的な場所です。
                  <br className="hidden md:block" />
                  カラオケやダーツ、テーブルゲームなどをご用意しており、
                  <span className="text-red-600 border-red-600">『遊ぶ』</span>
                  に特化しています。
                  <br className="hidden md:block" />
                  おしゃれな夜を求める若者から、くつろぎのひとときを望む大人まで、どんな方でも歓迎です。
                  <br className="hidden md:block" />
                  イベント事業を過去に展開していた経験から、団体様の貸切利用やイベント利用も柔軟に対応しております。
                  <br className="hidden md:block" />
                  皆さんのご来店お待ちしております。
                </p>
              </div>
              <div className="mt-2 min-w-80 w-3/4 lg:w-2/5 max-w-xl">
                <img src="../img/business/BAR.jpg" alt="img" />
              </div>
            </div>
          </section>

          <section className="w-full px-8 py-4 md:py-10 bg-red-50">
            <h4 className="font-lora font-semibold text-red-600 text-lg md:text-xl lg:text-2xl">
              所在地
            </h4>
            <h3 className="font-lora text-5xl md:text-6xl lg:text-7xl">
              ACCESS
            </h3>
            <div>
              <div className="font-semibold md:text-lg lg:text-xl">
                ・Men's Beauty Salon Leo
              </div>
              <div>
                <p>〒170-0013</p>
                <p>東京都豊島区東池袋4-7-6</p>
                <p>アーバイル池袋East</p>
                <p>501号室</p>
              </div>
            </div>
            <div className="w-80 h-[250px] sm:w-[450px] sm:h-[350px] lg:w-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6477.884181086521!2d139.70830367770998!3d35.72764269999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d6ec58035cf%3A0x6d6dc0b7dd285a3f!2z44Ki44O844OQ44Kk44Or5rGg6KGLRUFTVA!5e0!3m2!1sja!2sjp!4v1753498851215!5m2!1sja!2sjp"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

