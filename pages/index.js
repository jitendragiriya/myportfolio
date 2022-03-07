import { useTheme } from "next-themes";
import Head from "next/head";
import BottomMessage from "../components/Alerts/BottomMessage";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Head>
        <title>jitendra giriya</title>
        <meta name="description" content="this is my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BottomMessage Message={"Mess is the"}/>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
