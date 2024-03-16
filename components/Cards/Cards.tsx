import { ICard } from '@/types/Cards';
import { FC } from 'react';
import Card from './Card';

interface CardsProps {
  cardElements: ICard[];
}

const Cards: FC<CardsProps> = ({ cardElements }) => {
  return (
    <div className='flex sm:flex-row justify-evenly mt-16 flex-wrap flex-col'>
      {cardElements.map((cardEl, index) => {
        return <Card key={index} card={cardEl} />;
      })}
    </div>
  );
};

export default Cards;
