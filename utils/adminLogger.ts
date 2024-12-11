export interface AdminAction {
  adminId: string
  action: string
  details: string
  timestamp: Date
}

export async function logAdminAction(adminId: string, action: string, details: string) {
  const logEntry: AdminAction = {
    adminId,
    action,
    details,
    timestamp: new Date(),
  }

  // In a real application, you'd send this to your backend API
  console.log('Admin action logged:', logEntry)

  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 100))

  return logEntry
}

