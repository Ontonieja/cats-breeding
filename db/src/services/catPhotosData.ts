'use server';

import { CatPhoto, Prisma, PrismaClient } from '@prisma/client';
import { revalidatePaths } from '@/helpers/revalidatePaths';

const prisma = new PrismaClient();

export async function getCatPhotos(catId: number) {
  return prisma.catPhoto.findMany({
    where: {
      catId: catId,
      catGallery: { none: {} },
    },
  });
}
export async function getCatGalleryPhotos(catId: number) {
  return prisma.catPhoto.findMany({
    where: {
      catGallery: { some: { catId } },
    },
  });
}
export async function getCatLinegaeDocument(catId: number) {
  return prisma.catDocument.findFirst({
    where: {
      catId: catId,
      lineage: { not: null },
    },
  });
}

export async function getCatPkdDocument(catId: number) {
  return prisma.catDocument.findFirst({
    where: {
      catId: catId,
      pkd: { not: null },
    },
  });
}
export async function deleteCatDocument(id: number | undefined) {
  return prisma.catDocument.delete({
    where: { id },
  });
}
export async function deleteCatPhoto(id: number): Promise<CatPhoto> {
  return prisma.catPhoto.delete({ where: { id } });
}

export async function createCatPhotos(
  data: Prisma.CatPhotoCreateInput,
): Promise<CatPhoto> {
  return prisma.catPhoto.create({ data });
}
export async function createCatDocument(data: Prisma.CatDocumentCreateInput) {
  const result = prisma.catDocument.create({ data });
  return result;
}

export const updateCatPrimary = async (id: number, catId: number) => {
  await prisma.catPhoto.updateMany({
    where: { catId },
    data: {
      primary: false,
    },
  });

  await prisma.catPhoto.updateMany({
    where: { id },
    data: {
      primary: true,
    },
  });

  await revalidatePaths(['/kotki', '/kocury', '/kocieta']);
};
