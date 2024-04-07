'use server';

import { PrismaClient, GalleryImage, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return prisma.galleryImage.findMany();
}

export async function createGalleryImage(
  data: Prisma.GalleryImageCreateInput,
): Promise<GalleryImage> {
  return prisma.galleryImage.create({ data });
}

export async function deleteGalleryImage(id: number): Promise<GalleryImage> {
  return prisma.galleryImage.delete({ where: { id } });
}
