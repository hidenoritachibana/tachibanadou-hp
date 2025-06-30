import { posts } from "../data/posts.tsx";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.tsx";
import Profile from "./Profile.tsx";

function generateArchives(posts: { date: string }[]) {
    const archiveMap: { [key: string]: number } = {};
    posts.forEach((post) => {
        const date = new Date(post.date);
        const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        archiveMap[key] = (archiveMap[key] || 0) + 1;
    });
    // ソートして返す（新しい順）
    return Object.entries(archiveMap).sort((a, b) => b[0].localeCompare(a[0]));
}

const archives = generateArchives(posts);

export default function Home() {
    return (
        <div>
            <Hero />
            <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* メイン記事リスト */}
                <div className="md:col-span-2 space-y-6">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/post/${post.id}`}
                            className="block bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                            <p className="text-gray-600">{post.excerpt}</p>
                        </Link>
                    ))}
                </div>

                {/* サイドバー */}
                <aside className="space-y-6">
                    {/* プロフィール 
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">プロフィール</h3>
                        <p className="text-sm text-gray-600">Webエンジニア。趣味はガジェット集めとブログ執筆。</p>
                    </div>
                     */}
                    {/* プロフィール */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">プロフィール</h3>
                        <Profile />
                    </div>
                    {/* カテゴリ */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">カテゴリ</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><Link to="/category/Programming" className="hover:underline">Programming</Link></li>
                            <li><Link to="/category/Database" className="hover:underline">Database</Link></li>
                            <li><Link to="/category/Java" className="hover:underline">Java</Link></li>
                            <li><Link to="/category/JavaScript" className="hover:underline">JavaScript</Link></li>
                            <li><Link to="/category/React" className="hover:underline">React</Link></li>
                            <li><Link to="/category/Tailwindcss" className="hover:underline">Tailwind CSS</Link></li>
                        </ul>
                    </div>
                    {/* アーカイブ */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold mb-2">アーカイブ</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            {archives.map(([key, count]) => {
                                const [year, month] = key.split("-");
                                return (
                                    <li key={key}>
                                        <Link to={`/archive/${year}/${month}`} className="hover:underline">
                                            {year}年{month}月（{count}件）
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}