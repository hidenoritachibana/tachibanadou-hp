import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="株式会社立花堂 ロゴ"
                className="h-10 w-10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight">
                  株式会社立花堂
                </span>
                <span className="font-en text-[10px] font-medium tracking-widest2 text-slate-400 uppercase">
                  Tachibanadou Inc.
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              大阪府大阪市北区梅田 1丁目2番2号
              <br />
              大阪駅前第2ビル 12-12
            </p>
          </div>

          {/* リンク */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <div className="space-y-3">
              <p className="font-en text-[10px] font-semibold tracking-widest2 text-slate-500 uppercase mb-4">
                Menu
              </p>
              <Link to="/" className="block text-slate-300 hover:text-brand-400 transition-colors">ホーム</Link>
              <Link to="/service" className="block text-slate-300 hover:text-brand-400 transition-colors">サービス</Link>
              <Link to="/company-profile" className="block text-slate-300 hover:text-brand-400 transition-colors">会社概要</Link>
              <Link to="/contact" className="block text-slate-300 hover:text-brand-400 transition-colors">お問い合わせ</Link>
            </div>
            <div className="space-y-3">
              <p className="font-en text-[10px] font-semibold tracking-widest2 text-slate-500 uppercase mb-4">
                Legal
              </p>
              <Link to="/terms-of-service" className="block text-slate-300 hover:text-brand-400 transition-colors">利用規約</Link>
              <Link to="/privacy-policy" className="block text-slate-300 hover:text-brand-400 transition-colors">プライバシーポリシー</Link>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="font-en text-xs text-slate-500 tracking-wider">
            &copy; {new Date().getFullYear()} Tachibanadou Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
