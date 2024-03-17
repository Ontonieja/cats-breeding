'use client';
import { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Cat, Gender } from '@prisma/client';
import { getCat, updateCat } from '@/db/src/services/catsData';
import { SelectField } from '@/components/Base/Select/Select';

interface CatFormValues {
  name: string;
  gender: Gender;
  about: string;
  slug: string;
  description: string;
}

const EditCat: FC = () => {
  const [cat, setCat] = useState<Cat | null>(null);
  const [formValues, setFormValues] = useState<CatFormValues>({
    name: '',
    gender: 'MALE',
    about: '',
    slug: '',
    description: '',
  });

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchCat = async () => {
      if (typeof id === 'string') {
        const fetchedCat = await getCat(Number(id));
        setCat(fetchedCat);
        setFormValues({
          name: fetchedCat?.name || '',
          gender: fetchedCat?.gender || 'MALE',
          about: fetchedCat?.about || '',
          slug: fetchedCat?.slug || '',
          description: fetchedCat?.description || '',
        });
      }
    };

    fetchCat();
  }, [id]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (cat) {
      await updateCat(cat.id, formValues);
      router.push('/admin/cats/1');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-xl mx-auto mt-10 bg-white p-10 rounded shadow-md'
    >
      <div className='mb-5'>
        <label className='block text-gray-700'>Name:</label>
        <input
          type='text'
          name='name'
          value={formValues.name}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>Gender:</label>
        <SelectField
          name='gender'
          value={formValues.gender}
          options={['MALE', 'FEMALE', 'KID']}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
          title='gender'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>About:</label>
        <input
          type='text'
          name='about'
          value={formValues.about}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>Slug:</label>
        <input
          type='text'
          name='slug'
          value={formValues.slug}
          onChange={handleChange}
          className='mt-1 p-2 w-full border-2 border-gray-300 rounded'
        />
      </div>
      <div className='mb-5'>
        <label className='block text-gray-700'>Description:</label>
        <input
          type='text'
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
