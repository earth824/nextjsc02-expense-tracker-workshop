'use server';

import { ROUTE } from '@/constants/route';
import { auth } from '@/lib/auth/auth';
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
    const { data, success } = transactionFormSchema.safeParse(input);
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
