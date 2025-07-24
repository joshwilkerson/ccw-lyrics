import { SingleSongClient } from "./single-song-client"
import { setlists } from "@/lib/data"

export function generateStaticParams() {
  const staticParams = []
  
  for (const setlist of setlists) {
    for (let songIndex = 0; songIndex < setlist.songs.length; songIndex++) {
      staticParams.push({
        date: setlist.id,
        songId: songIndex.toString(),
      })
    }
  }
  
  return staticParams
}


interface SingleSongPageProps {
  params: Promise<{
    date: string
    songId: string
  }>
}

export default function SingleSongPage({ params }: SingleSongPageProps) {
  return <SingleSongClient params={params} />
}
