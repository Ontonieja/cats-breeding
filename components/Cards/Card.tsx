import Image from 'next/image';
import { FC } from 'react';
import { ICard } from '@/types/Cards';

interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  const { title, description, imgUrl } = card;
  return (
    <div>
      <div>
        <Image />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
