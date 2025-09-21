import { transactionFormSchema } from '@/lib/schemas/transaction.schema';
import z from 'zod';

export type TransactionFormInput = z.infer<typeof transactionFormSchema>;
