import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex max-w-6xl items-center justify-center mx-auto border border-t-gray-600 border-r-0 border-l-0">
      <p className="p-4">
        @ 2022
        <Link href={"/"}>
          <a className="ml-2">
            <span>Jitendra giriya</span>
          </a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
