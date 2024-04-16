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
          Jesteśmy siostrami z pasją do kotów brytyjskich, prowadzącymi hodowlę
          Samo Szczęście. Nasza misja to zapewnienie najlepszych warunków życia
          dla naszych podopiecznych, dostarczając przyszłym właścicielom
          niezapomnianej radości z posiadania kota. Dołącz do nas i odkryj magię
          życia z kotem brytyjskim
        </p>
      </Section>
    </SectionWrapper>
  );
};

export default About;
