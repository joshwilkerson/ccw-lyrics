import { getCollection } from 'astro:content'

export type Song = {
  title: string
  lyrics: string
}

export type Setlist = {
  id: string
  date: string
  songs: Song[]
}

// Helper to get songs by slugs
async function getSongsBySlug(slugs: string[]): Promise<Song[]> {
  const allSongs = await getCollection('songs')

  return slugs.map((slug) => {
    const song = allSongs.find((s) => s.slug === slug)
    if (!song) throw new Error(`Song not found: ${slug}`)

    return {
      title: song.data.title,
      lyrics: song.body,
    }
  })
}

export async function getSetlists(): Promise<Setlist[]> {
  return [
    {
      id: '2026-03-25',
      date: 'March 25, 2025',
      songs: await getSongsBySlug([
        'who-else',
        'firm-foundation',
        'make-room',
        'ten-thousand-reasons',
        'holy-forever',
      ]),
    },
    {
      id: '2025-10-16',
      date: 'October 16, 2025',
      songs: await getSongsBySlug([
        'living-hope',
        'goodness-of-god',
        'the-lord-will-provide',
        'amazing-grace-my-chains-are-gone',
        'yes-i-will',
      ]),
    },
    {
      id: '2025-08-27',
      date: 'August 27, 2025',
      songs: await getSongsBySlug([
        'great-are-you-lord',
        'praise-yahweh',
        'rest-on-us',
        'ten-thousand-reasons',
        'battle-belongs',
      ]),
    },
    {
      id: '2025-07-24',
      date: 'July 24, 2025',
      songs: await getSongsBySlug(['goodness-of-god', 'trust-in-god', 'make-room', 'holy-forever']),
    },
  ]
}

// For backwards compatibility, export setlists as a top-level await
export const setlists = await getSetlists()
