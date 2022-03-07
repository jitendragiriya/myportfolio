import React from "react";
import Head from 'next/head'
import ProjectCard from "../components/projects/ProjectCard";

let array = [1, 2, 3, 4, 5, 6, 7]
const Projects = () => {
  return (
    <>
      <Head>
        <title>projects</title>
        <meta
          name="description"
          content="this is my personal project that I have done"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="skills bg-blue-50 dark:bg-[#181818]" id="projects">
        <div className="flex flex-col mx-auto items-center max-w-7xl">
          <div className="title mt-8 flex w-full justify-start">
            <h1 className="text-3xl font-medium px-2 sm:px-4 md:px-8 lg:px-4 xl:px-0">
              Projects
            </h1>
          </div>
          <div className="card grid grid-cols-1 w-full gap-8 flex-wrap my-8 px-2 sm:grid-cols-2 sm:px-4 md:px-8 md:gap-12 lg:grid-cols-3 lg:px-4 lg:gap-8 xl:px-0 xl:gap-12">
            {array.map((items) => {
              return <ProjectCard key={items} id={items} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
