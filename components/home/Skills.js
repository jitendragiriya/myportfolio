import React from "react";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const language = ["c/cpp", "javasctipt", "python"];
const webTech = [
  "react",
  "nodejs",
  "expressjs",
  "nextjs",
  "mongodb",
  "tailwindcss",
];

const Skills = () => {
  return (
    <section
      className="skills flex flex-col max-w-6xl mx-auto items-center md:px-4"
      id="skills"
    >
      <div className="title mb-12 mt-16">
        <h2 className="text-4xl font-medium ">Skills</h2>
      </div>

      <div className="skills-center flex flex-col w-full mx-auto justify-between items-center md:flex-row">
        <div className="left p-4 w-full md:w-[50%]">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium mb-4">Languages Know</h2>
            <div className="cards flex flex-wrap justify-center">
              {language &&
                language.map((item) => (
                  <div
                    key={item}
                    className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all dark:border-white dark:hover:bg-[#282828]"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium mb-4">Web Developement</h2>
            <div className="cards flex flex-wrap justify-center">
              {webTech &&
                webTech.map((item) => (
                  <div
                    key={item}
                    className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all dark:border-white dark:hover:bg-[#282828]"
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative h-[50vw] w-full px-4 max-w-full md:w-[50%] md:h-[30vw] lg:w-1/2 lg:h-80">
          <div className="relative h-full w-full max-w-full rounded overflow-hidden">
            <Image
              loader={myLoader}
              src={"images/skills.jpg"}
              alt="skills"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
