export const AUTH_TYPES = {
  SIGN_IN: 'sign-in',
  SIGN_UP: 'sign-up',
} as const;

export type AuthType = (typeof AUTH_TYPES)[keyof typeof AUTH_TYPES];
