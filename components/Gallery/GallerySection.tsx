import SectionWrapper from '../Wrappers/SectionWrappers';
import camera from '@/public/camera.png';
import { FacebookIcon, InstagramIcon } from '../Icons/Icons';
import Section from '../Sections/Section';
import Gallery from './Gallery';

const GallerySection = async () => {
  return (
    <SectionWrapper>
      <Section title="Galeria" image={camera} imageAlt="Różowy aparat">
        <p>
          Z dumą prezentujemy naszą galerię, w której znajdziesz najpiękniejsze
          zdjęcia naszych wyjątkowych kotów.{' '}
          <span className="max-sm:hidden">
            Odkryj ich urocze minki, elegancję i charakter, który sprawia, że są
            one niezwykłymi towarzyszami życia.
          </span>
        </p>
        <div className="flex gap-4 max-sm:gap-2 items-center mt-4 ">
          <p className="text-lg font-semibold mr-2">Zaobserwuj nas:</p>
          <InstagramIcon />
          <FacebookIcon />
        </div>
        <Gallery />
      </Section>
    </SectionWrapper>
  );
};

export default GallerySection;
