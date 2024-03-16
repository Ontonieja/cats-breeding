import Image from 'next/image';
import heroImg from 'public/hero1.png';
import CallToAction from './CallToAction';

const Hero = () => {
  return (
    <section className='flex items-center justify-between'>
      <div className='flex flex-col w-2/5'>
        <h1 className='text-5xl'>Discover the Joy of Pet Ownership</h1>
        <p className='py-10'>
          Celebrate pets with expert advice and passionate community. Join us
          now!
        </p>
        <CallToAction />
      </div>
      <div>
        <Image src={heroImg} width={720} alt='Kobieta trzymajaca kota' />
      </div>
    </section>
  );
};

export default Hero;
