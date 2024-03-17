import { ICard } from "@/types/Cards";
import { FC } from "react";
import Card from "./Card";

interface CardsProps {
  cardElements: ICard[];
}

const Cards: FC<CardsProps> = ({ cardElements }) => {
  return (
    <div className="flex flex-row justify-evenly mt-12 flex-wrap items-center">
      {cardElements.map((cardEl, index) => {
        return <Card key={index} card={cardEl} />;
      })}
    </div>
  );
};

export default Cards;
