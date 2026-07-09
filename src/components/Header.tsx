import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { to: "/", label: "ホーム", en: "Home" },
  { to: "/service", label: "サービス", en: "Service" },
  { to: "/company-profile", label: "会社概要", en: "Company" },
  { to: "/contact", label: "お問い合わせ", en: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-50">
      {/*
        backdrop-blur はこの内側のバーにだけ適用する。
        header 自体に付けると backdrop-filter が包含ブロックとなり、
        子孫の fixed 要素（モバイルメニュー）がヘッダー基準で配置されてしまう。
      */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-900/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-[4.5rem] flex justify-between items-center">
          {/* ロゴ */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="株式会社立花堂 ロゴ"
              className="h-10 w-10 md:h-11 md:w-11"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-ink tracking-tight">
                株式会社立花堂
              </span>
              <span className="font-en text-[10px] font-medium tracking-widest2 text-slate-400 uppercase">
                Tachibanadou Inc.
              </span>
            </div>
          </Link>

          {/* PC用メニュー（md以上で表示） */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.slice(0, 3).map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-brand-500 after:transition-all after:duration-300 ${
                    isActive
                      ? "text-ink after:w-full"
                      : "text-slate-500 hover:text-ink after:w-0 hover:after:w-full"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 bg-ink text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-600 transition-colors"
            >
              お問い合わせ
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>

          {/* ハンバーガー（モバイルのみ表示） */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-ink p-1"
            aria-label="メニュー切り替え"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-[60]"
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 w-[19rem] max-w-[85vw] h-full bg-ink text-white z-[70] px-8 py-6 flex flex-col border-l border-white/10 shadow-2xl"
            >
              {/* ×ボタン */}
              <div className="flex justify-end mb-10">
                <button
                  onClick={toggleMenu}
                  aria-label="メニューを閉じる"
                  className="text-slate-400 hover:text-white transition-colors p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-7">
                {NAV_ITEMS.map(({ to, label, en }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      to={to}
                      onClick={toggleMenu}
                      className="group flex items-baseline gap-3"
                    >
                      <span className="font-en text-[10px] font-semibold tracking-widest2 text-brand-400 uppercase w-16">
                        {en}
                      </span>
                      <span className="text-lg font-semibold group-hover:text-brand-300 transition-colors">
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <p className="mt-auto font-en text-[10px] tracking-widest2 text-slate-500 uppercase">
                Tachibanadou Inc.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
