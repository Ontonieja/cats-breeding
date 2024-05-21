import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/Catslist';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kotki = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kotki"
        description="Obecnie mieszkają z nami dwie długowłose kotki w pięknych złotych umaszczeniach. Zależy nam na dążeniu do ideału wzorca rasy brytyjskiej. Każda z kotek charakteryzuje się, spokojem, równowagą oraz przyjaznym nastawieniem do innych ludzi."
      ></Catshero>
      <CatsList href="/kotki" gender="FEMALE" bgColor={'bg-light-pink'} />
    </SectionWrapper>
  );
};

export default Kotki;
