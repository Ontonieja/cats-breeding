import Image from 'next/image';
import Cards from '../Cards/Cards';
import { mainPageMenuCards } from '@/constants/CardsElements';
import SectionWrapper from '../Wrappers/SectionWrappers';

const Cats = () => {
  return (
    <SectionWrapper>
      <div>
        <h2 className='text-5xl'>Nasze koty</h2>
        <Image />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        temporibus praesentium dolore laborum optio asperiores sed alias
        reiciendis vitae debitis.
      </p>
      <Cards cardElements={mainPageMenuCards} />
    </SectionWrapper>
  );
};

export default Cats;
