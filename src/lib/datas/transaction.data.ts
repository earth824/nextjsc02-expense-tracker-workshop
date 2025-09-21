import { TRANSACTION_TYPE } from '@/constants/transaction.constant';
import prisma from '@/lib/prisma';

export async function fetchCategory() {
  return prisma.category.findMany({
    orderBy: [{ sequence: 'desc' }, { name: 'asc' }]
  });
}

export function fetchCategoryByType(
  type: (typeof TRANSACTION_TYPE)[keyof typeof TRANSACTION_TYPE]
) {
  return prisma.category.findMany({
    orderBy: [{ sequence: 'desc' }, { name: 'asc' }],
    where: { type }
  });
}
