import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts.tsx";
import { PostContentRenderer } from "../data/PostContentRenderer.tsx";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">記事が見つかりません。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-4">
      <article className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-8">

        {/* タイトル */}
        <h1 className="py-2 text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>

        {/* 日付 */}
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        {/* 本文 */}
        {Array.isArray(post.content) ? (
          <PostContentRenderer content={post.content} />
        ) : (
          <div className="whitespace-pre-line">{post.content}</div>
        )}
      </article>
    </div>
  );
}
