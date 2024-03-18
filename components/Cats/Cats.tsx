import Image from "next/image";
import Cards from "../Cards/Cards";
import { mainPageMenuCards } from "@/constants/CardsElements";
import SectionWrapper from "../Wrappers/SectionWrappers";
import catsYoga from "@/public/cats-yoga.png";

const Cats = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center max-container relative">
        <div className="max-w-prose">
          <h2 className="text-4xl font-madimi">Nasze koty</h2>
          <p className="mt-2 text-lg">
            Zapraszamy Cię do poznania naszych czworonożnych przyjaciół i
            znalezienia swojego idealnego towarzysza życia. Odkryj prawdziwą
            miłość kotów z naszą hodowlą
          </p>
        </div>
        <Image
          src={catsYoga}
          height={180}
          alt="Kobieta z kotem uprawiajaca yoge"
          className="max-sm:w-[150px] max-sm:self-start"
        />
      </div>

      <Cards cardElements={mainPageMenuCards} />
    </SectionWrapper>
  );
};

export default Cats;
