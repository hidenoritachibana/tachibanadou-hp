/**
 * ホームページコンポーネント
 */
export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="bg-black text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
          株式会社 立花堂
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          私たちは、中小企業や個人事業主の皆さまのために、<br />
          シンプルで使いやすい業務支援ツールを提供しています。
        </p>
      </section>

      {/* NEWS Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">NEWS</h2>
          <div className="bg-white rounded-lg shadow-md p-5 h-48 overflow-y-auto text-left">
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
        <h2 className="text-3xl font-bold text-center mb-12">事業内容</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            title: "登録不要ですぐ使える",
            desc: "立花堂のツールはアカウント登録不要。すぐに使い始められる設計です。"
          }, {
            title: "スマホで手軽に",
            desc: "PCはもちろん、スマートフォンからも快適に操作いただけます。"
          }, {
            title: "PDF出力対応",
            desc: "見積書・請求書など、入力したデータをワンクリックでPDF化できます。"
          }].map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer mx-auto w-[260px] flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-3 text-black">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 製品一覧 Section */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">製品一覧</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          請求書・見積書作成アプリ「PaPiRa」をはじめ、業務効率化を支える各種Webアプリを開発・提供しています。
        </p>
        <div className="py-5 max-w-4xl mx-auto shadow-md rounded overflow-hidden">
          <img
            src="/image.png"
            alt="アプリの画面"
            className="w-full"
          />
        </div>
      </section>

      {/* お問合せ Section */}
      <section className="py-12 text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">お問合せ</h2>
        <p className="text-gray-700 mb-6">
          ご質問・ご相談などございましたら、下記よりお気軽にお問い合わせください。
        </p>
        <a
          href="mailto:info@tachibanado.co.jp"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          メールでお問い合わせ
        </a>
      </section>

    </div>
  );
}
