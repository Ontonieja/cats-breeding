"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawLogo } from "../Icons/Icons";
import { HamburgerIcon } from "../Icons/Icons";

const Nav = () => {
  const pathname = usePathname();
  return (
    <header className="padding-x py-8">
      <nav className="sticky flex justify-between items-center max-container">
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
            <Link
              href="/"
              className={`${pathname === "/" ? "text-coral-red" : ""} `}
            >
              Strona główna
            </Link>
          </li>
          <li>
            <Link
              href="/kocury"
              className={`${pathname === "/kocury" ? "text-coral-red" : ""} `}
            >
              Kocury
            </Link>
          </li>
          <li>
            <Link
              href="/kotki"
              className={`${pathname === "/kotki" ? "text-coral-red" : ""} `}
            >
              Kotki
            </Link>
          </li>
          <li>
            <Link
              href="/kocieta"
              className={`${pathname === "/kocieta" ? "text-coral-red" : ""} `}
            >
              Kocięta
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`${pathname === "/kontakt" ? "text-coral-red" : ""} `}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
