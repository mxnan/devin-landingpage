import {
  Aboutus,
  Footer,
  Herosection,
  Performance,
  Stickylogo,
  TopFlag,
  VideoPlayer,
} from "@/components/sections";
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
          className="
          relative pt-16 z-10  max-w-7xl mx-auto 
          bg-container-light-gradient dark:bg-container-dark-gradient
          overflow-x-clip  
          flex flex-col  gap-24 
          border-l border-r dark:border-zinc-900 border-stone-50 
           "
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
