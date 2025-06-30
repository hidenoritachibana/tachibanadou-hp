import { useParams } from "react-router-dom";
import { posts } from "../data/posts.tsx";
import { Link } from "react-router-dom";

export default function CategoryList() {
  const { name } = useParams();
  const filtered = posts.filter((p) => p.category === name);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{name} の記事一覧</h1>
      {filtered.length === 0 ? (
        <p>該当記事がありません。</p>
      ) : (
        filtered.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="block bg-white rounded shadow p-4 mb-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </Link>
        ))
      )}
    </div>
  );
}