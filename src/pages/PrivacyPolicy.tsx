/**
 * プライバシーポリシー画面コンポーネント
 */
const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6 text-center">プライバシーポリシー</h1>
    <p className="mb-4">
      本サービスでは、ユーザーのプライバシーを尊重し、個人情報の保護に最大限の注意を払っています。
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. 収集する情報</h2>
    <p className="mb-2">
      - Cookie、アクセスログ、IPアドレス等の技術的情報<br />
      - お問い合わせフォーム経由の氏名・メールアドレスなど<br />
      - 将来的にログイン機能を通じて取得される登録情報
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. 利用目的</h2>
    <p className="mb-2">
      - サービスの改善・最適化<br />
      - 広告の最適表示<br />
      - お問い合わせ対応
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. 外部サービスの利用</h2>
    <p className="mb-2">
      Google Analytics, AdSense など、外部サービスにより情報が収集される場合があります。
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. お問い合わせ</h2>
    <p>ご質問等があれば、<a href="/contact" className="inline-flex items-center text-blue-600 underline font-semibold hover:text-blue-800">お問い合わせ</a>からご連絡ください。</p>
    <p className="mt-6 text-sm text-gray-500">制定日：2025年6月9日</p>
  </div>
);

export default PrivacyPolicy;