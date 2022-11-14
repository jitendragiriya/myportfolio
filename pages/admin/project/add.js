import React from "react";
import Head from "next/head";
import AddProject from "../../../components/admin/project/AddProject";

const addproject = () => {
  return (
    <>
      <Head>
        <title>admin add project</title>
        <meta
          name="description"
          content="this is my personal about information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#f9f9f9] dark:bg-[#181818] flex flex-col">
        <AddProject />
      </div>
    </>
  );
};

export default addproject;
