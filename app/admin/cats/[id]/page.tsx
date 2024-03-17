'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Cat } from '@prisma/client';
import { createCat, getCats } from '@/db/src/services/catsData';

const Admin: FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState(1);
  const params = useParams();
  const resultsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    setPage(Number(params) || 1);
  }, [params]);

  useEffect(() => {
    const fetchCats = async () => {
      const cats = await getCats({
        take: resultsPerPage,
        skip: (page - 1) * resultsPerPage,
      });
      setCats(cats);
    };

    fetchCats();
  }, [page]);

  const handleCreateCat = async () => {
    const { id } = await createCat({
      slug: '',
      about: '',
      name: '',
      gender: 'MALE',
      description: '',
    });
    router.push(`/admin/cats/edit/${id}`);
  };

  return (
    <div>
      <button type='button' onClick={handleCreateCat}>
        Dodaj kota
      </button>
      {cats.map((cat) => (
        <Link key={cat.id} href={`/admin/cats/edit/${cat.id}`}>
          <h2>{cat.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Admin;
