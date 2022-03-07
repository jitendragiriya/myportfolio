import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider attribute="class">
      <div className="scroll-smooth transition-all">
        <Navbar />
        <div className="relative h-16 w-full"></div>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
