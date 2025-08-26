"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import { useFontSize } from "@/context/font-size-context"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { fontSizeLevel } = useFontSize()

  // Base font size multipliers for different font scale levels
  const fontSizeMultiplier = {
    sm: 1,    // 16px base
    md: 1.125, // 18px base (16px * 1.125)
    lg: 1.25,  // 20px base (16px * 1.25)
  }[fontSizeLevel]

  // Create dynamic style with CSS custom properties
  const dynamicStyle = {
    '--font-multiplier': fontSizeMultiplier,
    fontSize: `${fontSizeMultiplier}rem`,
  } as React.CSSProperties

  return (
    <div 
      className="markdown-content leading-relaxed" 
      style={dynamicStyle}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          h1: ({ ...props }) => (
            <h1 
              className="text-2xl font-bold mb-6 mt-6 pb-3 border-b border-gray-300 dark:border-gray-600 text-left" 
              style={{ fontSize: `${fontSizeMultiplier * 1.75}rem` }}
              {...props} 
            />
          ),
          h2: ({ ...props }) => (
            <h2 
              className="text-xl font-bold mb-3 mt-5 text-left" 
              style={{ fontSize: `${fontSizeMultiplier * 1.5}rem` }}
              {...props} 
            />
          ),
          h3: ({ ...props }) => (
            <h3 
              className="text-lg font-bold mb-2 mt-4 text-left" 
              style={{ fontSize: `${fontSizeMultiplier * 1.25}rem` }}
              {...props} 
            />
          ),
          h4: ({ ...props }) => (
            <h4 
              className="text-base font-bold mb-2 mt-3 text-left" 
              style={{ fontSize: `${fontSizeMultiplier * 1.125}rem` }}
              {...props} 
            />
          ),
          h5: ({ ...props }) => (
            <h5 
              className="text-base font-bold mb-2 mt-3 text-left" 
              style={{ fontSize: `${fontSizeMultiplier * 1.125}rem` }}
              {...props} 
            />
          ),
          h6: ({ ...props }) => (
            <h6 
              className="text-sm font-bold mb-2 mt-2 text-left" 
              style={{ fontSize: `${fontSizeMultiplier}rem` }}
              {...props} 
            />
          ),
          p: ({ ...props }) => (
            <p className="mb-3" {...props} />
          ),
          strong: ({ ...props }) => (
            <strong className="font-semibold" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside mb-3 ml-4" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside mb-3 ml-4" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="mb-1" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic mb-3" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
