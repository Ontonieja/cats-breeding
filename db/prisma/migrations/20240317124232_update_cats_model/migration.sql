-- AlterTable
ALTER TABLE "Cat" ALTER COLUMN "slug" DROP NOT NULL,
ALTER COLUMN "about" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
