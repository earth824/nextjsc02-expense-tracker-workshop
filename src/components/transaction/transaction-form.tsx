'use client';

import DatePicker from '@/components/shared/date-picker';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { ROUTE } from '@/constants/route';
import { TRANSACTION_TYPE } from '@/constants/transaction.constant';
import { Category } from '@/generated/prisma';
import { createTransaction } from '@/lib/actions/transaction.action';
import { transactionFormSchema } from '@/lib/schemas/transaction.schema';
import { TransactionFormInput } from '@/types/transaction.type';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type TransactionFormProps = {
  incomes: Category[];
  expenses: Category[];
};

export default function TransactionForm({
  incomes,
  expenses
}: TransactionFormProps) {
  const form = useForm<TransactionFormInput>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      amount: '',
      date: new Date(),
      payee: '',
      type: TRANSACTION_TYPE.EXPENSE,
      categoryId: expenses[0].id
    }
  });

  const selectedType = form.watch('type');

  useEffect(() => {
    if (selectedType === TRANSACTION_TYPE.EXPENSE) {
      form.setValue('categoryId', expenses[0].id);
    } else {
      form.setValue('categoryId', incomes[0].id);
    }
  }, [selectedType]);

  const categories =
    selectedType === TRANSACTION_TYPE.EXPENSE ? expenses : incomes;

  const onSubmit: SubmitHandler<TransactionFormInput> = async data => {
    await createTransaction(data);
    toast.success('Created transaction successfully');
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-2 gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="text-xs">Transaction Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  className="flex gap-0"
                >
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem
                        value={TRANSACTION_TYPE.EXPENSE}
                        className="hidden"
                      />
                    </FormControl>
                    <FormLabel>
                      <Button
                        asChild
                        className="w-24 rounded-r-none border-r-0 cursor-pointer"
                        variant={
                          field.value === TRANSACTION_TYPE.EXPENSE
                            ? 'default'
                            : 'outline'
                        }
                      >
                        <span>Expense</span>
                      </Button>
                    </FormLabel>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <RadioGroupItem
                        value={TRANSACTION_TYPE.INCOME}
                        className="hidden"
                      />
                    </FormControl>
                    <FormLabel>
                      <Button
                        asChild
                        className="w-24 rounded-l-none cursor-pointer"
                        variant={
                          field.value === TRANSACTION_TYPE.INCOME
                            ? 'default'
                            : 'outline'
                        }
                      >
                        <span>Income</span>
                      </Button>
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="payee"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Payee</FormLabel>
              <FormControl>
                <Input placeholder="Enter a payee" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Transaction Date</FormLabel>
              <DatePicker field={field} placeholder="Pick a transaction date" />
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map(el => (
                    <SelectItem key={el.id} value={el.id}>
                      {el.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Amount</FormLabel>
              <FormControl>
                <Input placeholder="Enter an amount" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="col-span-2 flex gap-6">
          <Button className="w-30">Create</Button>
          <Button variant="outline" className="w-30" asChild>
            <Link href={ROUTE.TRANSACTION}>Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
