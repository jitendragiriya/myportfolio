import React from "react";
import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center min-h-screen h-screen pt-16 overflow-hidden max-w-6xl mx-auto md:flex-row md:w-full md:justify-between px-4">
      <div className="left h-2/4 flex items-center">
        <h2 className="text-4xl font-medium relative flex flex-col md:text-5xl lg:text-7xl">
          <span className="mb-4">Hi</span>
          <span className="mb-4 flex">
            I&apos;m <h3 className="text-orange-600 ml-1">Jitendra Giriya</h3>
          </span>
          <span className="mb-4">Web Developer</span>
        </h2>
      </div>
      <div className="right relative flex justify-center items-center">
        <div className="img-box h-56 w-56 bg-orange-600 rounded-full overflow-hidden flex justify-center items-center relative md:h-80 md:w-80 lg:h-96 lg:w-96">
          <div className="img-box h-56 w-32 relative md:h-80 md:w-44  lg:h-96 lg:w-56">
            <Image
              loader={myLoader}
              src={"/static/images/jitendragiriya.png"}
              alt="jitendragiriya"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
