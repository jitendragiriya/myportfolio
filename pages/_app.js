import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import SideBar from "../components/admin/Menu/SideBar";
import TopBar from "../components/admin/Menu/TopBar";
import BottomBar from "../components/admin/Menu/BottomBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [admin, setAdmin] = useState(true);
  const [isDashboard, setIsDashboard] = useState("");

  const router = useRouter();
  const path = router.route;

  useEffect(() => {
    setIsDashboard(path.slice(1, 6));
  }, [router]);

  return (
    <ThemeProvider attribute="class">
      <div className="scroll-smooth transition-all">
        {!admin && (
          <>
            <Navbar />
            <div className="h-16 w-full"></div>
            <Component {...pageProps} />
            <Footer />
          </>
        )}
        {admin && isDashboard === "admin" ? (
          <div className="flex w-full">
            <SideBar />
            <div className="flex relative flex-col w-full md:left-20 md:w-[calc(100%-80px)] lg:w-full lg:left-0">
              <TopBar />
              <Component {...pageProps} />
              <BottomBar />
            </div>
          </div>
        ) : (
          <div>
            <Navbar />
            <div className="h-16 w-full"></div>
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
