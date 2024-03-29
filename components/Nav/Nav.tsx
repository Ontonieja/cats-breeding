"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawLogo } from "../Icons/Icons";
import { HamburgerIcon } from "../Icons/Icons";
import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const pathname = usePathname();
  return (
    <header className="padding-x py-8">
      <nav className="flex justify-between items-center max-container">
        <Link href="/" className="flex items-center font-madimi">
          <PawLogo />

          <span className="text-xl leading-none">
            Samo <br></br>Szczęście
          </span>
        </Link>
        <div className="md:hidden block" onClick={handleNav}>
          <HamburgerIcon />
        </div>
        <ul className="gap-16 text-xl font-medium hidden md:flex max-lg:gap-6">
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
        <div
          className={
            menuOpen
              ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#F5F5F5] p-10 ease-in duration-500 shadow-card-strong z-20"
              : "fixed right-[-100%] top-0 p-10 ease-out duration-500 h-screen "
          }
        >
          <div className="flex w-full items-center justify-end ">
            <div onClick={handleNav} className="cursor-pointer ">
              <AiOutlineClose size={25}></AiOutlineClose>
            </div>
          </div>
          <div className="flex-col py-4 ">
            <ul>
              <Link href="/">
                <li onClick={handleNav} className="py-4 cursor-pointer">
                  Strona główna
                </li>
              </Link>
              <Link href="/kocury">
                <li onClick={handleNav} className="py-4 cursor-pointer">
                  Kocury
                </li>
              </Link>
              <Link href="/kocieta">
                <li onClick={handleNav} className="py-4 cursor-pointer">
                  Kocięta
                </li>
              </Link>
              <Link href="/kontakt">
                <li onClick={handleNav} className="py-4 cursor-pointer">
                  Kontakt
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex justify-evenly pt-10 items-center">
            <Link
              href="https://www.instagram.com/samo_szczescie_cattery/"
              target="_blank"
            >
              <AiOutlineInstagram size={30}></AiOutlineInstagram>
            </Link>
            <Link
              href="https://www.facebook.com/SamoSzczesciePL"
              target="_blank"
            >
              <AiOutlineFacebook size={30}></AiOutlineFacebook>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
