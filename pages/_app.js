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

export default function App({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();

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
  return (
    <Provider store={store}>
      <Progress isAnimating={isAnimating} />
      <TopNavbar />
      <Menubar />
      <Component {...pageProps} />
    </Provider>
  );
}
