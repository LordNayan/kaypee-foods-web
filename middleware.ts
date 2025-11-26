import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for the MAINTENANCE_MODE environment variable
  if (process.env.MAINTENANCE_MODE === 'true') {
    // Allow access to the maintenance page itself
    if (request.nextUrl.pathname === '/maintenance.html') {
      return NextResponse.next();
    }
    // Redirect all other requests to the maintenance page
    return NextResponse.redirect(new URL('/maintenance.html', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next|favicon.ico|images|maintenance.html).*)',
};
