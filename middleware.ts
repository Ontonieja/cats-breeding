import { withAuth } from 'next-auth/middleware';
import { NextResponse, NextRequest } from 'next/server';

const { WHITELISTED_EMAILS } = process.env;

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (!token?.email) return false;

      if (
        (req.nextUrl.pathname.startsWith('/admin') && token === null) ||
        !WHITELISTED_EMAILS?.includes(token?.email)
      ) {
        return false;
      }
      return true;
    },
  },
});

export function middleware(request: NextRequest) {
  const urlPath = request.nextUrl.pathname;

  if (['/admin', '/admin/cats'].includes(urlPath)) {
    return NextResponse.redirect(new URL('/admin/cats/1', request.url));
  }

  return NextResponse.next();
}
