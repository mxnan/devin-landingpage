import React from "react";
import GraphContent from "./performance-graph";

export default function Performance() {
  return (
    <div className="w-full h-full  px-2 max-w-6xl space-y-20 mx-auto ">
      <div className="w-full flex flex-col items-center justify-center pt-6 border-t">
        <p className="text-5xl font-logo">
          real world software engineering performance
        </p>
        <p className="text-3xl font-logo">[SWE-Bench]</p>
      </div>
      <GraphContent />
      <div className="flex relative h-[50vh] max-w-4xl mx-auto w-full">
        create this section
      </div>
    </div>
  );
}
