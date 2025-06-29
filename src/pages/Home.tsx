import PostList from '../components/PostList';
import { getAllPosts } from '../utils/markdown';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h1>
      <PostList posts={posts} />
    </div>
  );
} 