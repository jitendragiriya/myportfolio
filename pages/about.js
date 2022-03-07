import Head from "next/head";
import About from "../components/home/About";

const about = () => {
  return (
    <>
      <Head>
        <title>jitendra giriya</title>
        <meta name="description" content="this is my personal about information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
};

export default about;
