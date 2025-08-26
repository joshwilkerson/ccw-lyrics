"use client"

import type { Song } from "@/lib/data"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ThemeToggle } from "@/components/theme-toggle"
import { FontSizeControls } from "@/components/font-size-controls"
import { Button } from "@/components/ui/button"
import { ChevronLeft, BookOpen, Music } from "lucide-react"
import { useRouter } from "next/navigation"
import { setlists } from "@/lib/data"
import { useState, use } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface SetlistClientProps {
  params: Promise<{
    date: string
  }>
}

// Component to display all songs in a continuous scroll
function AllSongsContinuousViewer({ songs }: { songs: Song[] }) {
  return (
    <div className="space-y-8">
      {songs.map((song, index) => (
        <div key={index} className="pb-4">
          <MarkdownRenderer content={song.lyrics} />
        </div>
      ))}
    </div>
  )
}

export function SetlistClient({ params }: SetlistClientProps) {
  const router = useRouter()
  const resolvedParams = use(params)
  const setlist = setlists.find((s) => s.id === resolvedParams.date)
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
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            viewMode === "all" ? setViewMode("list") : router.push("/")
          }
          aria-label={
            viewMode === "all" ? "Back to song list" : "Go back to setlists"
          }
          className="flex items-center gap-1"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="text-sm">Back</span>
        </Button>

        <div className="flex items-center gap-2">
          {viewMode === "all" && <FontSizeControls />}
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        {viewMode === "list" ? (
          <div className="space-y-4">
            <Card
              className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
              onClick={() => setViewMode("all")}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    View All Songs
                  </h2>
                </div>
              </CardContent>
            </Card>
            {setlist.songs.map((song, index) => (
              <Link
                key={index}
                href={`/setlist/${setlist.id}/${index}`}
                className="block"
              >
                <Card className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Music className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {song.title}
                      </h2>
                    </div>
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
