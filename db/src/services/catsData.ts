'use server';
import { PrismaClient, Cat, Prisma } from '@prisma/client';
import { revalidatePaths } from '@/helpers/revalidatePaths';

const prisma = new PrismaClient();

interface PaginationOptions {
  take?: number;
  skip?: number;
}

export async function createCat(data: Prisma.CatCreateInput): Promise<Cat> {
  const newCat = prisma.cat.create({ data });

  await revalidatePaths(['/kotki', '/kocury', '/kocieta']);

  return newCat;
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
  data: Prisma.CatUpdateInput,
): Promise<Cat> {
  const updatedCat = prisma.cat.update({
    where: { id },
    data,
  });

  await revalidatePaths(['/kotki', '/kocury', '/kocieta']);

  return updatedCat;
}

export async function deleteCat(id: number): Promise<Cat> {
  const deletedCat = prisma.cat.delete({ where: { id } });

  await revalidatePaths(['/kotki', '/kocury', '/kocieta']);

  return deletedCat;
}

export async function findMaleCats() {
  return await prisma.cat.findMany({
    where: { genderGroup: 'MALE' },
  });
}
