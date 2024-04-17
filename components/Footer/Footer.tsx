import { LinkedinIcon, PawLogo } from '../Icons/Icons';
import catsHead from '@/public/cat-head.png';
import Image from 'next/image';
import SectionWrapper from '../Wrappers/SectionWrappers';
const Footer = () => {
  return (
    <footer className="padding-t max-w-full relative">
      <div className="bg-[#434343] min-h-44 rounded-t-3xl flex items-center text-white justify-between sm:px-12 px-4 relative  max-sm:gap-16">
        <div className="flex text-white font-madimi max-sm:flex-1 items-center ">
          <PawLogo />

          <span className="text-xl  leading-none">
            Samo <br></br>Szczęście
          </span>
        </div>
        <div className="text-xl max-sm:text-sm">
          email: <b>samoszczescie@wp.pl</b> tel: <b>+48 535 534 030</b>
        </div>
        <div className="text-xl max-sm:text-sm max-sm:hidden">
          Warszawa <br />
          30-353 Wielickiego 11
        </div>
        <Image
          src={catsHead}
          alt="głowa kota"
          className="absolute left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10  "
        />
        <div className="absolute bottom-0 right-0 mb-2 sm:mr-10  mr-4 flex items-center max-sm:text-xs gap-2">
          @Maksymilian Rusnak 2024
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
