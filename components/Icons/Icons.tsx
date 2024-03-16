'use client';

import { IconContext } from 'react-icons';
import { IoPaw } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';

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
        className: 'global-class-name text-coral-red text-4xl mr-2',
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
