import catStanding from "@/public/cat-standing.png";
import SectionWrapper from "../Wrappers/SectionWrappers";
import Button from "../Base/Button/Button";

type CatProps = {
  title: string;
  description: string;
};
const Catshero = ({ title, description }: CatProps) => {
  return (
    <SectionWrapper>
      <div className="max-container">
        <div>
          <h1 className="text-4xl font-madimi ">{title}</h1>
          <p className="mt-2 text-lg">{description}</p>
        </div>

        <div className=" padding-y">
          <div className="flex flex-col justify-start max-w-[50%] bg-light-blue">
            <h2>Bourbon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              nulla nisi, illo tempore nam temporibus numquam error. Sint
              cupiditate harum aliquid repellendus?
            </p>
            <button>Zobacz</button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Catshero;
