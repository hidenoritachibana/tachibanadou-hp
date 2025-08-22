/**
 * パピラくん（怪獣）プロフィール画面コンポーネント（シンプル版）
 */
const Profile = () => (
    <div className="max-w-sm mx-auto px-4 py-10 text-center">

        <br />

        {/* 丸い写真 */}
        <img
            src="/logo.png" // ここはパピラくんの画像パスに差し替えてください
            alt="パピラくんの写真"
            className="mx-auto mb-6 w-40 h-40 object-cover rounded-full shadow-lg"
        />

        <br />

        {/* 名前 */}
        <h2 className="text-3xl font-bold mb-2">パピラくん</h2>

        <br />

        {/* 説明 */}
        <div className="text-gray-700 text-sm space-y-2">
            <p>パピラくんは請求書作成アプリのすみっこにいる<br />ちょっと不思議な見習い妖精です。</p>
            <br />
            <p>普段は数字をそろえたり<br />PDFをキレイに並べたりしながら<br />
                「いつか自分でシステムを作ってみたい」<br />と夢見て毎日ちょっとずつ勉強中。</p>
            <br />
            <p>ReactやSpring Bootを手探りで触りながら
                <br />ブログに覚えたことを書いたり<br />バグでへこんだり…そんな日々を送っています。</p>
            <br />
            <p>バグと戦いながらも<br />「誰かの仕事がちょっとラクになるように」<br />静かに画面のすみっこでがんばっています。</p>
            <br />
            <p>見た目はふわっとしてるけど意外とまじめ。<br />
                がんばりすぎない改善がパピラくんのモットーです。</p>
        </div>
    </div>
);

export default Profile;