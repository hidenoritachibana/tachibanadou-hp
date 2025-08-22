/**
 * プライバシーポリシー画面コンポーネント
 */
const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-10 leading-relaxed">
    <h1 className="text-2xl font-bold mb-6 text-center">プライバシーポリシー</h1>
    <p className="mb-4">
      株式会社立花堂（以下「当社」といいます）は、ユーザーの皆さまの個人情報の重要性を認識し、
      その保護に関する法令を遵守するとともに、以下の方針に基づき適切に取り扱います。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. 収集する情報</h2>
    <p className="mb-2">
      当社は、サービス提供にあたり以下の情報を取得する場合があります。
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Cookie、アクセスログ、IPアドレス等の技術情報</li>
      <li>お問い合わせフォームを通じて取得する氏名・メールアドレスなど</li>
      <li>ログイン機能や会員登録により提供いただく情報</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. 利用目的</h2>
    <p className="mb-2">
      取得した情報は、以下の目的で利用いたします。
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>当社サービスの提供・改善・品質向上</li>
      <li>ユーザーサポート・お問い合わせ対応</li>
      <li>利用状況の分析およびマーケティング</li>
      <li>広告・コンテンツの最適表示</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. 外部サービスの利用</h2>
    <p className="mb-4">
      当社のウェブサイトでは、Google Analytics、Google AdSense 等の外部サービスを利用する場合があります。
      これらのサービス提供者が Cookie 等を使用して情報を収集し、利用することがあります。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. 個人情報の管理</h2>
    <p className="mb-4">
      当社は、収集した個人情報を適切に管理し、漏洩・改ざん・不正アクセス等を防止するために
      必要な安全管理措置を講じます。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. 個人情報の第三者提供</h2>
    <p className="mb-4">
      法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">6. お問い合わせ</h2>
    <p className="mb-4">
      本プライバシーポリシーに関するご質問等は、{" "}
      <a
        href="/contact"
        className="inline-flex items-center text-blue-600 underline font-semibold hover:text-blue-800"
      >
        お問い合わせフォーム
      </a>{" "}
      よりご連絡ください。
    </p>

    <p className="mt-6 text-sm text-gray-500">
      制定日：2025年9月1日<br />
      株式会社 立花堂
    </p>
  </div>
);

export default PrivacyPolicy;
