import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface SetlistCardProps {
  date: string
  href: string
}

export function SetlistCard({ date, href }: SetlistCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{date}</h2>
        </CardContent>
      </Card>
    </Link>
  )
}
