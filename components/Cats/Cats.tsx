import Image from 'next/image';
import Cards from '../Cards/Cards';
import { mainPageMenuCards } from '@/constants/CardsElements';
import SectionWrapper from '../Wrappers/SectionWrappers';
import catsYoga from '@/public/cats-yoga.png';
import Section from '../Sections/Section';

const Cats = () => {
  return (
    <SectionWrapper>
      <Section
        title="Nasze koty"
        image={catsYoga}
        imageAlt="Kobieta z kotem uprawiająca yoge"
      >
        <p>
          Zapraszamy Cię do poznania naszych czworonożnych przyjaciół i
          znalezienia swojego idealnego towarzysza życia. Odkryj prawdziwą
          miłość kotów z naszą hodowlą
        </p>
      </Section>
      <Cards cardElements={mainPageMenuCards} />
    </SectionWrapper>
  );
};

export default Cats;
