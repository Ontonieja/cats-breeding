import About from '@/components/About/About';
import Cats from '@/components/Cats/Cats';
import Hero from '@/components/Hero/Hero';
import { FC } from 'react';
import GallerySection from '@/components/Gallery/GallerySection';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Cats />
      <About />
      <GallerySection />
    </>
  );
};

export default HomePage;
