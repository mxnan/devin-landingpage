import { Herosection, Stickylogo, TopFlag } from "@/components/sections";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative overflow-x-clip h-[500vh]">
        <TopFlag />
        <Stickylogo />
        <div className=" h-full w-full border-l border-r pt-16 flex flex-col gap-24 max-w-7xl mx-auto ">
          <Herosection />
          <div className="h-[100vh]"></div>
        </div>
      </main>
    </>
  );
}
