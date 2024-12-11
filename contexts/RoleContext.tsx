import React, { createContext, useContext, ReactNode } from 'react'

type Role = 'admin' | 'moderator' | 'viewer'

interface RoleContextType {
  role: Role
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function RoleProvider({ children, role }: { children: ReactNode; role: Role }) {
  return <RoleContext.Provider value={{ role }}>{children}</RoleContext.Provider>
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}

