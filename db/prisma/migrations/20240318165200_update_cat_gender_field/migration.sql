/*
  Warnings:

  - You are about to drop the column `gender` on the `Cat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cat" DROP COLUMN "gender",
ADD COLUMN     "genderGroup" "Gender";
