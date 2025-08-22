/**
 * サービスページ
 */
const ServicesPage = () => {
  const services = [
    {
      title: "アプリ制作",
      desc: "業務効率化や新規事業に向けたアプリを、要件定義から開発・運用まで一貫してサポートします。",
      icon: "💻",
    },
    {
      title: "ホームページ制作",
      desc: "企業サイト、採用ページ、LP、ECまで。デザイン性とSEOを両立したサイトを制作します。",
      icon: "🌐",
    },
    {
      title: "SES事業",
      desc: "経験豊富なエンジニアを派遣し、貴社の開発プロジェクトを強力にサポートします。",
      icon: "👨‍💻",
    },
    {
      title: "ITコンサルティング",
      desc: "技術選定やDX推進を伴走支援。最適なシステム導入や運用戦略を提案します。",
      icon: "📊",
    },
    {
      title: "教育研修・人材育成",
      desc: "ITスキル研修や社内人材育成プログラムを提供し、成長をサポートします。",
      icon: "📚",
    },
    {
      title: "運用保守・サポート",
      desc: "導入後のシステムやWebサイトを安定稼働させるための運用・保守・セキュリティサポートを提供します。",
      icon: "🛠️",
    },
  ];

  const steps = [
    "お問い合わせ",
    "ヒアリング",
    "ご提案・お見積り",
    "開発・制作",
    "納品・サポート",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">サービス</h1>
        <p className="text-gray-600">
          立花堂はITを活用した課題解決を幅広く支援しています。
        </p>
      </div>

      {/* サービス一覧 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map(({ title, desc, icon }, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* 流れ */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-8">ご利用の流れ</h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-3">
                {i + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-12 text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">まずはお気軽にご相談ください</h2>
        <p className="text-gray-700 mb-6">
          課題やご要望に合わせた最適なご提案をいたします。
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          お問い合わせはこちら
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
