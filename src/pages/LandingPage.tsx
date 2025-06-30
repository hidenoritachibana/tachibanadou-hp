export default function LandingPage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-8 px-4 text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">かんたん操作で請求書のPDFを作成</h1>
        <p className="text-lg md:text-xl mb-8">登録不要・無料の電子請求書作成アプリ</p>
        <a
          href="/invoice/create" // 本番はルーティングに合わせて修正
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
        >
          今すぐ使ってみる
        </a>
      </section>
      <section className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">お知らせ</h2>
          <div className="bg-white rounded-lg shadow-md p-5 h-40 overflow-y-auto text-left">
            <ul className="space-y-6">
              <li className="border-l-4 border-blue-600 pl-5">
                <p className="text-xs text-blue-600 font-semibold mb-1">2025/06/10</p>
                <p className="text-gray-800 font-medium">PaPiRa(Ver.1.0.0)をリリースしました。</p>
              </li>
              {/* 追加のお知らせはここに */}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">アプリの特徴</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            title: "登録不要ですぐ使える",
            desc: "アカウント登録なしですぐにご利用いただけます。"
          }, {
            title: "スマホで手軽に使える",
            desc: "PCはもちろんスマホからもご利用いただけます。"
          }, {
            title: "PDF出力対応",
            desc: "入力したデータは１クリックでPDFに出力可能です。"
          }].map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer mx-auto w-[260px] flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview / Screenshot Section */}
      <section className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">請求書作成例</h2>
        <div className="py-5 max-w-4xl mx-auto shadow-md rounded overflow-hidden">
          <img
            src="/image.png"
            alt="アプリの画面"
            className="w-full"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 text-center px-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">無料ですぐに使い始めましょう</h2>
        <a
          href="/invoice/create"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700"
        >
          今すぐ使ってみる
        </a>
      </section>

    </div>
  );
}