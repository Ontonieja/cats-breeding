-- DropForeignKey
ALTER TABLE "CatGallery" DROP CONSTRAINT "CatGallery_photoId_fkey";

-- AddForeignKey
ALTER TABLE "CatGallery" ADD CONSTRAINT "CatGallery_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "CatPhoto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
