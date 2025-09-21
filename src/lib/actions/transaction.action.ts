'use server';

import { ROUTE } from '@/constants/route';
import { auth } from '@/lib/auth/auth';
import { fetchTransactionById } from '@/lib/datas/transaction.data';
import prisma from '@/lib/prisma';
import {
  transactionFormSchema,
  transactionFormSchemaExcludeTypeSchema
} from '@/lib/schemas/transaction.schema';
import { ActionResult } from '@/types/action-result.type';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTransaction(input: unknown): Promise<ActionResult> {
  try {
    const { data, success } =
      transactionFormSchemaExcludeTypeSchema.safeParse(input);
    if (!success) throw new Error('Validation Error');

    const session = await auth();
    console.log(session);
    if (!session || !session.user || !session.user.id)
      throw new Error('Session not found');

    await prisma.transaction.create({
      data: { ...data, userId: session.user.id }
    });
    revalidatePath(ROUTE.TRANSACTION);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
  redirect(ROUTE.TRANSACTION);
}

export async function deleteTransaction(id: string) {
  await prisma.transaction.delete({ where: { id } });
  revalidatePath(ROUTE.TRANSACTION);
}

export async function updateTransaction(
  id: string,
  input: unknown
): Promise<ActionResult> {
  try {
    const { data, success } =
      transactionFormSchemaExcludeTypeSchema.safeParse(input);
    if (!success) throw new Error('Validation Error');

    const session = await auth();

    if (!session || !session.user || !session.user.id)
      throw new Error('Session not found');

    const transaction = await fetchTransactionById(id);
    if (!transaction) throw new Error('Transaction with this id was not found');

    await prisma.transaction.update({
      data,
      where: { id }
    });
    revalidatePath(ROUTE.TRANSACTION);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong');
  }
  redirect(ROUTE.TRANSACTION);
}
