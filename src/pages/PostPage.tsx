import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Post from '../components/Post';
import { getPostBySlug } from '../utils/markdown';
import { trackPostView } from '../utils/analytics';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  // Track post view when component mounts
  useEffect(() => {
    if (post) {
      trackPostView(post.title, slug!);
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to Posts
      </Link>
      <Post post={post} />
    </div>
  );
} 