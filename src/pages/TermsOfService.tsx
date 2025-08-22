/**
 * 利用規約画面コンポーネント
 */
const TermsOfService = () => (
  <div className="max-w-3xl mx-auto px-4 py-10 leading-relaxed">
    <h1 className="text-2xl font-bold mb-6 text-center">利用規約</h1>
    <p className="mb-4">
      本利用規約（以下「本規約」）は、株式会社立花堂（以下「当社」といいます）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
      ユーザーの皆さま（以下「利用者」といいます）は、本規約に同意の上で本サービスをご利用ください。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">1. 適用</h2>
    <p className="mb-4">
      本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. 利用条件</h2>
    <p className="mb-2">
      本サービスは、インターネットを通じて提供されるWebアプリケーションです。  
      一部機能は無料で利用できますが、将来的に有料サービスを提供する場合があります。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. 禁止行為</h2>
    <p className="mb-2">利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
    <ul className="list-disc list-inside mb-4">
      <li>法令または公序良俗に違反する行為</li>
      <li>他の利用者または第三者になりすます行為</li>
      <li>本サービスの運営を妨害する行為</li>
      <li>当社の知的財産権やその他の権利を侵害する行為</li>
      <li>その他、当社が不適切と判断する行為</li>
    </ul>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. 免責事項</h2>
    <p className="mb-4">
      当社は、本サービスの提供に関して、その正確性・完全性・有用性を保証するものではありません。  
      利用者が本サービスを利用したことにより生じた損害について、当社は一切の責任を負わないものとします。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">5. 規約の変更</h2>
    <p className="mb-4">
      当社は、必要に応じて本規約を変更することがあります。変更後の内容は、本サービス上に掲示された時点から効力を生じるものとし、
      利用者が変更後も本サービスを利用した場合、当該変更に同意したものとみなされます。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">6. 準拠法および管轄</h2>
    <p className="mb-4">
      本規約の解釈および適用は、日本法に準拠します。  
      本サービスに関して生じた紛争については、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
    </p>

    <p className="mt-6 text-sm text-gray-500">
      制定日：2025年9月1日<br />
      株式会社 立花堂
    </p>
  </div>
);

export default TermsOfService;
