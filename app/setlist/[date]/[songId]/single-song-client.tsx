"use client"

import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ThemeToggle } from "@/components/theme-toggle"
import { FontSizeControls } from "@/components/font-size-controls"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { use } from "react"
import { setlists } from "@/lib/data"

interface SingleSongClientProps {
  params: Promise<{
    date: string
    songId: string
  }>
}

export function SingleSongClient({ params }: SingleSongClientProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  const setlist = setlists.find((s) => s.id === resolvedParams.date)
  const songIndex = parseInt(resolvedParams.songId)
  const song = setlist?.songs[songIndex]

  if (!setlist || !song) {
    // In a real app, you might want to redirect to a 404 page or home
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">Song Not Found</h1>
        <Button onClick={() => router.push(`/setlist/${resolvedParams.date}`)}>Back to Setlist</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm py-3 px-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => router.push(`/setlist/${setlist.id}`)} 
          aria-label="Go back to setlist" 
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm">Back</span>
        </Button>
        <h1 className="text-lg font-semibold text-center flex-1">{setlist.date}</h1>
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