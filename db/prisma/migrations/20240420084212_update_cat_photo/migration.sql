/*
  Warnings:

  - You are about to drop the column `Photo` on the `CatPhoto` table. All the data in the column will be lost.
  - Added the required column `photo` to the `CatPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CatPhoto" DROP COLUMN "Photo",
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "primary" BOOLEAN;

-- CreateTable
CREATE TABLE "CatGallery" (
    "id" SERIAL NOT NULL,
    "catId" INTEGER NOT NULL,
    "photoId" INTEGER NOT NULL,

    CONSTRAINT "CatGallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CatGallery_photoId_key" ON "CatGallery"("photoId");

-- AddForeignKey
ALTER TABLE "CatGallery" ADD CONSTRAINT "CatGallery_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatGallery" ADD CONSTRAINT "CatGallery_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "CatPhoto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
