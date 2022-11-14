import React, { useState, useEffect } from "react";
import Head from "next/head";
import AllProject from "../../../components/admin/project/AllProject";
import { PrismaClient } from "@prisma/client";
import PageLoader from "../../../components/loader/PageLoader";

const prisma = new PrismaClient();

const allproject = (data) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  return (
    <>
      <Head>
        <title>admin all projects</title>
        <meta
          name="description"
          content="this is my personal about information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 bg-[#f9f9f9] dark:bg-[#181818] flex flex-col lg:p-8">
        {loading ? <PageLoader /> : <AllProject datas={data} />}
      </div>
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

export default allproject;
