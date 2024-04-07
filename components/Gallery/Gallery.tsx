import Image from 'next/image';
import { getGalleryImages } from '@/db/src/services/galleryData';

const Gallery = async () => {
  const catsImages = await getGalleryImages();

  return (
    <div className="sm:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 my-10 overflow-x-scroll sm:overflow-visible flex flex-nowrap sm:flex-wrap">
      {catsImages.map(({ url, id }, index) => {
        return (
          <div
            key={id}
            className={`h-full shadow-card w-full rounded-xl overflow-hidden max-sm:min-w-[350px] ${
              index === 2
                ? 'sm:row-start-1 sm:row-end-3 sm:col-start-2 sm:col-end-4'
                : ''
            }`}
          >
            <Image
              src={url}
              width={600}
              height={600}
              alt="kot"
              className="w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};
export default Gallery;
