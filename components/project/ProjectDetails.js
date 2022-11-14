import React from "react";
import ProjectImages from "./ProjectImages";

let now = "Thu Feb 17 2022";
const projectDetails = () => {
  return (
    <div className="py-8">
      <div className="head px-3 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold">
          Project frontend - the best place to find your need
        </h1>
        <small className="text-sm">published {now}</small>
      </div>
      <div className="poster relative w-full max-w-full my-4 p-3 mx-auto sm:p-6 md:w-4/5">
        <ProjectImages />
      </div>
      <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6">
        <h3 className="font-semibold mb-2 text-lg">Description</h3>
        <p className="text-gray-700 dark:text-[#bcbcbc]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, vel
          quis! Laudantium, distinctio facilis. Maiores commodi voluptatem quasi
          sequi porro, perspiciatis Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Rem, vel quis! Laudantium, distinctio facilis.
          Maiores commodi voluptatem quasi sequi porro, perspiciatis Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Rem, vel quis!
          Laudantium, distinctio facilis. Maiores commodi voluptatem quasi sequi
          porro, perspiciatis.
        </p>
      </div>
      <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6">
        <h3 className="font-semibold mb-2 text-lg">
          Tech Used to build project
        </h3>
        <div className="flex justify-start gap-2 flex-wrap">
          <span className="flex border rounded border-gray-500 px-2 cursor-default">
            Reactjs
          </span>
          <span className="flex border rounded border-gray-500 px-2 cursor-default">
            Nodejs
          </span>
          <span className="flex border rounded border-gray-500 px-2 cursor-default">
            nextjs
          </span>
          <span className="flex border rounded border-gray-500 px-2 cursor-default">
            tailwindcss
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start mt-8 p-3 mx-auto max-w-5xl sm:px-6">
        <h3 className="font-semibold mb-2 text-lg">Features</h3>
        <ul className="list-disc ml-8 dark:text-[#bcbcbc]">
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </div>
  );
};

export default projectDetails;
