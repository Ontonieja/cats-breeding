import SectionWrapper from "../Wrappers/SectionWrappers";
import Image from "next/image";
import camera from "@/public/camera.png";
import { FacebookIcon, InstagramIcon } from "../Icons/Icons";
const Gallery = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center max-container max-sm:flex-col max-sm:items-start">
        <div className="max-w-prose">
          <h2 className="text-4xl font-madimi">Galeria </h2>
          <p className="mt-4 text-lg">
            Z dumą prezentujemy naszą galerię, w której znajdziesz
            najpiękniejsze zdjęcia naszych wyjątkowych kotów.
            <span className="max-sm:hidden">
              Odkryj ich urocze minki, elegancję i charakter, który sprawia, że
              są one niezwykłymi towarzyszami życia.
            </span>
          </p>
          <div className="flex gap-4 max-sm:gap-2 items-center mt-4 ">
            <p className=" text-lg font-semibold mr-2">Zaobserwuj nas:</p>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
          </div>
        </div>
        <Image
          src={camera}
          height={180}
          alt="Różowy aparat "
          className="max-sm:w-[150px] max-sm:-order-1"
        />
      </div>
      <div className="max-container grid grid-cols-4 auto-rows-[200px] gap-4 my-10 ">
        <div className="bg-neutral-100 border-2 rounded-xl p-2 ">Kokot</div>
        <div className="bg-neutral-100 border-2 rounded-xl p-2 sm:row-span-2 sm:col-span-2 ">
          Kokot
        </div>
        <div className="bg-neutral-100 border-2 rounded-xl p-2 ">Kokot</div>
        <div className="bg-neutral-100 border-2 rounded-xl p-2 ">Kokot</div>
        <div className="bg-neutral-100 border-2 rounded-xl p-2 ">Kokot</div>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;
