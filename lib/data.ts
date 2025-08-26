import goodnessOfGod from "../songs/goodness-of-god.md"
import trustInGod from "../songs/trust-in-god.md"
import makeRoom from "../songs/make-room.md"
import holyForever from "../songs/holy-forever.md"
import greatAreYouLord from "../songs/great-are-you-lord.md"
import restOnUs from "../songs/rest-on-us.md"
import praiseYahweh from "../songs/praise-yahweh.md"
import tenThousandReasons from "../songs/ten-thousand-reasons.md"
import battleBelongs from "../songs/battle-belongs.md"

import { parseSong } from "./song-parser"

export type Song = {
  title: string
  lyrics: string
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
    songs: [goodnessOfGod, trustInGod, makeRoom, holyForever].map(parseSong),
  },
  {
    id: "2025-08-27",
    date: "August 27, 2025",
    songs: [
      greatAreYouLord,
      praiseYahweh,
      restOnUs,
      tenThousandReasons,
      battleBelongs,
    ].map(parseSong),
  },
]
