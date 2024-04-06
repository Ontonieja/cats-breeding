'use client';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Cat } from '@prisma/client';
import {
  createCat,
  getCats,
  countCats,
  deleteCat,
} from '@/db/src/services/catsData';
import Button from '@/components/Base/Button/Button';
import { catSex } from '@/constants/catSex';

const Admin: FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [totalCats, setTotalCats] = useState(0);
  const [page, setPage] = useState(1);
  const params = useParams();
  const resultsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    setPage(Number(params.id) || 1);
  }, [params]);

  useEffect(() => {
    const fetchCats = async () => {
      const totalCats = await countCats();
      let currentPage = Number(params.id) || 1;
      const totalPages = Math.ceil(totalCats / resultsPerPage);

      if (currentPage > totalPages) {
        currentPage = totalPages;
      }

      // Ensure currentPage is at least 1
      currentPage = Math.max(currentPage, 1);

      const cats = await getCats({
        skip: (currentPage - 1) * resultsPerPage,
        take: resultsPerPage,
      });

      setCats(cats);
      setTotalCats(totalCats);
      setPage(currentPage);
    };

    fetchCats();
  }, [params, router]);

  const handleCreateCat = async () => {
    const { id } = await createCat({
      name: '',
      genderGroup: 'MALE',
      description: '',
    });
    router.push(`/admin/cats/edit/${id}`);
  };

  const totalPages = Math.ceil(totalCats / resultsPerPage);

  return (
    <div className="container p-10 m-auto">
      <Button buttonStyle="primary" type="button" onClick={handleCreateCat}>
        Dodaj kota
      </Button>
      <table className="w-full text-left border-collapse mt-4 leading-normal table-fixed">
        <thead>
          <tr className="border-b border-grey-light">
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark">
              Imię
            </th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark">
              Grupa
            </th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark">
              Opis
            </th>
          </tr>
        </thead>
        <tbody>
          {cats.map(
            ({ name, genderGroup, id, description, birthday }, index) => (
              <tr
                key={id}
                className={`border-b border-grey-light ${
                  index % 2 === 0 ? 'bg-gray-100' : ''
                }`}
              >
                <td className="py-4 px-6">{name}</td>
                <td className="py-4 px-6">{catSex[genderGroup || 'MALE']}</td>
                <td className="py-4 px-6 line-clamp-2 n">{description}</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex gap-4">
                    <Button
                      buttonStyle="primary"
                      type="button"
                      onClick={() => router.push(`/admin/cats/edit/${id}`)}
                    >
                      Edytuj
                    </Button>
                    <Button
                      buttonStyle="delete"
                      type="button"
                      onClick={() => deleteCat(id)}
                    >
                      Usuń
                    </Button>
                  </div>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center pt-4">
        {page > 1 ? (
          <Link href={`/admin/cats/${page - 1}`}>Poprzednia</Link>
        ) : (
          <div></div>
        )}
        <div>
          strona {page} na {totalPages}
        </div>
        {page < totalPages ? (
          <Link href={`/admin/cats/${page + 1}`}>Następna</Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Admin;
