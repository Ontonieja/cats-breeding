import Image, { StaticImageData } from 'next/image';
import { ReactNode, FC } from 'react';

interface SectionProps {
  children: ReactNode;
  title: string;
  image: StaticImageData;
  imageAlt: string;
  imageFirst?: boolean;
}

const Section: FC<SectionProps> = ({
  children,
  title,
  image,
  imageAlt,
  imageFirst = false,
}) => {
  return (
    <div className="flex justify-between items-center max-container max-sm:flex-col max-sm:items-start overflow-hidden">
      <div className="max-w-prose">
        <h2 className="text-4xl font-madimi">{title}</h2>
        <div className="mt-4 text-xl leading-8">{children}</div>
      </div>
      <Image
        src={image}
        height={180}
        alt={imageAlt}
        className={`max-sm:w-[150px] max-sm:order-first ${
          imageFirst ? 'order-first' : ''
        }`}
      />
    </div>
  );
};

export default Section;
