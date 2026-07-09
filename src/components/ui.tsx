/**
 * サイト共通のUIパーツ
 */
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/** スクロールで下からフェードインさせるラッパー */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/** 英字キッカー付きのセクション見出し */
export function SectionHeader({
  en,
  ja,
  lead,
  align = "center",
}: {
  en: string;
  ja: string;
  lead?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  return (
    <Reveal className={`${alignClass} mb-12`}>
      <p className="font-en text-sm font-semibold tracking-widest2 text-brand-600 uppercase mb-3">
        {en}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
        {ja}
      </h2>
      {lead && (
        <p className={`mt-4 text-slate-500 leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/** 下層ページ用のページヘッダー */
export function PageHeader({
  en,
  ja,
  lead,
}: {
  en: string;
  ja: string;
  lead?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-24 right-[-10%] w-96 h-96 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
        <Reveal>
          <p className="font-en text-sm font-semibold tracking-widest2 text-brand-400 uppercase mb-3">
            {en}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{ja}</h1>
          {lead && (
            <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl">{lead}</p>
          )}
        </Reveal>
      </div>
    </div>
  );
}

/** ページ下部の共通お問い合わせバンド */
export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -bottom-32 left-[-5%] w-[28rem] h-[28rem] rounded-full bg-brand-500/15 blur-3xl" />
      <div className="absolute -top-24 right-[-5%] w-80 h-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <Reveal>
          <p className="font-en text-sm font-semibold tracking-widest2 text-brand-400 uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-xl mx-auto mb-9">
            課題やご要望に合わせた最適なご提案をいたします。
            ご質問・ご相談などございましたら、お気軽にお問い合わせください。
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            お問い合わせはこちら
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
