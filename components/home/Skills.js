import React from "react";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Skills = () => {
  return (
    <section className="skills flex flex-col max-w-6xl mx-auto items-center" id="skills">
      <div className="title my-12">
        <h2 className="text-4xl font-medium ">Skills</h2>
      </div>

      <div className="skills-center flex flex-col w-full mx-auto justify-between items-center md:flex-row">
        <div className="left p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium mb-4">Languages Know</h2>
            <div className="cards flex flex-wrap justify-center">
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                c/C++
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                javascript
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                python
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-medium mb-4">Web Developement</h2>
            <div className="cards flex flex-wrap justify-center">
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                reactjs
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                nodejs
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                expressjs
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                NEXTJS
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                mognodb
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                html5
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                css3
              </div>
              <div className="border border-black rounded mb-4 p-2 mr-2 w-32 uppercase hover:bg-slate-100 cursor-pointer transition-all">
                tailwindcss
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-52 w-72 max-w-full shadow-md md:w-96 md:h-60">
          <div className="relative h-52 w-72 max-w-full rounded overflow-hidden md:w-96 md:h-60">
            <Image
              loader={myLoader}
              src="images/skills.jpg"
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
