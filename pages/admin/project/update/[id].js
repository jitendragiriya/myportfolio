import React, { useState, useEffect } from "react";
import Update from "../../../../components/admin/project/UpdateProject";
import { PrismaClient } from "@prisma/client";
import PageLoader from "../../../../components/loader/PageLoader";

const prisma = new PrismaClient();

const edit = ({ data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [data]);
  return <>{loading ? <PageLoader /> : <Update data={data} />}</>;
};

export async function getServerSideProps(context) {
  const data = await prisma.project.findUnique({
    where: {
      id: Number(context.params.id),
    },
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

export default edit;
