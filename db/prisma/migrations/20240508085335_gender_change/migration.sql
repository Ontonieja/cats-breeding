/*
  Warnings:

  - The `gender` column on the `Cat` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT;
