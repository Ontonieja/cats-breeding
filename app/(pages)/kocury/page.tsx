import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/Catslist';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kocury = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kocury"
        description="Nasze kocury to nie tylko zwierzęta, ale także członkowie naszej rodziny. Każdy z nich ma swoją historię i osobowość. Przedstawiamy Ci kilku z nich:"
      ></Catshero>
      <CatsList href="/kocury" bgColor="bg-light-blue" />
    </SectionWrapper>
  );
};

export default Kocury;
