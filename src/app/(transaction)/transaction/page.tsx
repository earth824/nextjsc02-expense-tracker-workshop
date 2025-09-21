import { ROUTE } from '@/constants/route';
import { auth } from '@/lib/auth/auth';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Transaction'
};

export default async function TransactionPage() {
  const session = await auth();
  if (!session) redirect(ROUTE.SIGN_IN);
  return <div>TransactionPage</div>;
}
