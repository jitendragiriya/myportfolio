import React from "react";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const About = () => {
  return (
    <section className="about flex flex-col max-w-6xl mx-auto items-center" id="about">
      <div className="title my-12">
        <h2 className="text-4xl font-medium">About</h2>
      </div>

      <div className="flex flex-col-reverse w-full relative mx-auto md:flex-row">
        <div className="left flex p-4 justify-center items-center md:w-2/4">
          <div className="h-56 w-56 bg-orange-600 rounded-full overflow-hidden flex items-center justify-center">
            <div className="relative h-56 w-32">
              <Image
                loader={myLoader}
                src="images/jitendragiriya.png"
                alt="jitendragiriya"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="right flex p-4 flex-col md:w-2/4">
          <h1 className="text-4xl font-medium mb-4">I&apos;m Jitendra giriya</h1>
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">
            Web Developer
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, vel
            quis! Laudantium, distinctio facilis. Maiores commodi voluptatem
            quasi sequi porro, perspiciatis doloremque rerum reprehenderit
            dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Rem, vel quis! Laudantium, distinctio facilis. Maiores commodi
            voluptatem quasi sequi porro, perspiciatis doloremque rerum
            reprehenderit dicta.
            <Link href="/doc" target="0">
              <a className="text-orange-600 underline font-medium">my resume</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
