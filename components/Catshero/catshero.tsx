import catStanding from "@/public/cat-standing.png";
import SectionWrapper from "../Wrappers/SectionWrappers";
import Button from "../Base/Button/Button";

type CatProps = {
  title: string;
  description: string;
};
const Catshero = ({ title, description }: CatProps) => {
  return (
    <div className="max-container">
      <div>
        <h1 className="text-4xl font-madimi ">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Catshero;
