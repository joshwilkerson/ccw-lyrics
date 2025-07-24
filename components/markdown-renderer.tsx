"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useFontSize } from "@/context/font-size-context"
import { cn } from "@/lib/utils"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { fontSizeLevel } = useFontSize()

  const baseTextClass = {
    sm: "text-base", // ~16px
    md: "text-lg", // ~18px
    lg: "text-xl", // ~20px
  }[fontSizeLevel]

  const headingClass = {
    sm: "text-xl font-bold mb-2 mt-4",
    md: "text-2xl font-bold mb-2 mt-4",
    lg: "text-3xl font-bold mb-2 mt-4",
  }[fontSizeLevel]

  const paragraphClass = cn(baseTextClass, "leading-relaxed mb-2")

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className={cn(headingClass, "text-center")} {...props} />,
          h2: ({ node, ...props }) => <h2 className={cn(headingClass, "text-left")} {...props} />,
          p: ({ node, ...props }) => <p className={paragraphClass} {...props} />,
          strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
