"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { withRoleCheck } from '@/components/withRoleCheck'
import { useRole } from '@/contexts/RoleContext'
import { logAdminAction } from '@/utils/adminLogger'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface User {
  id: string
  name: string
  email: string
  role: string
}

function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [newRole, setNewRole] = useState<string>('')
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { role } = useRole()
  const { data: session } = useSession()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (!response.ok) throw new Error('Failed to fetch users')
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError('Failed to fetch users. Please try again.')
    }
  }

  const handleEditRole = (user: User) => {
    setEditingUser(user)
    setNewRole(user.role)
  }

  const handleConfirmSave = async () => {
    if (editingUser && newRole) {
      try {
        const response = await fetch(`/api/users/${editingUser.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...editingUser, role: newRole }),
        })

        if (!response.ok) throw new Error('Failed to update user')

        await logAdminAction(session?.user?.id || 'unknown', 'EDIT_USER_ROLE', `Changed role for user ${editingUser.id} from ${editingUser.role} to ${newRole}`)
        
        setUsers(users.map(u =>
          u.id === editingUser.id ? { ...u, role: newRole } : u
        ))
        setEditingUser(null)
        setNewRole('')
        setIsConfirmOpen(false)
      } catch (err) {
        setError('Failed to update user role. Please try again.')
      }
    }
  }

  if (role !== 'ADMIN') {
    return <div>You do not have permission to view this page.</div>
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Management</h1>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => handleEditRole(user)}>
                      Edit Role
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit User Role</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="newRole" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          New Role
                        </label>
                        <Input
                          id="newRole"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={() => setIsConfirmOpen(true)}>
                        Save Changes
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Role Change</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to change the role for {editingUser?.name} to {newRole}?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
            <Button onClick={handleConfirmSave}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default withRoleCheck(UsersPage, ['ADMIN'])

