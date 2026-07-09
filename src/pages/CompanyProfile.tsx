/**
 * 会社概要
 */
import { Reveal, PageHeader, ContactCTA } from "../components/ui.tsx";

const PROFILE: { label: string; value: React.ReactNode }[] = [
  { label: "社名", value: "株式会社立花堂" },
  { label: "設立", value: "2025年 4月 1日" },
  {
    label: "事業内容",
    value: (
      <ul className="space-y-2">
        {[
          "アプリケーションの企画、制作、運営",
          "ソフトウェアのライセンス販売",
          "SaaS事業",
          "人材育成、教育研修、講師事業",
          "各種コンサルティング事業",
        ].map((item, i) => (
          <li key={i} className="flex items-baseline gap-3">
            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand-500 translate-y-[-2px]" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "本社",
    value: (
      <>
        大阪府大阪市北区梅田 1丁目2番2号
        <br />
        大阪駅前第2ビル 12-12
      </>
    ),
  },
  { label: "代表", value: "代表取締役　立花秀徳" },
];

const CompanyProfile = () => (
  <div className="bg-white">
    <PageHeader
      en="Company"
      ja="会社概要"
      lead="株式会社立花堂の会社概要をご紹介します。"
    />

    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <dl className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden">
            {PROFILE.map(({ label, value }, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 px-6 sm:px-8 py-6"
              >
                <dt className="text-sm font-semibold text-slate-400 tracking-wider pt-0.5">
                  {label}
                </dt>
                <dd className="text-slate-800 font-medium leading-relaxed">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>

    <ContactCTA />
  </div>
);

export default CompanyProfile;
