import { db } from '@/db';

import { FC } from 'react';
import CatCard from '../Cards/CatCard';
import { TCatGender } from '@/types/Cats';

interface CatCardProps {
  gender?: TCatGender;
}
const CatsList: FC<CatCardProps> = async ({ gender }) => {
  const catsGender = gender || 'MALE';
  const cats = await db.cat.findMany({
    where: { genderGroup: catsGender },
  });

  return (
    <div className="padding-y max-container grid sm:grid-cols-1 md:grid-cols-2 w-full gap-4">
      {cats.map((cat) => {
        return <CatCard gender={catsGender} cat={cat} key={cat.id} />;
      })}
    </div>
  );
};

export default CatsList;
