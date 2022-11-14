import React from "react";
import Head from "next/head";
import AllContact from "../../../components/admin/contact/AllContact";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allContact = (data) => {
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
        <AllContact datas={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await prisma.contact.findMany({});

  data.forEach((i) => {
    i.createdAt = JSON.stringify(i.createdAt);
    i["actionId"] = i.id;
  });

  if (!data) {
    return {
      notFound: true,
    };
  } else
    return {
      props: { data },
    };
}

export default allContact;
