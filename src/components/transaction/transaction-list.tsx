import TransactionItem from '@/components/transaction/transaction-item';
import { Button } from '@/components/ui/button';
import { ROUTE } from '@/constants/route';
import { fetchTransaction } from '@/lib/datas/transaction.data';
import { FilePlus2 } from 'lucide-react';
import Link from 'next/link';

export default async function TransactionList() {
  const transactions = await fetchTransaction();
  if (transactions.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <FilePlus2 className="w-24 h-24" />
        <h2 className="text-xl font-medium text-center">
          You haven&apos;t made any transactions or no transactions found with
          your current filter settings.
        </h2>
        <span className="text-muted-foreground">
          Add a new transaction or modify your filters to see more results.
        </span>
        <Button variant="outline" asChild>
          <Link href={ROUTE.CREATE_TRANSACTION}>Add Transaction</Link>
        </Button>
      </div>
    );

  return (
    <>
      <div>
        {transactions.map(el => (
          <TransactionItem key={el.id} {...el} />
        ))}
      </div>
      {/* <PaginationControl /> */}
    </>
  );
}
