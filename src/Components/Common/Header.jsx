import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 1000);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <div className="w-full max-w-screen-2xl fixed top-0 z-50 bg-red-600">
        <div className="w-full mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold text-white tracking-wide">
            アリエスノワール
          </Link>
          <button
            onClick={toggleMenu}
            className="relative w-14 h-14 bg-black hover:bg-gray-800 flex items-center justify-center z-[60] transition-colors duration-200"
          >
            <span
              className={`absolute block h-[2px] w-[28px] bg-white ${
                menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
              style={{ transition: "transform 0.2s ease-out" }}
            />
            <span
              className={`absolute block h-[2px] w-[28px] bg-white ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ transition: "opacity 0.15s linear" }}
            />
            <span
              className={`absolute block h-[2px] w-[28px] bg-white ${
                menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
              style={{ transition: "transform 0.2s ease-out" }}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full z-40 transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={toggleMenu}
          className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
            menuOpen && !isAnimating ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="max-w-screen-2xl mx-auto w-full relative h-full">
          <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
            <div
              className="absolute bg-gradient-to-br from-red-600/95 via-red-500/90 to-rose-400/85 backdrop-blur-sm"
              style={{
                width: "210vh",
                height: "210vh",
                borderRadius: "100%",
                right: "-100vh",
                top: "-100vh",
                transform: menuOpen && !isAnimating ? "scale(1)" : "scale(0)",
                transition: isAnimating
                  ? "transform 0.6s ease-out 0.2s"
                  : "transform 0.8s ease-out",
                transformOrigin: "center",
              }}
            />
          </div>

          <nav
            className={`absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 text-right space-y-6 ${
              isAnimating
                ? "transition-all duration-200"
                : "transition-all duration-500 delay-300"
            } ${
              menuOpen && !isAnimating
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Link
              to="/"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              ホーム
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
            <Link
              to="/life_chapters"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.35s" }}
            >
              これまで
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
            <Link
              to="/achievements"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              実績
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
            <Link
              to="/salesadvisor"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.45s" }}
            >
              営業顧問
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
            <Link
              to="/business"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              会社について
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`block text-white text-3xl md:text-4xl lg:text-5xl font-bold hover:text-red-200 transition-all duration-300 tracking-wide hover:-translate-x-2 relative group ${
                menuOpen && !isAnimating ? "animate-slideIn" : ""
              }`}
              style={{ animationDelay: "0.55s" }}
            >
              お問い合わせ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:w-full transition-all duration-500" />
            </Link>
          </nav>

          <div
            className={`absolute right-10 top-1/2 -translate-y-1/2 ${
              isAnimating
                ? "transition-opacity duration-200"
                : "transition-opacity duration-700 delay-500"
            } ${menuOpen && !isAnimating ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-64 h-64 rounded-full border border-white/20 absolute" />
            <div className="w-80 h-80 rounded-full border border-white/10 absolute -top-8 -left-8" />
            <div className="w-96 h-96 rounded-full border border-white/5 absolute -top-16 -left-16" />
          </div>
        </div>
      </div>
    </>
  );
};
