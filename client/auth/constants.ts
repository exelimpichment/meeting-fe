export const AUTH_TYPES = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
} as const;

export type AuthType = (typeof AUTH_TYPES)[keyof typeof AUTH_TYPES];

export const ACCESS_TOKEN_COOKIE_NAME = 'access_token';
export const REFRESH_TOKEN_COOKIE_NAME = 'refresh_token';

export const SIGN_IN_ROUTE = '/auth/sign-in';
export const SIGN_UP_ROUTE = '/auth/sign-up';
