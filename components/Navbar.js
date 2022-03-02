import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const showSidebar = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="header fixed top-0 left-0 bg-white h-16 flex z-50 w-screen shadow-md">
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
              ? "nav-options flex flex-col absolute top-16 left-0 h-72 overflow-hidden transition-all w-full items-center bg-white md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none"
              : "nav-options flex flex-col absolute top-16 left-0 h-0 overflow-hidden transition-all w-full items-center bg-white md:relative md:flex-row md:h-fit md:top-0 md:w-fit shadow-md md:shadow-none"
          }`}
        >
          <Link href="/">
            <a className="w-full text-center my-2 py-2 font-medium md:px-4 md:mx-2">
              Home
            </a>
          </Link>
          <Link href="#about">
            <a className="w-full text-center my-2 py-2 font-medium md:px-4 md:mx-2">
              About
            </a>
          </Link>
          <Link href="#skills">
            <a className="w-full text-center my-2 py-2 font-medium md:px-4 md:mx-2">
              Skills
            </a>
          </Link>
          <Link href="#contact">
            <a className="w-full text-center my-2 py-2 font-medium md:px-4 md:mx-2">
              Contact
            </a>
          </Link>
        </nav>
        <div
          className="hamburger flex flex-col md:hidden"
          onClick={showSidebar}
        >
          <span className="w-5 h-0.5 bg-black my-0.5"></span>
          <span className="w-5 h-0.5 bg-black my-0.5"></span>
          <span className="w-5 h-0.5 bg-black my-0.5"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
