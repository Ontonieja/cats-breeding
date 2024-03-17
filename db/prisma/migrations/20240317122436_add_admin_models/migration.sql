/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cover` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'KID');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatPhoto" (
    "id" SERIAL NOT NULL,
    "catId" INTEGER NOT NULL,
    "Photo" TEXT NOT NULL,

    CONSTRAINT "CatPhoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatDocument" (
    "id" SERIAL NOT NULL,
    "catId" INTEGER NOT NULL,
    "document" TEXT NOT NULL,

    CONSTRAINT "CatDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cat_slug_key" ON "Cat"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- AddForeignKey
ALTER TABLE "CatPhoto" ADD CONSTRAINT "CatPhoto_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatDocument" ADD CONSTRAINT "CatDocument_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
