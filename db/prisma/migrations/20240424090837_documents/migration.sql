/*
  Warnings:

  - You are about to drop the column `document` on the `CatDocument` table. All the data in the column will be lost.
  - Added the required column `lineage` to the `CatDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pkd` to the `CatDocument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CatDocument" DROP COLUMN "document",
ADD COLUMN     "lineage" TEXT NOT NULL,
ADD COLUMN     "pkd" TEXT NOT NULL;
