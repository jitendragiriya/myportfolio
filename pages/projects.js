import React, { useEffect, useState } from "react";
import Head from "next/head";
import ProjectCard from "../components/project/ProjectCard";
import ProjectLoader from "../components/loader/ProjectLoader";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Projects = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);
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
      {loading ? (
        <ProjectLoader />
      ) : (
        <section className="bg-[#e9e9e9] dark:bg-[#181818]" id="projects">
          <div className="flex flex-col mx-auto w-full items-center max-w-7xl px-4 md:px-8 lg:px-4 xl:px-0">
            <div className="title mt-8 flex w-full justify-start">
              <h1 className="text-3xl font-medium">Projects</h1>
            </div>
            <div className="card grid grid-cols-1 w-full gap-8 flex-wrap my-8 sm:grid-cols-2   md:gap-12 lg:grid-cols-3 lg:gap-8 xl:gap-12">
              {data.map((items) => {
                return <ProjectCard key={items.id} data={items} />;
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const data = await prisma.project.findMany({
    select: {
      id: true,
      stack: true,
      title: true,
      description: true,
      techs: true,
    },
  });

  return {
    props: { data },
  };
}

export default Projects;
