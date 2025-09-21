import { GUEST_ONLY_ROUTE, PROTECTED_ROUTE, ROUTE } from '@/constants/route';
import NextAuth from 'next-auth';
import { NextResponse } from 'next/server';

const { auth } = NextAuth({
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const pathname = request.nextUrl.pathname;

      if (GUEST_ONLY_ROUTE.some(el => el.test(pathname)) && auth) {
        return NextResponse.redirect(new URL(ROUTE.TRANSACTION, request.url));
      }
      if (PROTECTED_ROUTE.some(el => el.test(pathname)) && !auth) {
        return false;
      }

      return true;
    }
  }
});

export const middleware = auth;

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
