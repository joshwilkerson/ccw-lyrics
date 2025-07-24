import goodnessOfGodRaw from "../songs/goodness-of-god.md"
import trustInGodRaw from "../songs/trust-in-god.md"
import makeRoomRaw from "../songs/make-room.md"
import holyForeverRaw from "../songs/holy-forever.md"
import { parseSong } from "./song-parser"

export type Song = {
  title: string
  lyrics: string // Markdown string
}

export type Setlist = {
  id: string
  date: string
  songs: Song[]
}

export const setlists: Setlist[] = [
  {
    id: "2025-07-24",
    date: "July 24, 2025",
    songs: [
      goodnessOfGodRaw,
      trustInGodRaw,
      makeRoomRaw,
      holyForeverRaw,
    ].map(parseSong),
  },
]
