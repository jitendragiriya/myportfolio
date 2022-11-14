import Head from "next/head";
import { useState, useEffect } from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import PageLoader from "../components/loader/PageLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div>
      <Head>
        <title>jitendra giriya</title>
        <meta name="description" content="this is my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <PageLoader />}

      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};


export default Home;
