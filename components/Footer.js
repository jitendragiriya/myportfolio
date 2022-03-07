import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex border-t border-t-gray-600 border-r-0 border-l-0 z-40">
      <div className="max-w-6xl items-center justify-center mx-auto">
        <p className="p-4">
          @ 2022
          <Link href={"/"}>
            <a className="ml-2">
              <span>Jitendra giriya</span>
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
