"use client"

import type { Song } from "@/lib/data"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ThemeToggle } from "@/components/theme-toggle"
import { FontSizeControls } from "@/components/font-size-controls"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { setlists } from "@/lib/data"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface SetlistPageProps {
  params: {
    date: string
  }
}

// Component to display all songs in a continuous scroll
function AllSongsContinuousViewer({ songs }: { songs: Song[] }) {
  return (
    <div className="space-y-8">
      {songs.map((song) => (
        <div key={song.id} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">{song.title}</h2>
          <MarkdownRenderer content={song.lyrics} />
        </div>
      ))}
    </div>
  )
}

export default function SetlistPage({ params }: SetlistPageProps) {
  const router = useRouter()
  const setlist = setlists.find((s) => s.id === params.date)
  const [viewMode, setViewMode] = useState<"list" | "all">("list") // 'list' or 'all'

  if (!setlist) {
    // In a real app, you might want to redirect to a 404 page or home
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4">
        <h1 className="text-2xl font-bold mb-4">Setlist Not Found</h1>
        <Button onClick={() => router.push("/")}>Go Home</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm py-3 px-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => router.push("/")} aria-label="Go back to setlists">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold text-center flex-1">{setlist.date}</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setViewMode(viewMode === "list" ? "all" : "list")}
            className="text-sm"
          >
            {viewMode === "list" ? "View All" : "View List"}
          </Button>
          <FontSizeControls />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        {viewMode === "list" ? (
          <div className="space-y-4">
            {setlist.songs.map((song) => (
              <Link key={song.id} href={`/setlist/${setlist.id}/${song.id}`} className="block">
                <Card className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{song.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <AllSongsContinuousViewer songs={setlist.songs} />
        )}
      </main>
    </div>
  )
}
