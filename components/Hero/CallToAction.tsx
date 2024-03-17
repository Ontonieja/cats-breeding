import Button from "@/components/Base/Button/Button";
import { RightArrow } from "../Icons/Icons";

const CallToAction = () => {
  return (
    <div className="flex align-center gap-4">
      <Button buttonStyle="primary" type="button">
        O nas
      </Button>
      <Button buttonStyle="secondary" type="button" icon>
        Kontakt
        <RightArrow />
      </Button>
    </div>
  );
};

export default CallToAction;
