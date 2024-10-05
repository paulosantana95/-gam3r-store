import { products } from '@gstore/core';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.product.createMany({
    data: products.map((product) => ({ ...product, id: undefined })),
  });
}

seed();
