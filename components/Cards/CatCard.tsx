import { FC } from 'react';
import Button from '../Base/Button/Button';
import Image from 'next/image';
import demoCat from '@/public/cat1.jpg';
import { Cat } from '@prisma/client';
import Link from 'next/link';
import { db } from '@/db';

interface CatCardProps {
  cat: Cat;
  gender: string;
  href: string;
  bgColor: string;
}

const CatCard: FC<CatCardProps> = async ({ gender, cat, href, bgColor }) => {
  const catPrimary = await db.catPhoto.findFirst({
    where: {
      catId: cat.id,
      primary: true,
    },
  });
  return (
    <Link key={cat.id} href={`${href}/${cat.slug}`}>
      <div
        className={`flex max-sm:flex-col ${bgColor}  p-6 rounded-xl sm:h-[242px] w-full box-border shadow-xl duration-500 hover:-translate-y-1`}
      >
        <Image
          alt={cat.name || 'kot'}
          src={catPrimary?.photo || demoCat}
          className="max-sm:self-center sm:max-w-[220px] object-cover rounded-xl"
          width={220}
          height={194}
        ></Image>

        <div className="flex flex-col h-full w-full sm:px-8">
          <h3 className="text-3xl font-madimi max-sm:mt-2">{cat.name}</h3>
          <p className="line-clamp-3">{cat.description}</p>
          <div className="mt-auto max-sm:w-full max-sm:mt-4">
            <Button type="button" buttonStyle="whiteBlue">
              Zobacz
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
