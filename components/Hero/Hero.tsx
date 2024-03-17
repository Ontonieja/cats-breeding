import Image from "next/image";
import heroImg from "public/hero1.png";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <section className="padding-x padding-t padding-b">
      <section className="flex items-center justify-between w-full max-container flex-col xl:flex-row">
        <div className="flex flex-col xl:w-3/5 w-full">
          <h1 className="text-8xl font-madimi leading-none max-md:text-[48px] ">
            Zakochaj się w Świecie Kotów z Naszą Hodowlą
          </h1>
          <p className="mt-6 mb-12 text-lg sm:max-w-xl">
            Odkryj wyjątkowy charakter naszych kotów i znajdź swojego futrzanego
            przyjaciela już dziś
          </p>
          <CallToAction />
        </div>
        <Image
          src={heroImg}
          width={820}
          alt="Kobieta trzymajaca kota"
          className="hidden xl:block"
        />
      </section>
    </section>
  );
};

export default Hero;
