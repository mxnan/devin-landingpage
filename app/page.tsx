import {
  Footer,
  Herosection,
  Stickylogo,
  TopFlag,
} from "@/components/sections";
import Aboutus from "@/components/sections/aboutsection/aboutus-section";
import Performance from "@/components/sections/performancesection/performance";
import VideoPlayer from "@/components/sections/videosection/video-player";
import Mouse from "@/components/ui/mouse-pointer";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative  h-max  bg-light-gradient dark:bg-dark-gradient text-foreground  ">
        <Mouse />
        <TopFlag />
        <Stickylogo />
        <div
          className="relative 
          bg-container-light-gradient dark:bg-container-dark-gradient
          overflow-x-clip   pt-16 z-10  max-w-7xl mx-auto 
        border-l border-r dark:border-zinc-900 border-stone-50 flex flex-col  gap-24 "
        >
          <Herosection />
          <VideoPlayer />
          <Performance />
          <Aboutus />
          <Footer />
        </div>
      </main>
    </>
  );
}
