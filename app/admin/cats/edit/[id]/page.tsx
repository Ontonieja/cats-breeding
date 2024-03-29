'use client';
import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Cat } from '@prisma/client';
import { catSex, catSexOptions } from '@/constants/catSex';
import { getCat, updateCat } from '@/db/src/services/catsData';
import { SelectField } from '@/components/Base/Select/Select';
import { createSlug } from '@/db/src/helpers/createSlug';

interface CatFormValues {
  name: string;
  genderGroup: string;
  description: string;
}

const EditCat: FC = () => {
  const [cat, setCat] = useState<Cat | null>(null);
  const [formValues, setFormValues] = useState<CatFormValues>({
    name: '',
    genderGroup: 'Kocury',
    description: '',
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
        });
      }
    };

    fetchCat();
  }, [id]);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

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
      className='max-w-xl mx-auto mt-10 bg-white p-10 rounded shadow-md'
    >
      <h2 className='mb-6 text-[24px]'>Dodaj kota</h2>
      <div className='mb-5'>
        <label className='block text-gray-700'>Imię:</label>
        <input
          title='name'
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>Grupa:</label>
        <SelectField
          name='genderGroup'
          value={formValues.genderGroup}
          options={['Kocury', 'Kotki', 'Kocięta']}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
          title='genderGroup'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>Opis:</label>
        <textarea
          title='description'
          name='description'
          value={formValues.description}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700'
      >
        Save
      </button>
    </form>
  );
};

export default EditCat;
