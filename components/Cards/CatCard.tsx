import { FC } from 'react';
import Button from '../Base/Button/Button';
import Image from 'next/image';
import demoCat from '@/public/cat1.jpg';
import { Cat } from '@prisma/client';
import Link from 'next/link';

interface CatCardProps {
  cat: Cat;
  gender: string;
  href: string;
}

const CatCard: FC<CatCardProps> = ({ gender, cat, href }) => {
  return (
    <Link key={cat.id} href={`${href}/${cat.slug}`}>
      <div className="flex max-sm:flex-col bg-light-blue p-6 rounded-xl sm:h-[242px] w-full box-border shadow-xl duration-500 hover:-translate-y-1">
        <Image
          alt={cat.name || ''}
          src={demoCat}
          width={220}
          className="max-sm:self-center object-cover rounded-xl"
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
