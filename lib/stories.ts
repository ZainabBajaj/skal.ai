import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type StoryAccent = 'blue' | 'cyan' | 'teal';

export interface StoryFrontmatter {
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  accent: StoryAccent;
  publishedDate: string;
  featured?: boolean;
  pullQuote?: string;
}

export interface StoryMeta extends StoryFrontmatter {
  slug: string;
}

export interface Story extends StoryMeta {
  content: string;
}

const storiesDirectory = path.join(process.cwd(), 'content', 'stories');

export function getAllStorySlugs(): string[] {
  if (!fs.existsSync(storiesDirectory)) return [];
  return fs
    .readdirSync(storiesDirectory)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/, ''));
}

export function getStoryBySlug(slug: string): Story | null {
  const mdxPath = path.join(storiesDirectory, `${slug}.mdx`);
  const mdPath = path.join(storiesDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;
  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as StoryFrontmatter),
  };
}

export function getAllStories(): StoryMeta[] {
  return getAllStorySlugs()
    .map((slug) => {
      const story = getStoryBySlug(slug);
      if (!story) return null;
      const { content: _content, ...meta } = story;
      return meta;
    })
    .filter((s): s is StoryMeta => s !== null)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}
