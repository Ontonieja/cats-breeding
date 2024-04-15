import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/CatsList';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kocury = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kocury"
        description="Nasze kocury to nie tylko zwierzęta, ale także członkowie naszej rodziny. Każdy z nich ma swoją historię i osobowość. Przedstawiamy Ci kilku z nich:"
      ></Catshero>
      <CatsList />
    </SectionWrapper>
  );
};

export default Kocury;
