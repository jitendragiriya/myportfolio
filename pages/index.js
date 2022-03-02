import Head from 'next/head'
import Footer from '../components/Footer';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>jitendra giriya</title>
        <meta name="description" content="this is my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
