import SectionWrapper from '../Wrappers/SectionWrappers';
import Image from 'next/image';
import catAbout from '@/public/cat-about.png';
const About = () => {
  return (
    <SectionWrapper>
      <div className='flex justify-between items-center'>
        <Image
          src={catAbout}
          height={180}
          alt='Kobieta z kotem uprawiajaca yoge'
        />
        <div className='max-w-prose'>
          <h2 className='text-5xl font-madimi'>O nas </h2>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            temporibus praesentium dolore laborum optio asperiores sed alias
            reiciendis vitae debitis.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
