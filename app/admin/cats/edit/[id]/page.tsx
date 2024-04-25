'use client';
import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Cat, CatDocument, CatPhoto } from '@prisma/client';
import { catSex, catSexOptions } from '@/constants/catSex';
import { DeleteIcon } from '@/components/Icons/Icons';
import { getCat, updateCat } from '@/db/src/services/catsData';
import { SelectField } from '@/components/Base/Select/Select';
import { createSlug } from '@/db/src/helpers/createSlug';
import DragAndDropFiles from '@/utils/DragAndDropFiles';
import { useCallback } from 'react';
import uploadFileUrl from '@/helpers/uploadFileUrl';
import Image from 'next/image';
import Link from 'next/link';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { deleteFile } from '@/services/firebase/storage';
import {
  createCatPhotos,
  deleteCatPhoto,
  getCatPhotos,
  updateCatPrimary,
  getCatGalleryPhotos,
  createCatDocument,
  getCatLinegaeDocument,
  getCatPkdDocument,
  deleteCatDocument,
} from '@/db/src/services/catPhotosData';
import Button from '@/components/Base/Button/Button';
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
const documentTypes: string[] = ['image/jpeg', 'image/png', 'application/pdf'];
const EditCat: FC = () => {
  const [images, setImages] = useState<CatPhoto[]>([]);
  const [galleryImages, setGalleryImages] = useState<CatPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [lineage, setlineage] = useState<CatDocument>();
  const [pkd, setPkd] = useState<CatDocument>();
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
      Notify.success('Dodano pomyślnie, aby zobaczyć odśwież strone');
    },
    [cat?.id],
  );

  const handleCatGalleryPhotoChange = useCallback(
    async (file: File) => {
      try {
        const fileUrl = await uploadFileUrl(file);
        if (!cat?.id) return;
        await createCatPhotos({
          photo: fileUrl,
          primary: false,
          Cat: { connect: { id: cat.id } },
          catGallery: {
            create: {
              Cat: { connect: { id: cat.id } },
            },
          },
        });
      } catch (error) {
        console.error('Error reading file:', error);
      }
      Notify.success('Dodano pomyślnie, aby zobaczyć odśwież strone');
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
      setGalleryImages(galleryImages.filter(({ id }) => id !== idToDelete));
    } catch (error) {
      console.error('Error deleting file:', error);
    }
    Notify.success('Usunięto pomyślnie');
  };

  const handleLineagePhotoChange = useCallback(
    async (file: File) => {
      try {
        const fileUrl = await uploadFileUrl(file);
        if (!cat?.id) return;
        await createCatDocument({
          Cat: { connect: { id: cat.id } },
          lineage: fileUrl,
        });
      } catch (error) {
        console.error('Error reading file:', error);
      }
      Notify.success('Dodano pomyślnie, aby zobaczyć odśwież strone');
    },
    [cat?.id],
  );

  const handlePkdPhotoChange = useCallback(
    async (file: File) => {
      try {
        const fileUrl = await uploadFileUrl(file);
        if (!cat?.id) return;
        await createCatDocument({
          Cat: { connect: { id: cat.id } },
          pkd: fileUrl,
        });
      } catch (error) {
        console.error('Error reading file:', error);
      }

      Notify.success('Dodano pomyślnie, aby zobaczyć odśwież strone');
    },
    [cat?.id],
  );
  const handleDocumentDelete = async (idToDelete: number | undefined) => {
    await deleteCatDocument(idToDelete);
    Notify.success('Usunięto pomyślnie, aby zobaczyć odśwież strone');
  };

  useEffect(() => {
    const fetchImages = async () => {
      console.log('fetchuje');
      const images = await getCatPhotos(Number(id));
      const galleryImages = await getCatGalleryPhotos(Number(id));
      const lineage = await getCatLinegaeDocument(Number(id));
      const pkd = await getCatPkdDocument(Number(id));
      if (lineage !== null) {
        setlineage(lineage);
      }
      if (pkd !== null) {
        setPkd(pkd);
      }
      setImages(images);
      setGalleryImages(galleryImages);
      setLoading(false);
    };

    fetchImages();
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
        <div className="flex  mb-4">
          {images.map(({ id, photo }) => (
            <div
              key={id}
              className="relative w-[50%] mt-4 h-small group m-photo-gap grow"
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

      <h3 className="my-6 text-[24px]">Dodaj zdjęcia do galerii kota </h3>
      {!loading && galleryImages.length < 6 && (
        <DragAndDropFiles
          onChange={handleCatGalleryPhotoChange}
          formats={imageTypes}
        />
      )}
      <div className="flex mb-4 flex-wrap">
        {galleryImages.map(({ id, photo }) => (
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
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="my-6 text-[24px]">Dodaj rodowów </h3>
        {!loading && !lineage && (
          <DragAndDropFiles
            onChange={handleLineagePhotoChange}
            formats={documentTypes}
          />
        )}

        <Link href={lineage?.lineage || ''}>{lineage?.lineage}</Link>
        {!loading && lineage && (
          <Button
            buttonStyle="delete"
            onClick={() => handleDocumentDelete(lineage?.id)}
            className="mt-4"
          >
            Usuń rodowód
          </Button>
        )}
      </div>
      <div className="flex flex-col mb-8">
        <h3 className="my-6 text-[24px]">Dodaj PKD </h3>
        {!loading && !pkd && (
          <DragAndDropFiles
            onChange={handlePkdPhotoChange}
            formats={documentTypes}
          />
        )}

        <Link href={pkd?.pkd || ''}>{pkd?.pkd}</Link>
        {!loading && pkd && (
          <Button
            buttonStyle="delete"
            onClick={() => handleDocumentDelete(pkd?.id)}
            className="mt-4"
          >
            Usuń PKD
          </Button>
        )}
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
