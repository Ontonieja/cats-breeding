import { StaticImageData } from 'next/image';

export interface ICard {
  title: string;
  description: string;
  img: StaticImageData;
  alt?: string;
  cardContainerClasses: string;
  navContainerClasses: string;
  href: string;
}
