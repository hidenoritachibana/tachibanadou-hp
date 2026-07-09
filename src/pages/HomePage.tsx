/**
 * ホームページコンポーネント
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AppWindow, Globe, Users, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader, ContactCTA } from "../components/ui.tsx";

const NEWS = [
  { date: "2025/09/01", text: "ホームページを公開しました" },
  { date: "2025/04/01", text: "株式会社 立花堂 を設立しました" },
];

const SERVICES = [
  {
    icon: AppWindow,
    title: "アプリ制作",
    desc: "業務効率化や新しいアイデアを形にするためのオーダーメイドアプリを開発します。小規模なツールからWebアプリ・モバイルアプリまで柔軟に対応します。",
  },
  {
    icon: Globe,
    title: "ホームページ制作",
    desc: "企業・店舗の魅力を伝えるコーポレートサイトから、商品紹介ページ、LPまで幅広く対応。デザイン性と使いやすさを両立したサイトを制作します。",
  },
  {
    icon: Users,
    title: "SES事業",
    desc: "システム開発・運用において即戦力となるエンジニアを派遣し、貴社のプロジェクトをサポートします。ニーズに合わせた柔軟な体制構築が可能です。",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* 背景の装飾 */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-32 right-[-10%] w-[32rem] h-[32rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute -bottom-40 left-[-10%] w-[28rem] h-[28rem] rounded-full bg-sky-500/15 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 min-h-[82vh] flex flex-col justify-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-en text-sm font-semibold tracking-widest2 text-brand-400 uppercase mb-6"
          >
            Tachibanadou Inc.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8"
          >
            アイデアを形に、
            <br />
            暮らしをもっと
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
              スマート
            </span>
            に。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-12"
          >
            アイデアや工夫をITで形にします。
            <br />
            毎日を効率化、あなたの時間をもっと豊かにします。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              お問い合わせ
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/service"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              サービスを見る
            </Link>
          </motion.div>
        </div>

        {/* スクロールの誘導 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-0 right-8 md:right-12 hidden sm:flex flex-col items-center gap-3"
        >
          <span className="font-en text-[10px] font-semibold tracking-widest2 text-slate-500 uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

      {/* NEWS Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader en="News" ja="最新情報" />
          <Reveal>
            <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
              {NEWS.map(({ date, text }, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-5"
                >
                  <p className="font-en text-sm font-medium text-brand-600 shrink-0 tracking-wider">
                    {date}
                  </p>
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* サービス Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            en="Service"
            ja="サービス"
            lead="立花堂はITを活用した課題解決を幅広く支援しています。"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="group h-full bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/5 hover:border-brand-200">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link
              to="/service"
              className="group inline-flex items-center gap-2 text-ink font-semibold hover:text-brand-600 transition-colors"
            >
              サービス一覧を見る
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 会社概要 Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <SectionHeader
              en="Company"
              ja="会社概要"
              lead="株式会社立花堂は、大阪を拠点にアプリ制作・ホームページ制作・SESなど、ITに関するサービスを幅広く提供しています。"
              align="left"
            />
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl bg-ink text-white p-10">
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-500/20 blur-3xl" />
                <p className="relative font-en text-sm font-semibold tracking-widest2 text-brand-400 uppercase mb-3">
                  Tachibanadou Inc.
                </p>
                <p className="relative text-2xl font-bold mb-6">株式会社立花堂</p>
                <p className="relative text-sm text-slate-300 leading-relaxed mb-8">
                  設立: 2025年4月
                  <br />
                  所在地: 大阪府大阪市北区梅田
                </p>
                <Link
                  to="/company-profile"
                  className="group relative inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/25 hover:border-white/60 hover:bg-white/5 px-6 py-3 rounded-full transition-colors"
                >
                  会社概要を見る
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* お問合せ Section */}
      <ContactCTA />
    </div>
  );
}
