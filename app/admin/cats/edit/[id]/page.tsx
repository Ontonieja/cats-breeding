'use client';
import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Cat, CatPhoto } from '@prisma/client';
import { catSex, catSexOptions } from '@/constants/catSex';
import { DeleteIcon } from '@/components/Icons/Icons';
import { getCat, updateCat } from '@/db/src/services/catsData';
import { SelectField } from '@/components/Base/Select/Select';
import { createSlug } from '@/db/src/helpers/createSlug';
import DragAndDropFiles from '@/utils/DragAndDropFiles';
import { useCallback } from 'react';
import uploadFileUrl from '@/helpers/uploadFileUrl';
import Image from 'next/image';
import {
  createGalleryImage,
  deleteGalleryImage,
  getGalleryImages,
} from '@/db/src/services/galleryData';
import { deleteFile } from '@/services/firebase/storage';
import { CatGallery } from '@prisma/client';
import {
  createCatPhotos,
  deleteCatPhoto,
  getCatPhotos,
  updateCatPrimary,
} from '@/db/src/services/catPhotosData';
interface CatFormValues {
  name: string;
  genderGroup: string;
  description: string;
  birthday: string;
  color: string;
  blood: string;
  father: string;
  Mother: string;
}
const imageTypes: string[] = ['image/jpeg', 'image/png'];
const EditCat: FC = () => {
  const [images, setImages] = useState<CatPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  const [cat, setCat] = useState<Cat | null>(null);
  const [formValues, setFormValues] = useState<CatFormValues>({
    name: '',
    genderGroup: 'Kocury',
    description: '',
    birthday: '',
    color: '',
    blood: '',
    father: '',
    Mother: '',
  });

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchCat = async () => {
      if (typeof id === 'string') {
        const fetchedCat = await getCat(Number(id));

        const catInfo = {
          ...fetchedCat,
          genderGroup: catSex[fetchedCat?.genderGroup || 'Kocury'],
        } as Cat;

        setCat(catInfo);
        setFormValues({
          name: catInfo?.name || '',
          genderGroup: catInfo?.genderGroup || 'Kocury',
          description: catInfo?.description || '',
          birthday: catInfo?.birthday || '',
          color: catInfo?.color || '',
          blood: catInfo?.blood || '',
          father: catInfo?.father || '',
          Mother: catInfo?.Mother || '',
        });
      }
    };

    fetchCat();
  }, [id]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCatPhotoChange = useCallback(
    async (file: File) => {
      try {
        const fileUrl = await uploadFileUrl(file);
        if (!cat?.id) return;
        await createCatPhotos({
          Cat: { connect: { id: cat.id } },
          photo: fileUrl,
          primary: false,
        });
      } catch (error) {
        console.error('Error reading file:', error);
      }
      console.log('File uploaded successfully');
    },
    [cat?.id],
  );

  const handleSetCatPrimary = async (idToPrimary: number) => {
    return await updateCatPrimary(idToPrimary);
  };
  const handleCatPhotoDelete = async (
    idToDelete: number,
    urlToDelete: string,
  ) => {
    try {
      await deleteFile(urlToDelete);
      await deleteCatPhoto(idToDelete);
      setImages(images.filter(({ id }) => id !== idToDelete));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      const images = await getCatPhotos(Number(id));
      setImages(images);
      setLoading(false);
    };

    fetchImages();

    console.log('fetchuje zdjęcia');
  }, [id]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (cat) {
      await updateCat(cat.id, {
        ...formValues,
        genderGroup: catSexOptions[formValues.genderGroup] || 'MALE',
        slug: createSlug(formValues.name),
      });
      router.push('/admin/cats/1');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 bg-white p-10 rounded shadow-md"
    >
      <h2 className="mb-6 text-[24px]">Dodaj kota</h2>
      <div className="mb-5">
        <label className="block text-gray-700">Imię:</label>
        <input
          title="name"
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Grupa:</label>
        <SelectField
          name="genderGroup"
          value={formValues.genderGroup}
          options={['Kocury', 'Kotki', 'Kocięta']}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
          title="genderGroup"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Data urodzin:</label>
        <input
          title="birthday"
          type="date"
          name="birthday"
          value={formValues.birthday}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Kolor:</label>
        <input
          title="color"
          type="text"
          name="color"
          value={formValues.color}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Grupa krwi:</label>
        <input
          title="blood"
          type="text"
          name="blood"
          value={formValues.blood}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Ojciec:</label>
        <input
          title="father"
          type="text"
          name="father"
          value={formValues.father}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700">Matka:</label>
        <input
          title="Mother"
          type="text"
          name="Mother"
          value={formValues.Mother}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>

      <div className="mb-5">
        <label className="block text-gray-700">Opis:</label>
        <textarea
          title="description"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border-2 border-gray-300 rounded"
        />
      </div>
      <div className="mb-5">
        <h3 className="my-6 text-[24px]">Dodaj 2 główne zdjecia </h3>
        {!loading && images.length < 2 && (
          <DragAndDropFiles
            onChange={handleCatPhotoChange}
            formats={imageTypes}
          />
        )}
        <div className="flex mb-4">
          {images.map(({ id, photo }) => (
            <div
              key={id}
              className="relative w-[25%] mt-4 h-small group m-photo-gap grow"
            >
              <Image
                src={photo}
                alt={`Gallery image ${id}`}
                fill
                sizes="100%"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-50 flex items-center justify-center"></div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                <div
                  className="bg-white rounded-full p-4 text-xl hover:text-coral-red cursor-pointer"
                  onClick={() => handleCatPhotoDelete(id, photo)}
                >
                  <DeleteIcon className="w-icon-medium h-icon-medium" />
                </div>
                <div
                  className="bg-white rounded-full p-4 text-xl hover:text-coral-red cursor-pointer"
                  onClick={() => handleSetCatPrimary(id)}
                >
                  <div>Ustaw główne</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <h3 className="my-6 text-[24px]">Dodaj zdjęcia do galerii kota </h3>

        <DragAndDropFiles
          onChange={handleCatPhotoChange}
          formats={imageTypes}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default EditCat;
