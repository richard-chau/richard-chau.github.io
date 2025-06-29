import matter from 'gray-matter';
import { format } from 'date-fns';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

function parseDate(date: any): string {
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
    slug: data.slug || '',
    title: data.title || '',
    date: parseDate(data.date),
    description: data.description || '',
    content: content,
  };
}

export function getAllPosts(): Post[] {
  // In a real app, you'd import all markdown files
  // For now, we'll return sample posts
  return [
    {
      slug: 'hello-world',
      title: 'Hello World',
      date: 'January 1, 2024',
      description: 'Welcome to my blog',
      content: '# Hello World\n\nWelcome to my minimal blog!',
    },
    {
      slug: 'getting-started',
      title: 'Getting Started',
      date: 'January 2, 2024',
      description: 'How to get started with this blog',
      content: '# Getting Started\n\nThis is how you get started...',
    },
  ];
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find(post => post.slug === slug);
} 