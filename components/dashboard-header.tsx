import Link from "next/link"
import { Home, User } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex space-x-4">
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button asChild>
          <Link href="/edit-profile">
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </Link>
        </Button>
      </div>
    </header>
  )
}

