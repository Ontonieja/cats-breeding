/*
  Warnings:

  - Made the column `description` on table `Cat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cat" ALTER COLUMN "description" SET NOT NULL;
