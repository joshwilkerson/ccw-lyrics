// Import song files directly
import amazingGrace from "../songs/amazing-grace.md"
import howGreatThouArt from "../songs/how-great-thou-art.md"
import blessedAssurance from "../songs/blessed-assurance.md"
import whatAFriendWeHaveInJesus from "../songs/what-a-friend-we-have-in-jesus.md"
import greatIsThyFaithfulness from "../songs/great-is-thy-faithfulness.md"

export type Song = {
  id: string
  title: string
  lyrics: string // Markdown string
}

export type Setlist = {
  id: string
  date: string // e.g., "July 21, 2025"
  songs: Song[]
}

export const setlists: Setlist[] = [
  {
    id: "2025-07-21",
    date: "July 21, 2025",
    songs: [
      {
        id: "song-1",
        title: "Amazing Grace",
        lyrics: amazingGrace,
      },
      {
        id: "song-2",
        title: "How Great Thou Art",
        lyrics: howGreatThouArt,
      },
    ],
  },
  {
    id: "2025-07-28",
    date: "July 28, 2025",
    songs: [
      {
        id: "song-3",
        title: "Blessed Assurance",
        lyrics: blessedAssurance,
      },
      {
        id: "song-4",
        title: "What a Friend We Have in Jesus",
        lyrics: whatAFriendWeHaveInJesus,
      },
    ],
  },
  {
    id: "2025-08-04",
    date: "August 04, 2025",
    songs: [
      {
        id: "song-5",
        title: "Great Is Thy Faithfulness",
        lyrics: greatIsThyFaithfulness,
      },
    ],
  },
]
