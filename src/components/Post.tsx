import ReactMarkdown from 'react-markdown';
import type { Post as PostType } from '../utils/markdown';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="text-gray-500 mb-4">{post.date}</div>
        {post.description && (
          <p className="text-xl text-gray-600">{post.description}</p>
        )}
      </header>
      <div className="markdown">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
} 