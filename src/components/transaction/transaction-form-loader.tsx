import TransactionForm from '@/components/transaction/transaction-form';
import { TRANSACTION_TYPE } from '@/constants/transaction.constant';
import { fetchCategoryByType } from '@/lib/datas/transaction.data';

export default async function TransactionFormLoader() {
  const [incomes, expenses] = await Promise.all([
    fetchCategoryByType(TRANSACTION_TYPE.INCOME),
    fetchCategoryByType(TRANSACTION_TYPE.EXPENSE)
  ]);

  return <TransactionForm incomes={incomes} expenses={expenses} />;
}
