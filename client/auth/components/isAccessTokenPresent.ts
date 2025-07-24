import { NextResponse, NextRequest } from 'next/server';
import {
  ACCESS_TOKEN_COOKIE_NAME,
  SIGN_IN_ROUTE,
} from '@/client/auth/components';

export function checkAuthOrRedirect(request: NextRequest): NextResponse | null {
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME);

  if (!accessToken) {
    return NextResponse.redirect(new URL(SIGN_IN_ROUTE, request.url));
  }

  return null;
}
