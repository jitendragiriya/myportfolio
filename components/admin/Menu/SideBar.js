import React, { useState } from "react";
import Link from "next/link";
// importing icons from material ui icons

// importing icons from react icons
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineContacts,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

const hamBar = [0, 1, 2];

const SideBar = () => {
  const [wfull, setWfull] = useState(true);

  const setMenuWidth = () => {
    setWfull(!wfull);
  };

  return (
    <div
      className={
        wfull
          ? "fixed left-0 top-0 w-full h-screen max-w-[288px] overflow-x-hidden bg-white duration-1000 z-[100] delay-75 lg:sticky dark:bg-[#282828]"
          : "fixed -left-72 top-0 w-full h-screen max-w-[288px] overflow-x-hidden bg-white z-[100] duration-500 md:w-20 md:left-0 lg:sticky dark:bg-[#282828]"
      }
    >
      <div className="flex h-16 w-full items-center px-4 py-2 border-b border-gray-300 overflow-hidden justify-end md:justify-between md:pl-1.5 dark:border-[#484848]">
        <div
          className="fixed top-0 left-0 flex-col cursor-pointer p-2 h-16 w-16 flex items-center justify-center md:relative min-w-[64px]"
          onClick={setMenuWidth}
        >
          {hamBar.map((i) => (
            <span key={i} className="w-5 h-0.5 bg-black my-0.5 dark:bg-white" />
          ))}
        </div>
        <Link href="/">
          <a
            className={
              wfull
                ? "text-3xl font-bold text-orange-600 duration-1000 opacity-100"
                : "text-3xl font-bold text-orange-600 duration-200 opacity-0"
            }
          >
            Giriya
          </a>
        </Link>
      </div>

      <div className="flex flex-col py-2">
        {/* options */}
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/dashboard">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <AiOutlineHome />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100"
                      : "capitalize duration-150 opacity-0"
                  }
                >
                  Dashboard
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/allpost">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <FaBlogger />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100"
                      : "capitalize duration-150 opacity-0"
                  }
                >
                  post
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/project/all">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <AiOutlineProject />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100"
                      : "capitalize duration-150 opacity-0"
                  }
                >
                  projects
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/project/add">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <AiOutlineProject />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100 space whitespace-nowrap"
                      : "capitalize duration-150 opacity-0 space whitespace-nowrap"
                  }
                >
                  Add projects
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/contact/all">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <AiOutlineContacts />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100"
                      : "capitalize duration-150 opacity-0"
                  }
                >
                  contacts
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex duration-300 hover:bg-black hover:bg-opacity-5 dark:hover:bg-[#484848]">
          <Link href="/admin/allpost">
            <a className="w-full px-6 py-3 h-full text-black dark:text-white font-sans">
              <div className="flex items-center">
                <span className="mr-4 text-2xl">
                  <AiOutlineSetting />
                </span>
                <span
                  className={
                    wfull
                      ? "capitalize duration-150 opacity-100"
                      : "capitalize duration-150 opacity-0"
                  }
                >
                  settings
                </span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
