import SectionWrapper from "../Wrappers/SectionWrappers";
import Image from "next/image";
import camera from "@/public/camera.png";
import { InstagramIcon } from "../Icons/Icons";
const Gallery = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center max-container ">
        <div className="max-w-prose">
          <h2 className="text-4xl font-madimi">Galeria </h2>
          <p className="mt-4 text-lg">
            Z dumą prezentujemy naszą galerię, w której znajdziesz
            najpiękniejsze zdjęcia naszych wyjątkowych kotów. Odkryj ich urocze
            minki, elegancję i charakter, który sprawia, że są one niezwykłymi
            towarzyszami życia.
          </p>
          <div className="flex gap-4 items-center mt-4 ">
            <p className=" text-lg font-bold">Zaobserwuj nas</p>
            <InstagramIcon></InstagramIcon>
          </div>
        </div>
        <Image
          src={camera}
          height={180}
          alt="Kobieta z kotem uprawiajaca yoge"
          className="max-sm:hidden"
        />
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
