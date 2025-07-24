"use client"

import { Button } from "@/components/ui/button"
import { useFontSize } from "@/context/font-size-context"
import { Minus, Plus } from "lucide-react"

export function FontSizeControls() {
  const { fontSizeLevel, setFontSizeLevel } = useFontSize()

  const increaseFontSize = () => {
    if (fontSizeLevel === "sm") setFontSizeLevel("md")
    else if (fontSizeLevel === "md") setFontSizeLevel("lg")
  }

  const decreaseFontSize = () => {
    if (fontSizeLevel === "lg") setFontSizeLevel("md")
    else if (fontSizeLevel === "md") setFontSizeLevel("sm")
  }

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={decreaseFontSize}
        disabled={fontSizeLevel === "sm"}
        aria-label="Decrease font size"
      >
        <Minus className="h-5 w-5" />
        <span className="sr-only">Decrease font size</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={increaseFontSize}
        disabled={fontSizeLevel === "lg"}
        aria-label="Increase font size"
      >
        <Plus className="h-5 w-5" />
        <span className="sr-only">Increase font size</span>
      </Button>
    </div>
  )
}
