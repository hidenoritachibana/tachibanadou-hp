import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* ロゴ */}
        <Link to="/" className="flex items-center text-xl font-bold text-blue-600">
          <img src="/logo.png" alt="ロゴ" className="h-12 w-12" />
          <div className="ml-2 flex flex-col">

            <ruby className="text-3xl font-bold text-blue-600 ml-2">
              PaPiRa Blog
              <rt className="text-xs text-gray-400">パピラ ブログ</rt>
            </ruby>
            <p className="text-xs">非エンジニアでもわかるIT系ブログ</p>
          </div>
        </Link>

        {/* ハンバーガー */}
        <button
          onClick={toggleMenu}
          className="text-gray-800"
          aria-label="メニュー切り替え"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 共通ナビゲーション（PC・SPどちらもこれを使う） */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-25 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 md:w-[50%] h-full bg-white shadow-lg z-50 px-4 py-6 space-y-4 text-gray-700"
            >
              {/* ×ボタン */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  aria-label="メニューを閉じる"
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X size={24} />
                </button>
              </div>
              <Link to="/contact" className="block hover:text-blue-600" onClick={toggleMenu}>
                お問い合わせ
              </Link>

              {/* アプリを使うボタン（必要に応じて表示） */}
              {/* 
      <Link
        to="/app"
        className="block bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
        onClick={toggleMenu}
      >
        アプリを使う
      </Link>
      */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}