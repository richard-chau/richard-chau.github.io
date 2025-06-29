import matter from 'gray-matter';
import { format } from 'date-fns';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

function parseDate(date: string | Date | undefined | null): string {
  if (!date) return '';
  if (typeof date === 'string') {
    // Try parsing as ISO or YYYY-MM-DD
    const d = new Date(date);
    if (!isNaN(d.getTime())) {
      return format(d, 'MMMM dd, yyyy');
    }
    // Try parsing as UTC
    const d2 = new Date(date + 'T00:00:00Z');
    if (!isNaN(d2.getTime())) {
      return format(d2, 'MMMM dd, yyyy');
    }
    return date;
  }
  if (date instanceof Date && !isNaN(date.getTime())) {
    return format(date, 'MMMM dd, yyyy');
  }
  return '';
}

export function parseMarkdown(markdown: string): Post {
  const { data, content } = matter(markdown);
  return {
    slug: data.slug,
    title: data.title,
    date: parseDate(data.date),
    description: data.description,
    content,
  };
}

// Dynamically import all markdown files in src/posts
const postFiles = import.meta.glob('../../src/posts/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): Post[] {
  const posts: Post[] = [];
  for (const path in postFiles) {
    const markdown = postFiles[path] as string;
    const { data, content } = matter(markdown);
    posts.push({
      slug: data.slug,
      title: data.title,
      date: parseDate(data.date),
      description: data.description,
      content,
    });
  }
  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(post => post.slug === slug);
} 