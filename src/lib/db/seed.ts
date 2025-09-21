import { categories } from '@/lib/db/data';
import prisma from '@/lib/prisma';

async function main() {
  await prisma.category.deleteMany();
  await prisma.category.createMany({ data: categories });
}

main()
  .then(async () => {
    console.log('DB seeded successfully');
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
