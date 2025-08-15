/**
 * 利用規約画面コンポーネント
 */
const TermsOfService = () => (
  <div className="max-w-3xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-6 text-center">利用規約</h1>
    <p className="mb-4">
      この利用規約（以下「本規約」）は、当サイトの提供するサービスの利用条件を定めるものです。
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. 利用条件</h2>
    <p>本サービスは、ユーザーが無料で利用できるWebアプリです。一部機能は将来的に有料化する可能性があります。</p>

    <h2 className="text-xl font-semibold mt-6 mb-2">2. 禁止行為</h2>
    <p>
      - 法令違反、公序良俗に反する行為<br />
      - 他人へのなりすまし<br />
      - サービスの無断転用や妨害行為
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">3. 免責事項</h2>
    <p>
      本サービスの利用により生じた損害等について、運営者は一切の責任を負いません。
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">4. 規約の変更</h2>
    <p>
      本規約は、予告なく変更される場合があります。変更後も引き続きサービスをご利用された場合、変更に同意したものとみなされます。
    </p>

    <p className="mt-6 text-sm text-gray-500">制定日：2025年6月9日</p>
  </div>
);

export default TermsOfService;