import About from "@/components/About/About";
import Cats from "@/components/Cats/Cats";
import Hero from "@/components/Hero/Hero";
import { FC } from "react";
import Gallery from "@/components/Gallery/Gallery";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Cats />
      <About />
      <Gallery />
    </>
  );
};

export default HomePage;
