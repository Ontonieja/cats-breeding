import SectionWrapper from '../Wrappers/SectionWrappers';
import Image from 'next/image';
import catAbout from '@/public/cat-about.png';
import Section from '../Sections/Section';

const About = () => {
  return (
    <SectionWrapper>
      <Section
        title="O nas"
        image={catAbout}
        imageAlt="Kobieta z kotem uprawiajaca yoge"
        imageFirst
        id="about"
      >
        <p>
          Nasza hodowla{' '}
          <span className="text-coral-red font-bold">Samo Szczęście*PL </span>{' '}
          powstała w 2020 roku dzięki naszej długowłosej kotce Coco, która była
          naszą pierwszą kotką brytyjską. Jej urok, oddanie i gracja sprawiły,
          że zakochaliśmy się w tej rasie bez pamięci. Obecnie mamy dwie
          długowłose kotki oraz jednego krótkowłosego złotego kocurka.<br></br>{' '}
          Wszystkie nasze koty nie są jedynie zwierzętami hodowlanymi, ale
          przede wszystkim wymarzonymi członkami naszego domu. Jako mała
          hodowla, możemy poświęcić uwagę każdemu z naszych podopiecznych i
          zadbać o ich prawidłowy rozwój. Każdy kot jest częścią naszej rodziny
          i aktywnie uczestniczy w naszym codziennym życiu. Dzięki temu kocięta
          opuszczające naszą hodowlę są w pełni zsocjalizowane.<br></br> Nasze
          koty są pod stałą kontrolą weterynaryjną. Posiadają testy na obecność
          FIV i FeLV, są wolne od chorób genetycznych, takich jak
          wielotorbielowatość nerek (PKD).
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default About;
