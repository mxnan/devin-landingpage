import { Herosection, Stickylogo, TopFlag } from "@/components/sections";

import React from "react";

export default function page() {
  return (
    <>
      <main className="w-full relative overflow-x-clip h-[500vh]">
        <TopFlag />
        <Stickylogo />
        <div className="mt-10 h-full w-full  flex flex-col gap-24 max-w-7xl mx-auto ">
          <Herosection />
          <div className="h-[100vh]"></div>
        </div>
      </main>
    </>
  );
}
