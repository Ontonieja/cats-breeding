'use client';

import { IconContext } from 'react-icons';
import { FaArrowCircleRight } from 'react-icons/fa';

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
