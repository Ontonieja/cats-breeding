import Button from "@/components/Base/Button/Button";
import { RightArrow } from "../Icons/Icons";
import Link from "next/link";
const CallToAction = () => {
  return (
    <div className="flex align-center gap-4">
      <Link href="#about">
        <Button buttonStyle="primary" type="button">
          O nas
        </Button>
      </Link>
      <Link href="/kontakt">
        <Button buttonStyle="secondary" type="button" icon>
          Kontakt
          <RightArrow />
        </Button>
      </Link>
    </div>
  );
};

export default CallToAction;
