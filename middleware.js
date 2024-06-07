import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'


export default withAuth(
    function middleware(req) {
        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'teacher') {
            return NextResponse.redirect(new URL('/', req.url))
        }
    }
)

export const config = { matcher: ["/admin/:path*", "/rooms"] }
