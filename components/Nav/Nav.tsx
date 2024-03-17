import Link from "next/link";
import { PawLogo } from "../Icons/Icons";
import { HamburgerIcon } from "../Icons/Icons";

const Nav = () => {
  return (
    <header className="padding-x py-8">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" className="flex items-center font-madimi">
          <PawLogo />

          <span className="text-xl leading-none">
            Samo <br></br>Szczęście
          </span>
        </Link>
        <div className="lg:hidden block">
          <HamburgerIcon />
        </div>
        <ul className="flex gap-16 text-xl font-medium hidden lg:flex">
          <li>
            <Link href="/" className="text-coral-red">
              Strona główna
            </Link>
          </li>
          <li>
            <Link href="/kocury">Kocury</Link>
          </li>
          <li>
            <Link href="/kotki">Kotki</Link>
          </li>
          <li>
            <Link href="/kocieta">Kocięta</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
