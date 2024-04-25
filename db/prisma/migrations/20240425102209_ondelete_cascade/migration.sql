-- DropForeignKey
ALTER TABLE "CatDocument" DROP CONSTRAINT "CatDocument_catId_fkey";

-- DropForeignKey
ALTER TABLE "CatGallery" DROP CONSTRAINT "CatGallery_catId_fkey";

-- DropForeignKey
ALTER TABLE "CatPhoto" DROP CONSTRAINT "CatPhoto_catId_fkey";

-- AddForeignKey
ALTER TABLE "CatPhoto" ADD CONSTRAINT "CatPhoto_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatGallery" ADD CONSTRAINT "CatGallery_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatDocument" ADD CONSTRAINT "CatDocument_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Cat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
