import { SetlistClient } from "./setlist-client"
import { setlists } from "@/lib/data"

export function generateStaticParams() {
  return setlists.map((setlist) => ({
    date: setlist.id,
  }))
}


interface SetlistPageProps {
  params: Promise<{
    date: string
  }>
}

export default function SetlistPage({ params }: SetlistPageProps) {
  return <SetlistClient params={params} />
}
