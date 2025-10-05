// Import markdown files
import goodnessOfGod from "../../songs/goodness-of-god.md?raw"
import trustInGod from "../../songs/trust-in-god.md?raw"
import makeRoom from "../../songs/make-room.md?raw"
import holyForever from "../../songs/holy-forever.md?raw"
import greatAreYouLord from "../../songs/great-are-you-lord.md?raw"
import restOnUs from "../../songs/rest-on-us.md?raw"
import praiseYahweh from "../../songs/praise-yahweh.md?raw"
import tenThousandReasons from "../../songs/ten-thousand-reasons.md?raw"
import battleBelongs from "../../songs/battle-belongs.md?raw"

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
