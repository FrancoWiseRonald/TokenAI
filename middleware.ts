import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyTOTP } from './utils/twoFactor'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value
  const twoFactorToken = request.headers.get('X-2FA-Token')

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // In a real application, you'd verify the session and get the user's 2FA secret
    const userTwoFactorSecret = 'USER_SECRET_HERE'

    if (!twoFactorToken || !verifyTOTP(twoFactorToken, userTwoFactorSecret)) {
      return NextResponse.redirect(new URL('/2fa', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}

