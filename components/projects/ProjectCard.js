import React from "react";
import Link from "next/link";

const ProjectCard = ({ id }) => {
  return (
    <div className="card min-h-fit w-full bg-white rounded shadow-lg p-4 max-w-full sm:p-6 dark:bg-[#282828]">
      <small className="bg-red-500 uppercase font-medium rounded px-1 text-sm my-1 text-white w-fit">
        react project
      </small>
      <h2 className="text-2xl font-semibold text-gray-700 h-16 overflow-hidden dark:text-white">
        Project frontend - the best place to find your need
      </h2>
      <p className="mt-4 mb-2 text-gray-600 dark:text-[#bcbcbc]">
        &emsp; &emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Rem, vel quis! Laudantium, distinctio facilis. Maiores commodi
        voluptatem quasi sequi porro, perspiciatis...
      </p>
      <div className="w-full flex flex-col mb-4 cursor-default">
        <h3 className="capitalize font-medium text-gray-700 my-2 dark:text-white">
          tech used
        </h3>
        <div className="flex justify-start gap-2 flex-wrap">
          <span className="flex border rounded border-gray-500 px-2">
            Reactjs
          </span>
          <span className="flex border rounded border-gray-500 px-2">
            Nodejs
          </span>
          <span>etc...</span>
        </div>
      </div>
      <Link href={`/project/${id}`}>
        <a className="py-1 px-2 bg-blue-600 rounded capitalize font-medium text-white relative transition-all hover:bg-blue-700 hover:tracking-wide">
          view project
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
