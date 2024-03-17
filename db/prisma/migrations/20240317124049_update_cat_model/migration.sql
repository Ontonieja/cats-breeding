/*
  Warnings:

  - Added the required column `description` to the `Cat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL;
