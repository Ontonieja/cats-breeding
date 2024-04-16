import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/Catslist';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kotki = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kotki"
        description="Nasze kotki to nie tylko zwierzęta, ale także członkowie naszej rodziny. Każdy z nich ma swoją historię i osobowość. Przedstawiamy Ci kilku z nich:"
      ></Catshero>
      <CatsList href="/kotki" gender="FEMALE" bgColor={'bg-light-pink'} />
    </SectionWrapper>
  );
};

export default Kotki;
