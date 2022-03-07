import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => {
    setHamburger(!hamburger);
  };

  const handleOnClick = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="header fixed top-0 left-0 bg-white h-16 flex z-40 w-full shadow-md dark:bg-[#282828]">
      <div className="flex justify-between h-full w-full mx-auto max-w-6xl items-center relative px-4 sm:px-8 md:px-4">
        <div className="logo">
          <Link href="/">
            <a>
              <h1 className="text-3xl font-bold text-orange-600">Giriya</h1>
            </a>
          </Link>
        </div>
        <nav
          className={`${
            hamburger
              ? "nav-options flex flex-col absolute top-16 left-0 h-80 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none bg-white md:bg-transparent dark:bg-[#282828] md:dark:bg-transparent"
              : "nav-options flex flex-col absolute top-16 left-0 h-0 transition-all w-full items-center overflow-hidden md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none bg-white md:bg-transparent dark:bg-[#282828] md:dark:bg-transparent"
          }`}
        >
          <Link href="/">
            <a className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white">
              Home
            </a>
          </Link>
          <Link href="/#about">
            <a className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white">
              About
            </a>
          </Link>
          <Link href="/#skills">
            <a className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white">
              Skills
            </a>
          </Link>
          <Link href="/#contact">
            <a className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white">
              Contact
            </a>
          </Link>
          <Link href="/projects">
            <a className="w-full text-center my-2 py-2 font-normal font-sans capitalize md:px-4 md:mx-2 text-black dark:text-white">
              projects
            </a>
          </Link>
        </nav>
        <div className="header-icons flex items-center">
          <div
            className="hamburger flex flex-col cursor-pointer md:hidden mx-4"
            onClick={showSidebar}
          >
            <span className="w-5 h-0.5 bg-black my-0.5 dark:bg-white"></span>
            <span className="w-5 h-0.5 bg-black my-0.5 dark:bg-white"></span>
            <span className="w-5 h-0.5 bg-black my-0.5 dark:bg-white"></span>
          </div>
          <div className="cursor-pointer" onClick={handleOnClick}>
            <Brightness4Icon className="text-black dark:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
