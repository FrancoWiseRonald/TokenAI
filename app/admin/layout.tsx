import { ReactNode } from "react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { Home, Users, DollarSign, Settings } from 'lucide-react'
import { RoleProvider } from '../contexts/RoleContext'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated" || !session?.user?.role) {
    return <div>Access Denied</div>
  }

  return (
    <RoleProvider role={session.user.role}>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            <Link href="/admin" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
              <Home className="inline-block w-5 h-5 mr-2" />
              Dashboard
            </Link>
            {session.user.role === 'ADMIN' && (
              <Link href="/admin/users" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
                <Users className="inline-block w-5 h-5 mr-2" />
                Users
              </Link>
            )}
            <Link href="/admin/transactions" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
              <DollarSign className="inline-block w-5 h-5 mr-2" />
              Transactions
            </Link>
            {session.user.role === 'ADMIN' && (
              <Link href="/admin/settings" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
                <Settings className="inline-block w-5 h-5 mr-2" />
                Settings
              </Link>
            )}
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </RoleProvider>
  )
}

