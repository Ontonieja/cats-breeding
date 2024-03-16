import Image from 'next/image';
import Cards from '../Cards/Cards';
import { mainPageMenuCards } from '@/constants/CardsElements';
import SectionWrapper from '../Wrappers/SectionWrappers';
import catsYoga from '@/public/cats-yoga.png';

const Cats = () => {
  return (
    <SectionWrapper>
      <div className='flex justify-between items-center'>
        <div className='max-w-prose'>
          <h2 className='text-5xl font-madimi'>Nasze koty</h2>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            temporibus praesentium dolore laborum optio asperiores sed alias
            reiciendis vitae debitis.
          </p>
        </div>
        <Image
          src={catsYoga}
          height={180}
          alt='Kobieta z kotem uprawiajaca yoge'
        />
      </div>

      <Cards cardElements={mainPageMenuCards} />
    </SectionWrapper>
  );
};

export default Cats;
