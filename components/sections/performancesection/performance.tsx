import React from "react";
import Graphsvg from "./graph-svg";

export default function Performance() {
  return (
    <div className="flex w-full max-w-6xl mx-auto ">
      
      <div className="flex overflow-clip h-2/3 rounded-3xl ">
        <Graphsvg />
      </div>
    </div>
  );
}
