import { FC, ReactNode } from "react";
interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children }) => {
  return <section className="padding">{children}</section>;
};

export default SectionWrapper;
