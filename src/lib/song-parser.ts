import { Song } from './data'

export function parseSong(markdownContent: string): Song {
  // Simple frontmatter parser (no dependencies needed)
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdownContent.match(frontmatterRegex);

  let title = 'Untitled';
  let lyrics = markdownContent;

  if (match) {
    const frontmatter = match[1];
    lyrics = match[2];

    // Extract title from frontmatter
    const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) {
      title = titleMatch[1];
    }
  }

  return {
    title,
    lyrics: lyrics.trim()
  }
}
