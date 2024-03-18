'use server';
import { PrismaClient, Cat, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

interface PaginationOptions {
  take?: number;
  skip?: number;
}

export async function createCat(data: Prisma.CatCreateInput): Promise<Cat> {
  return prisma.cat.create({ data });
}

export async function getCats(options?: PaginationOptions): Promise<Cat[]> {
  return prisma.cat.findMany({
    take: options?.take,
    skip: options?.skip,
  });
}

export async function getCat(id: number): Promise<Cat | null> {
  return prisma.cat.findFirst({ where: { id } });
}

export async function countCats() {
  return await prisma.cat.count();
}

export async function updateCat(
  id: number,
  data: Prisma.CatUpdateInput
): Promise<Cat> {
  return prisma.cat.update({
    where: { id },
    data,
  });
}

export async function deleteCat(id: number): Promise<Cat> {
  return prisma.cat.delete({ where: { id } });
}
