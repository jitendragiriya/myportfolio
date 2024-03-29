import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`;
};

const About = (props) => {
  console.log(props);
  return (
    <div className="about flex flex-col max-w-6xl mx-auto items-center md:px-4">
      <div className="title mb-12 mt-16">
        <h2 className="text-4xl font-medium">About</h2>
      </div>

      <div className="flex flex-col-reverse w-full relative mx-auto md:flex-row">
        <div className="left flex p-4 justify-center items-center md:w-1/2">
          <div className="h-56 w-56 bg-orange-600 rounded-full overflow-hidden flex items-center justify-center">
            <div className="relative h-56 w-32">
              <Image
                loader={myLoader}
                src={"images/jitendragiriya.png"}
                alt="jitendragiriya"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="right flex p-4 flex-col md:w-2/4">
          <h1 className="text-4xl font-medium mb-4">
            I&apos;m Jitendra giriya
          </h1>
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            myData
          </h3>
          <p>
            description
            <Link href={`/doc`} target="0">
              <a className="text-orange-600 underline font-medium ml-2">
                my resume
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
