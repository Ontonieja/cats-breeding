import About from '@/components/About/About';
import Cats from '@/components/Cats/Cats';
import Hero from '@/components/Hero/Hero';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Cats />
      <About />
    </>
  );
};

export default HomePage;
