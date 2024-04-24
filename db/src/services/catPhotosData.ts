'use server';

import { CatPhoto, Prisma, PrismaClient } from '@prisma/client';
import { connect } from 'http2';

interface CreateCatPhotosProps {}

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

export async function createCatPhotos(data: Prisma.CatPhotoCreateInput) {
  return prisma.catPhoto.create({ data });
}
export async function createCatDocument(data: Prisma.CatDocumentCreateInput) {
  return prisma.catDocument.create({ data });
}
// export async function updateCatDocument(data) {
//   return prisma.catDocument.update({
//     where:
//   })
//   );
// }

export const updateCatPrimary = async (catId: number) => {
  return await prisma.catPhoto.updateMany({
    where: { id: catId },
    data: {
      primary: true,
    },
  });
};
