import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/Catslist';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kocury = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kocięta"
        description="Nasze kociątka to nie tylko zwierzęta, ale także członkowie naszej rodziny. Każdy z nich ma swoją historię i osobowość. Przedstawiamy Ci kilku z nich:"
      ></Catshero>
      <CatsList href="/kocieta" bgColor="bg-light-green" gender="KID" />
    </SectionWrapper>
  );
};

export default Kocury;
