import { describe, it, expect } from 'vitest';
import { parseMarkdown, getAllPosts, getPostBySlug } from './markdown';

describe('markdown utils', () => {
  it('should parse markdown with frontmatter', () => {
    const markdown = `---
title: Test Post
date: 2024-01-01
description: Test description
slug: test-post
---

# Test Content
This is test content.`;

    const result = parseMarkdown(markdown);
    
    expect(result.title).toBe('Test Post');
    expect(result.description).toBe('Test description');
    expect(result.slug).toBe('test-post');
    expect(result.content).toContain('# Test Content');
  });

  it('should return all posts', () => {
    const posts = getAllPosts();
    expect(posts).toHaveLength(2);
    // Posts are sorted by date descending (newest first)
    expect(posts[0].title).toBe('Getting Started'); // 2024-01-02 (newer)
    expect(posts[1].title).toBe('Hello World');     // 2024-01-01 (older)
  });

  it('should find post by slug', () => {
    const post = getPostBySlug('hello-world');
    expect(post).toBeDefined();
    expect(post?.title).toBe('Hello World');
  });

  it('should return undefined for non-existent slug', () => {
    const post = getPostBySlug('non-existent');
    expect(post).toBeUndefined();
  });
}); 