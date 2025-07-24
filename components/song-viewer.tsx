"use client"

import type { Song } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { ThemeToggle } from "@/components/theme-toggle"
import { FontSizeControls } from "@/components/font-size-controls"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface SongViewerProps {
  setlistDate: string
  songs: Song[]
}

export function SongViewer({ setlistDate, songs }: SongViewerProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-sm py-3 px-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => router.back()} aria-label="Go back">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold text-center flex-1">{setlistDate}</h1>
        <div className="flex items-center gap-2">
          <FontSizeControls />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 p-4 overflow-auto">
        <Accordion type="multiple" className="w-full">
          {songs.map((song) => (
            <AccordionItem key={song.id} value={song.id} className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="text-left text-lg font-medium py-3 px-2 hover:no-underline">
                {song.title}
              </AccordionTrigger>
              <AccordionContent className="px-2 pb-4">
                <MarkdownRenderer content={song.lyrics} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  )
}
