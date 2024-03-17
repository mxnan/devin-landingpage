import { Aboutus, Footer, Herosection, TopFlag } from "@/components/sections";
import Performance from "@/components/sections/performancesection/performance";
import VideoPlayer from "@/components/sections/videosection/video-player";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative z-10 overflow-x-clip h-full ">
        <TopFlag />

        <div
          className="relative  pt-16 z-20   max-w-7xl mx-auto 
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
