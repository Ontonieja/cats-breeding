import SectionWrapper from "../Wrappers/SectionWrappers";
import Image from "next/image";
import catAbout from "@/public/cat-about.png";

const About = () => {
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center max-container ">
        <Image
          src={catAbout}
          height={180}
          alt="Kobieta z kotem uprawiajaca yoge"
          className="max-sm:hidden"
        />
        <div className="max-w-prose max-sm:text-center ">
          <h2 className="text-4xl font-madimi">O nas </h2>
          <p className="mt-4 text-lg">
            Jesteśmy siostrami z pasją do kotów brytyjskich, prowadzącymi
            hodowlę Samo Szczęście. Nasza misja to zapewnienie najlepszych
            warunków życia dla naszych podopiecznych, dostarczając przyszłym
            właścicielom niezapomnianej radości z posiadania kota. Dołącz do nas
            i odkryj magię życia z kotem brytyjskim
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
