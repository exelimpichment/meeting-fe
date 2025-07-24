import { checkAuthOrRedirect } from '@/client/auth/components';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const redirectResponse = checkAuthOrRedirect(request);

  if (redirectResponse) {
    return redirectResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/conversations/:path*', '/'],
};
