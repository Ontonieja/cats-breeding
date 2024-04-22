'use client';
import {
  createGalleryImage,
  deleteGalleryImage,
  getGalleryImages,
} from '@/db/src/services/galleryData';
import { GalleryImage } from '@prisma/client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import DragAndDropFiles from '@/utils/DragAndDropFiles';
import { deleteFile } from '@/services/firebase/storage';
import readFileAsDataURL from '@/db/src/helpers/readFileAsDataURL';
import uploadFileUrl from '@/helpers/uploadFileUrl';
import { DeleteIcon } from '@/components/Icons/Icons';

const fileTypes: string[] = ['image/jpeg', 'image/png'];

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChange = useCallback(async (file: File) => {
    try {
      const fileUrl = await uploadFileUrl(file);
      await createGalleryImage({ url: fileUrl });
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }, []);

  const handleDelete = async (idToDelete: number, urlToDelete: string) => {
    try {
      await deleteFile(urlToDelete);
      await deleteGalleryImage(idToDelete);
      setImages(images.filter(({ id }) => id !== idToDelete));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getGalleryImages();
      setImages(images);
      setLoading(false);
    };

    fetchImages();
  }, [handleChange]);

  return (
    <div>
      <h3 className="mb-6 text-[24px]">Zdjęcia w galerii</h3>
      <div className="flex flex-wrap my-4">
        {images.map(({ id, url }) => (
          <div
            key={id}
            className="relative w-[25%] h-small group m-photo-gap grow"
          >
            <Image
              src={url}
              alt={`Gallery image ${id}`}
              fill
              sizes="100%"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-50 flex items-center justify-center"></div>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
              <div
                className="bg-white rounded-full p-4 text-xl hover:text-coral-red cursor-pointer"
                onClick={() => handleDelete(id, url)}
              >
                <DeleteIcon className="w-icon-medium h-icon-medium" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!loading && images.length < 5 && images && (
        <>
          <h3 className="my-6 text-[24px]">Dodaj zdjęcie do galerii</h3>

          <DragAndDropFiles onChange={handleChange} formats={fileTypes} />
        </>
      )}
    </div>
  );
};

export default Gallery;
