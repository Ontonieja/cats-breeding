import Image from 'next/image';
import heroImg from 'public/hero2.png';
import CallToAction from './CallToAction';

const Hero = () => {
  return (
    <section className="padding-x padding-t padding-b">
      <section className="flex items-center justify-between w-full max-container flex-col md:flex-row">
        <div className="flex flex-col xl:w-3/5 w-full">
          <h1 className="text-8xl font-madimi leading-[1.1] max-sm:leading-[60px] max-xl:text-[48px]">
            Zakochaj się w Świecie Kotów z Naszą Hodowlą
          </h1>
          <p className="mt-6 sm:mt-12 mb-12 text-xl sm:text-hero sm:max-w-xl">
            Odkryj wyjątkowy charakter naszych kotów i znajdź swojego futrzanego
            przyjaciela już dziś
          </p>
          <CallToAction />
        </div>
        <Image
          src={heroImg}
          width={520}
          alt="Kobieta trzymajaca kota"
          className=" max-md:hidden block justify-self-start self-center"
        />
      </section>
    </section>
  );
};

export default Hero;
