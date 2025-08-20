/**
 * ホームページコンポーネント
 */
export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
          アイデアを形に<br />暮らしをもっとスマートに
        </h1>
        <br />
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          アイデアや工夫をITで形にします。<br />
          毎日を効率化、あなたの時間をもっと豊かにします。
        </p>
      </section>

      {/* NEWS Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">NEWS</h2>
          <div className="bg-white rounded-lg shadow-md p-5 h-40 overflow-y-auto text-left">
            <ul className="space-y-6">
              <li className="border-l-4 border-black pl-5">
                <p className="text-xs text-gray-600 font-semibold mb-1">2025/09/01</p>
                <p className="text-gray-800 font-medium">ホームページを公開しました</p>
              </li>
              <li className="border-l-4 border-black pl-5">
                <p className="text-xs text-gray-600 font-semibold mb-1">2025/04/01</p>
                <p className="text-gray-800 font-medium">株式会社 立花堂 を設立しました</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 事業内容 Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">サービス</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            title: "アプリ制作",
            desc: "業務効率化や新しいアイデアを形にするためのオーダーメイドアプリを開発します。小規模なツールからWebアプリ・モバイルアプリまで柔軟に対応します。"
          }, {
            title: "ホームページ制作",
            desc: "企業・店舗の魅力を伝えるコーポレートサイトから、商品紹介ページ、LPまで幅広く対応。デザイン性と使いやすさを両立したサイトを制作します。"
          }, {
            title: "SES事業",
            desc: "システム開発・運用において即戦力となるエンジニアを派遣し、貴社のプロジェクトをサポートします。ニーズに合わせた柔軟な体制構築が可能です。"
          }].map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer mx-auto w-[280px] flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 会社概要 Section */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">会社概要</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          株式会社 立花堂の会社概要は以下をご参照ください。
        </p>
        <a
          href="/company-profile"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          会社概要はこちら
        </a>
      </section>

      {/* お問合せ Section */}
      <section className="py-12 text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">お問合せ</h2>
        <p className="text-gray-700 mb-6">
          ご質問・ご相談などございましたら、下記よりお気軽にお問い合わせください。
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          メールでお問い合わせ
        </a>
      </section>

    </div>
  );
}
