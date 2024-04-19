'use client';
import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { IoPaw } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

interface IconProviderProps {
  className?: string;
  children?: ReactNode;
}

export const RightArrow = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'coral-red',
        className: 'global-class-name text-coral-red text-xl ml-2',
      }}
    >
      <FaArrowCircleRight />
    </IconContext.Provider>
  );
};

export const PawLogo = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'coral-red',
        className:
          'global-class-name text-coral-red text-4xl mr-2 max-sm:text-4xl',
      }}
    >
      <IoPaw />
    </IconContext.Provider>
  );
};

export const ChevronCircle = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'coral-red',
        className: 'global-class-name bg-white rounded-full',
      }}
    >
      <FaChevronRight />
    </IconContext.Provider>
  );
};

export const HamburgerIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'coral-red',
        className: 'global-class-name size-8',
      }}
    >
      <RxHamburgerMenu />
    </IconContext.Provider>
  );
};

export const InstagramIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        className:
          'global-class-name bg-pale-blue p-2 max-sm:p-1 color-blue  max-sm:size-8 size-10 rounded-xl hover:bg-[#0351A1] transition ease-in-out duration-300 ',
      }}
    >
      <Link
        href="https://www.instagram.com/samo_szczescie_cattery/"
        target="_blank"
      >
        <BiLogoInstagramAlt />
      </Link>
    </IconContext.Provider>
  );
};

export const FacebookIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        className:
          'global-class-name bg-pale-blue p-2 max-sm:p-[5px] color-blue  size-10 max-sm:size-8 rounded-xl hover:bg-[#0351A1] transition ease-in-out duration-300 ',
      }}
    >
      <Link href="https://www.facebook.com/SamoSzczesciePL" target="_blank">
        <FaFacebook />
      </Link>
    </IconContext.Provider>
  );
};
export const LinkedinIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'white',
        className: 'size-6',
      }}
    >
      <Link
        href="https://www.linkedin.com/in/maksymilian-rusnak/"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
    </IconContext.Provider>
  );
};

export const UploadIcon = () => {
  return (
    <IconContext.Provider value={{}}>
      <IoCloudUploadOutline />
    </IconContext.Provider>
  );
};

export const EmailIcon = () => {
  return (
    <IconContext.Provider value={{}}>
      <MdOutlineEmail />
    </IconContext.Provider>
  );
};

export const DeleteIcon: FC<IconProviderProps> = ({ className }) => {
  return (
    <IconContext.Provider
      value={{
        color: '',
        className: `${className}`,
      }}
    >
      <MdDeleteOutline />
    </IconContext.Provider>
  );
};
