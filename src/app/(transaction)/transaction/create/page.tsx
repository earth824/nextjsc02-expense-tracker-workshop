import TransactionForm from '@/components/transaction/transaction-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Transaction'
};

export default function CreateTransactionPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create transaction</CardTitle>
        <CardDescription>
          Fill out the form to create a new transaction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionForm />
      </CardContent>
    </Card>
  );
}
