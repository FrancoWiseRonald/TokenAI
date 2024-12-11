import { useRole } from '../contexts/RoleContext'

type AllowedRoles = 'admin' | 'moderator' | 'viewer'

export function withRoleCheck(WrappedComponent: React.ComponentType, allowedRoles: AllowedRoles[]) {
  return function WithRoleCheck(props: any) {
    const { role } = useRole()

    if (!allowedRoles.includes(role)) {
      return <div>You do not have permission to view this page.</div>
    }

    return <WrappedComponent {...props} />
  }
}

