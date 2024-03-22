import Image from "next/image";
import { FC } from "react";
import { ICard } from "@/types/Cards";
import { ChevronCircle } from "../Icons/Icons";
interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  const {
    title,
    description,
    img,
    alt,
    cardContainerClasses,
    navContainerClasses,
  } = card;
  const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div
      className={`relative flex flex-col items-center py-8 px-6 max-w-[240px] rounded-[48px] shadow-card ${cardContainerClasses} mb-12 cursor-pointer`}
    >
      <div className="size-[140px] flex items-center">
        <Image src={img} alt={alt || description} />
      </div>
      <h3 className="font-medium text-2xl py-4 mt-4">{titleCapitalized}</h3>
      <p className="mb-4">{description}</p>
      <div
        className={`justify-center items-center flex absolute bottom-[-6%] p-3 border-2 ${navContainerClasses} rounded-full bg-white cursor-pointer  `}
      >
        <ChevronCircle />
      </div>
    </div>
  );
};

export default Card;
