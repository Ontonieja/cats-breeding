import Catshero from '@/components/Catshero/catshero';
import CatsList from '@/components/Catslist/Catslist';
import SectionWrapper from '@/components/Wrappers/SectionWrappers';

const Kocury = () => {
  return (
    <SectionWrapper>
      <Catshero
        title="Kocury"
        description="Obecnie posiadamy jednego krótkowłosego złotego kocurka z zielonymi oczkami. Nasze koty są aktywnymi członkami naszej rodziny, przyzwyczajone do pieszczot i kontaktu z człowiekiem."
      ></Catshero>
      <CatsList href="/kocury" bgColor="bg-light-blue" />
    </SectionWrapper>
  );
};

export default Kocury;
