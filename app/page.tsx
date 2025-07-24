import { setlists } from "@/lib/data"
import { SetlistCard } from "@/components/setlist-card"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm py-4 px-4">
        <h1 className="text-2xl font-bold text-center">Setlists</h1>
      </header>
      <div className="flex-1 p-4 space-y-4 overflow-auto">
        {setlists.map((setlist) => (
          <SetlistCard key={setlist.id} date={setlist.date} href={`/setlist/${setlist.id}`} />
        ))}
      </div>
    </main>
  )
}
