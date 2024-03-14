import { Herosection, Stickylogo, TopFlag } from "@/components/sections";
import VideoPlayer from "@/components/sections/videosection/video-player";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative z-10 overflow-x-clip h-full ">
        <TopFlag />
        <Stickylogo />
        <div
          className="relative  pt-16 z-20 h-[500vh]  max-w-7xl mx-auto 
        border-l border-r flex flex-col gap-24 "
        >
          <Herosection />
          <VideoPlayer />
        </div>
      </main>
    </>
  );
}
