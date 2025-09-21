import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    firstName?: string | null;
    lastName?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    firstName?: string | null;
    lastName?: string | null;
    id?: string;
  }
}
