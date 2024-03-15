import React from "react";
import GraphContent from "./performance-graph";

export default function Performance() {
  return (
    <div className="w-full h-[100vh] px-2 max-w-6xl space-y-20 mx-auto ">
      <div className="w-full flex flex-col items-center justify-center pt-6 border-t">
        <p className="text-5xl font-logo">
          real world software engineering performance
        </p>
        <p className="text-3xl font-logo">[SWE-Bench]</p>
      </div>
      <GraphContent />
    </div>
  );
}
