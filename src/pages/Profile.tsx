import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // lucide-react が必要です

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto px-4 py-10 text-center">
      {/* パピラくん画像 */}
      <img
        src="/logo.png"
        alt="パピラくんの写真"
        className="mx-auto mb-6 w-40 h-40 object-cover rounded-full shadow-xl ring-4 ring-blue-300"
      />

      {/* 名前 */}
      <h2 className="text-3xl font-bold mb-4">パピラくん</h2>

      {/* トグルボタン */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm mb-6 transition duration-200"
      >
        {open ? "プロフィールを閉じる" : "プロフィールを見る"}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {/* 折りたたみ本文（アニメーション付き） */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        } text-gray-700 text-sm text-left space-y-4`}
      >
        <p>
          パピラくんは請求書作成アプリのすみっこにいる
          <br />ちょっと不思議な見習い妖精です。
        </p>
        <p>
          普段は数字をそろえたり、PDFをキレイに並べたりしながら
          <br />
          「いつか自分でシステムを作ってみたい」と夢見て毎日ちょっとずつ勉強中。
        </p>
        <p>
          ReactやSpring Bootを手探りで触りながら
          <br />
          ブログに覚えたことを書いたり、バグでへこんだり…そんな日々を送っています。
        </p>
        <p>
          バグと戦いながらも
          <br />
          「誰かの仕事がちょっとラクになるように」
          <br />
          静かに画面のすみっこでがんばっています。
        </p>
        <p>
          見た目はふわっとしてるけど意外とまじめ。
          <br />
          がんばりすぎない改善がパピラくんのモットーです。
        </p>
      </div>
    </div>
  );
};

export default Profile;