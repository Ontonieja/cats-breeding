import { FC, ReactNode } from 'react';
interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children }) => {
  return <section className='mt-24'>{children}</section>;
};

export default SectionWrapper;
