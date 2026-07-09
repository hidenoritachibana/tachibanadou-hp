/**
 * サービスページ
 */
import {
  AppWindow,
  Globe,
  Users,
  LineChart,
  GraduationCap,
  Wrench,
} from "lucide-react";
import { Reveal, SectionHeader, PageHeader, ContactCTA } from "../components/ui.tsx";

const SERVICES = [
  {
    icon: AppWindow,
    title: "アプリ制作",
    desc: "要件定義から開発・運用まで一貫してサポートします。",
  },
  {
    icon: Globe,
    title: "ホームページ制作",
    desc: "用途に応じた様々なサイトを制作します。",
  },
  {
    icon: Users,
    title: "SES事業",
    desc: "開発プロジェクトをサポートします。",
  },
  {
    icon: LineChart,
    title: "ITコンサルティング",
    desc: "最適なシステム導入や運用戦略を提案します。",
  },
  {
    icon: GraduationCap,
    title: "教育研修・人材育成",
    desc: "ITスキル研修や社内人材育成などをサポートします。",
  },
  {
    icon: Wrench,
    title: "運用保守・サポート",
    desc: "導入後の運用・保守サポートを提供します。",
  },
];

const STEPS = [
  { title: "お問い合わせ", desc: "フォームよりお気軽にご連絡ください。" },
  { title: "ヒアリング", desc: "課題やご要望を丁寧にお伺いします。" },
  { title: "ご提案・お見積り", desc: "最適なプランをご提案します。" },
  { title: "開発・制作", desc: "設計から開発まで一貫して対応します。" },
  { title: "納品・サポート", desc: "納品後も継続してサポートします。" },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
      <PageHeader
        en="Service"
        ja="サービス"
        lead="立花堂はITを活用した課題解決を幅広く支援しています。"
      />

      {/* サービス一覧 */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="group h-full bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/5 hover:border-brand-200">
                  <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-6 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-3">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ご利用の流れ */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader en="Flow" ja="ご利用の流れ" />
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {STEPS.map(({ title, desc }, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                  {/* つなぎ線（PCのみ） */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-slate-300" />
                  )}
                  <div className="relative shrink-0 w-12 h-12 rounded-full bg-ink text-white flex items-center justify-center md:mb-5">
                    <span className="font-en font-semibold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-ink mb-1.5">{title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};

export default ServicesPage;
