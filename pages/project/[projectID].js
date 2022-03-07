import Head from 'next/head'
import ProjectDetails from "../../components/projects/ProjectDetails";

const project = () => {
  return (
    <>
      <Head>
        <title>project</title>
        <meta
          name="description"
          content="this is my personal blogs information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectDetails />
    </>
  );
};

export default project;
