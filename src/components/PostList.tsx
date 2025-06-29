import { Link } from 'react-router-dom';
import type { Post } from '../utils/markdown';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            <Link to={`/post/${post.slug}`} className="hover:text-blue-600">
              {post.title}
            </Link>
          </h2>
          <div className="text-sm text-gray-500 mb-3">{post.date}</div>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <Link
            to={`/post/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
} 