import matter from 'gray-matter'
import { Song } from './data'

export function parseSong(markdownContent: string): Song {
  const { data, content } = matter(markdownContent)
  
  return {
    title: data.title || 'Untitled',
    lyrics: content.trim()
  }
}