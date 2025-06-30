export default function Footer() {
  return (
<footer className="bg-gray-100 py-8">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 text-center space-y-4">
    {/* リンクたち */}
    <div className="space-x-4">
      <a href="/terms-of-service" className="hover:underline">利用規約</a>
      <a href="/privacy-policy" className="hover:underline">プライバシーポリシー</a>
      <a href="/contact" className="hover:underline">お問い合わせ</a>
    </div>
    {/* コピーライト */}
    <p>&copy; {new Date().getFullYear()} PaPiRa Blog. All rights reserved.</p>
  </div>
</footer>
  );
}