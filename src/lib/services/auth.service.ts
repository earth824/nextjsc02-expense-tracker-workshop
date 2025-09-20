import { AUTH_METHOD, AUTH_PROVIDER } from '@/constants/auth.constant';
import prisma from '@/lib/prisma';
import { SignUpFormInput } from '@/types/auth.type';
import * as bcrypt from 'bcrypt';

async function signUpWithCredentials(
  data: SignUpFormInput
): Promise<void | { email: string }> {
  const existUser = await prisma.user.findUnique({
    where: { email: data.email }
  });
  if (existUser) {
    return { email: 'Email already in use' };
  }
  data.password = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({ data });
  await prisma.account.create({
    data: {
      userId: user.id,
      provider: AUTH_PROVIDER.CREDENTIALS,
      type: AUTH_METHOD.CREDENTIALS,
      providerAccountId: user.id
    }
  });
}

export { signUpWithCredentials };
