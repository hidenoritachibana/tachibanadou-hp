/**
 * プライバシーポリシー画面コンポーネント
 */
import { PageHeader } from "../components/ui.tsx";

const headingClass =
  "text-lg font-bold text-ink mt-10 mb-3 pl-4 border-l-4 border-brand-500";

const PrivacyPolicy = () => (
  <div className="bg-white">
    <PageHeader en="Privacy Policy" ja="プライバシーポリシー" />

    <div className="max-w-3xl mx-auto px-6 py-16 leading-relaxed text-slate-700">
      <p className="mb-4">
        株式会社立花堂（以下「当社」といいます）は、ユーザーの皆さまの個人情報の重要性を認識し、
        その保護に関する法令を遵守するとともに、以下の方針に基づき適切に取り扱います。
      </p>

      <h2 className={headingClass}>1. 収集する情報</h2>
      <p className="mb-2">
        当社は、サービス提供にあたり以下の情報を取得する場合があります。
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Cookie、アクセスログ、IPアドレス等の技術情報</li>
        <li>お問い合わせフォームを通じて取得する氏名・メールアドレスなど</li>
        <li>ログイン機能や会員登録により提供いただく情報</li>
      </ul>

      <h2 className={headingClass}>2. 利用目的</h2>
      <p className="mb-2">
        取得した情報は、以下の目的で利用いたします。
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>当社サービスの提供・改善・品質向上</li>
        <li>ユーザーサポート・お問い合わせ対応</li>
        <li>利用状況の分析およびマーケティング</li>
        <li>広告・コンテンツの最適表示</li>
      </ul>

      <h2 className={headingClass}>3. 外部サービスの利用</h2>
      <p className="mb-4">
        当社のウェブサイトでは、Google Analytics、Google AdSense 等の外部サービスを利用する場合があります。
        これらのサービス提供者が Cookie 等を使用して情報を収集し、利用することがあります。
      </p>

      <h2 className={headingClass}>4. 個人情報の管理</h2>
      <p className="mb-4">
        当社は、収集した個人情報を適切に管理し、漏洩・改ざん・不正アクセス等を防止するために
        必要な安全管理措置を講じます。
      </p>

      <h2 className={headingClass}>5. 個人情報の第三者提供</h2>
      <p className="mb-4">
        法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
      </p>

      <h2 className={headingClass}>6. お問い合わせ</h2>
      <p className="mb-4">
        本プライバシーポリシーに関するご質問等は、{" "}
        <a
          href="/contact"
          className="text-brand-600 underline underline-offset-4 font-semibold hover:text-brand-700"
        >
          お問い合わせフォーム
        </a>{" "}
        よりご連絡ください。
      </p>

      <p className="mt-10 text-sm text-slate-400">
        制定日：2025年9月1日<br />
        株式会社 立花堂
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
