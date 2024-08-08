import { Fragment, useEffect, useState } from "react";
import Menubar from "@/components/Menubar";
import TopNavbar from "@/components/HomeComponents/TopNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";
import { useProgressStore } from "@/progressStore";
import { useRouter } from "next/router";
import Progress from "@/components/Progress/Progress";
import "@/styles/globals.css";
import { getCategories } from "@/api/categories";
import { Provider } from "react-redux";
import { store } from "@/store";
import Footer from "@/components/Footer";
import TopMessageBar from "@/components/TopMessageBar";
import GDPR from "@/components/GDPR";
import axios from "axios";

export default function App({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  const [appearGDPR, setAppearGDPR] = useState(false);
  const [announcements, setAnnouncements] = useState(null);

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };

    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === null) {
      setAppearGDPR(true);
    }
  }, []);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const res = await axios.get("/api/announcements");
    console.log({ announcements: res.data });
    setAnnouncements(res.data);
  };

  return (
    <Provider store={store}>
      <Progress isAnimating={isAnimating} />
      {announcements && (
        <Fragment>
          {announcements?.map((item) => {
            return (
              <TopMessageBar
                key={item.id}
                message={item.message}
                active={item.active}
              />
            );
          })}
        </Fragment>
      )}
      <TopNavbar />
      <Menubar />
      <Component {...pageProps} />
      <Footer />
      {appearGDPR && <GDPR />}
    </Provider>
  );
}
