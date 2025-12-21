import React, { useState } from "react";
import { Header } from "../Components/Common/Header";
import { Footer } from "../Components/Common/Footer";
import { LoadingScreen } from "../Components/Common/Animation/LoadingScreen";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="w-full mx-auto overflow-x-hidden">
        <Header />
        <main className="pt-20">
          <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
            <div className="container mx-auto px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                  お問い合わせ
                </h2>
              </div>

              {/* メインフォーム */}
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                  {/* フォーム本体 */}
                  <div className="px-8 md:px-12 py-10">
                    <form className="space-y-8 py-6">
                      {/* お問い合わせ内容（選択式） */}
                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          お問い合わせ内容 <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg"
                        >
                          <option value="">選択してください</option>
                          <option value="美容サロンについて">
                            美容サロンについて
                          </option>
                          <option value="BAR事業について">BAR事業について</option>
                          <option value="採用情報について">
                            採用情報について
                          </option>
                          <option value="その他">その他</option>
                        </select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            お名前 <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg"
                            placeholder="山田 太郎"
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            メールアドレス <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            電話番号
                          </label>
                          <input
                            type="tel"
                            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg"
                            placeholder="090-0000-0000"
                          />
                        </div>

                        <div>
                          <label className="block text-lg font-semibold text-gray-900 mb-3">
                            年齢
                          </label>
                          <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg">
                            <option value="">選択してください</option>
                            <option value="10代">10代</option>
                            <option value="20代">20代</option>
                            <option value="30代">30代</option>
                            <option value="40代">40代</option>
                            <option value="50代以上">50代以上</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-gray-900 mb-3">
                          詳細内容
                        </label>
                        <textarea
                          rows="6"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors duration-300 text-gray-900 text-lg resize-none"
                          placeholder={`ご質問・ご相談の詳細をお聞かせください

例：
・美容サロンの料金について詳しく知りたい
・BARの貸切について相談したい
・採用面接について問い合わせたい`}
                        />
                      </div>

                      {/* 送信ボタン */}
                      <div className="text-center pt-6">
                        <button
                          type="submit"
                          className="group px-12 py-4 bg-red-600 text-white text-lg tab:text-xl font-bold rounded-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <span className="flex items-center justify-center">
                            お問い合わせを送信
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};


