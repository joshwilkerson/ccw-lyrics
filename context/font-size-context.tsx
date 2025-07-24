"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type FontSizeLevel = "sm" | "md" | "lg"

interface FontSizeContextType {
  fontSizeLevel: FontSizeLevel
  setFontSizeLevel: (level: FontSizeLevel) => void
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined)

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSizeLevel, setFontSizeLevel] = useState<FontSizeLevel>("md")

  useEffect(() => {
    const storedFontSize = localStorage.getItem("fontSizeLevel") as FontSizeLevel
    if (storedFontSize && ["sm", "md", "lg"].includes(storedFontSize)) {
      setFontSizeLevel(storedFontSize)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("fontSizeLevel", fontSizeLevel)
  }, [fontSizeLevel])

  return <FontSizeContext.Provider value={{ fontSizeLevel, setFontSizeLevel }}>{children}</FontSizeContext.Provider>
}

export function useFontSize() {
  const context = useContext(FontSizeContext)
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider")
  }
  return context
}
