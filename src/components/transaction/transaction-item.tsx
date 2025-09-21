import TransactionItemAction from '@/components/transaction/transaction-action-item';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { TRANSACTION_TYPE } from '@/constants/transaction.constant';
import { Prisma, TransactionType } from '@/generated/prisma';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

type TransactionItemProps = {
  id: string;
  payee: string;
  date: Date;
  amount: Prisma.Decimal;
  category: {
    image: string | null;
    type: TransactionType;
  };
};

export default function TransactionItem({
  category: { image, type },
  payee,
  date,
  amount,
  id
}: TransactionItemProps) {
  return (
    <div className="flex justify-between items-center border not-last:border-b-0 p-3">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          <AvatarImage src={image as string} alt="category" />
        </Avatar>
        <div className="leading-tight">
          <h2 className="font-bold">{payee}</h2>
          <span className="text-xs text-muted-foreground">
            {format(date, 'd MMM yyyy')}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* <Badge>Expense</Badge> */}
        <span
          className={cn('w-30 text-right truncate', {
            'text-red-600': type === TRANSACTION_TYPE.EXPENSE,
            'text-green-600': type === TRANSACTION_TYPE.INCOME
          })}
        >
          &#3647; {amount.toFixed(2)}
        </span>
        <TransactionItemAction id={id} />
      </div>
    </div>
  );
}
