import {
  Aboutus,
  Footer,
  Herosection,
  Stickylogo,
  TopFlag,
} from "@/components/sections";
import Performance from "@/components/sections/performancesection/performance";
import VideoPlayer from "@/components/sections/videosection/video-player";

import React, { useRef } from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative  overflow-x-clip h-max dark:bg-[#0A0A0A] bg-slate-100 ">
        <TopFlag />
        <Stickylogo />
        <div
          className="relative bg-background text-foreground pt-16 z-10  max-w-7xl mx-auto 
        border-l border-r flex flex-col gap-24 "
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
