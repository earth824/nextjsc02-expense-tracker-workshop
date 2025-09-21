import TransactionFormLoader from '@/components/transaction/transaction-form-loader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Transaction'
};

type EditTransactionPageProps = {
  params: Promise<{ transactionId: string }>;
};

export default async function EditTransactionPage({
  params
}: EditTransactionPageProps) {
  const { transactionId } = await params;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Edit transaction</CardTitle>
        <CardDescription>
          Edit your form to update your transaction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionFormLoader id={transactionId} mode="edit" />
      </CardContent>
    </Card>
  );
}
