import { Herosection, Stickylogo, TopFlag } from "@/components/sections";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative overflow-x-clip h-[500vh]">
        <TopFlag />
        <Stickylogo />
        <div
          className=" h-full pt-16  max-w-7xl mx-auto 
        border-l border-r flex flex-col gap-24 "
        >
          <Herosection />
          <div className="h-[100vh]"></div>
        </div>
      </main>
    </>
  );
}
