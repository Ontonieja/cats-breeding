"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import { IoPaw } from "react-icons/io5";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";

export const RightArrow = () => {
  return (
    <IconContext.Provider
      value={{
        color: "coral-red",
        className: "global-class-name text-coral-red text-xl ml-2",
      }}
    >
      <FaArrowCircleRight />
    </IconContext.Provider>
  );
};

export const PawLogo = () => {
  return (
    <IconContext.Provider
      value={{
        color: "coral-red",
        className: "global-class-name text-coral-red text-4xl mr-2",
      }}
    >
      <IoPaw />
    </IconContext.Provider>
  );
};

export const ChevronCircle = () => {
  return (
    <IconContext.Provider
      value={{
        color: "coral-red",
        className: "global-class-name bg-white rounded-full",
      }}
    >
      <FaChevronRight />
    </IconContext.Provider>
  );
};

export const HamburgerIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: "coral-red",
        className: "global-class-name size-8",
      }}
    >
      <RxHamburgerMenu />
    </IconContext.Provider>
  );
};

export const InstagramIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: "white",
        className:
          "global-class-name bg-pale-blue p-2 color-blue  size-10 rounded-2xl ",
      }}
    >
      <Link
        href="https://www.instagram.com/samo_szczescie_cattery/"
        target="_blank"
      >
        <BiLogoInstagramAlt />
      </Link>
    </IconContext.Provider>
  );
};

export const FacebookIcon = () => {
  return (
    <IconContext.Provider
      value={{
        color: "white",
        className:
          "global-class-name bg-pale-blue p-2 color-blue  size-10 rounded-2xl ",
      }}
    >
      <Link href="https://www.facebook.com/SamoSzczesciePL" target="_blank">
        <FaFacebook />
      </Link>
    </IconContext.Provider>
  );
};
