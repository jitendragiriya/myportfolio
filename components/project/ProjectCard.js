import React, { useState} from "react";
import Link from "next/link";

const ProjectCard = ({ data }) => {
 const [project, setProject] = useState(data);
  return (
    <>
      {project && (
        <div className="card w-full bg-white rounded shadow-lg p-4 max-w-full sm:p-6 dark:bg-[#282828]">
          <small className="bg-red-500 uppercase font-medium rounded px-1 text-sm my-1 text-white w-fit">
            {project.stack} project
          </small>
          <Link href={`/project/${project.id}`}>
            <a>
              <h2 className="text-2xl font-semibold text-gray-700 h-16 overflow-hidden dark:text-white">
                {project.title}
              </h2>
            </a>
          </Link>
          <p className="mt-4 mb-2 text-gray-600 dark:text-[#bcbcbc]">
            &emsp; &emsp;{project.description}
          </p>
          <div className="w-full flex flex-col mb-4 cursor-default">
            <h3 className="capitalize font-medium text-gray-700 my-2 dark:text-white">
              tech used
            </h3>
            <div className="flex justify-start gap-2 flex-wrap">
              {project.techs.map((i) => (
                <span
                  className="flex border rounded border-gray-500 px-2"
                  key={i.id}
                >
                  {i.name}
                </span>
              ))}
              <span>etc...</span>
            </div>
          </div>
          <Link href={`/project/${project.id}`}>
            <a className="py-1 px-4 mt-2 w-fit flex bg-orange-600 capitalize font-medium text-white relative transition-all hover:tracking-wide">
              view project
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
