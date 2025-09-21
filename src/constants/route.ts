export const ROUTE = {
  HOME: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  TRANSACTION: '/transaction',
  CREATE_TRANSACTION: '/transaction/create'
} as const;

export const PROTECTED_ROUTE: RegExp[] = [/\/transaction\/?.*/] as const;
export const GUEST_ONLY_ROUTE: RegExp[] = [/\/signin/, /\/signup/] as const;
