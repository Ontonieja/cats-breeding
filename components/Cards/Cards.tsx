import { ICard } from '@/types/Cards';
import Image from 'next/image';
import { FC } from 'react';
import Card from './Card';

interface CardsProps {
  cardElements: ICard[];
}

const Cards: FC<CardsProps> = ({ cardElements }) => {
  return cardElements.map((cardEl, index) => {
    return <Card key={index} card={cardEl} />;
  });
};

export default Cards;
