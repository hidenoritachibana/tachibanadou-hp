const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6 text-center">プライバシーポリシー</h1>

    <p className="mb-4">
      当ブログ（以下、「当サイト」）では、訪問者のプライバシーを尊重し、個人情報の保護に努めています。以下に、当サイトにおける情報の取り扱いについてご説明いたします。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. 収集する情報</h2>
    <p className="mb-2">
      当サイトでは、次の情報を取得する場合があります：
    </p>
    <ul className="list-disc pl-6 mb-2 text-gray-700">
      <li>アクセス解析ツールによるCookie情報、IPアドレス、ブラウザ情報など</li>
      <li>お問い合わせフォームに入力された氏名・メールアドレス</li>
      <li>今後導入予定の会員機能における登録情報</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. 利用目的</h2>
    <ul className="list-disc pl-6 mb-2 text-gray-700">
      <li>ブログ運営の改善およびユーザー体験の向上</li>
      <li>コンテンツや広告の最適化</li>
      <li>お問い合わせへの対応</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. アクセス解析・広告配信</h2>
    <p className="mb-2">
      当サイトでは、Google Analytics や Google AdSense などの外部サービスを利用し、閲覧履歴等をもとに情報収集・広告配信を行うことがあります。これらの情報は匿名で収集されており、個人を特定するものではありません。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. 他サイトへのリンク</h2>
    <p className="mb-2">
      当サイトには外部サイトへのリンクが含まれることがあります。リンク先での情報収集や個人情報保護については、当サイトでは責任を負いかねますのでご注意ください。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. お問い合わせ</h2>
    <p>
      プライバシーポリシーに関するご質問は、<a href="/contact" className="inline-flex items-center text-blue-600 underline font-semibold hover:text-blue-800">お問い合わせ</a>よりご連絡ください。
    </p>

    <p className="mt-6 text-sm text-gray-500">制定日：2025年6月13日</p>
  </div>
);

export default PrivacyPolicy;