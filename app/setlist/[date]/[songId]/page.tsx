"use client"

import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ThemeToggle } from "@/components/theme-toggle"
import { FontSizeControls } from "@/components/font-size-controls"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { setlists } from "@/lib/data"

interface SingleSongPageProps {
  params: {
    date: string
    songId: string
  }
}

export default function SingleSongPage({ params }: SingleSongPageProps) {
  const router = useRouter()
  const setlist = setlists.find((s) => s.id === params.date)
  const song = setlist?.songs.find((s) => s.id === params.songId)

  if (!setlist || !song) {
    // In a real app, you might want to redirect to a 404 page or home
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">Song Not Found</h1>
        <Button onClick={() => router.push(`/setlist/${params.date}`)}>Back to Setlist</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm py-3 px-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.push(`/setlist/${setlist.id}`)}
          aria-label="Go back to setlist"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold text-center flex-1">{song.title}</h1>
        <div className="flex items-center gap-2">
          <FontSizeControls />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        <MarkdownRenderer content={song.lyrics} />
      </main>
    </div>
  )
}
