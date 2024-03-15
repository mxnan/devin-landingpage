import React from "react";
import Graphsvg from "./graph-svg";

export default function Performance() {
  return (
    <div className="flex w-full h-[100vh] max-w-6xl mx-auto ">
      
      <div className="flex overflow-clip max-w-5xl mx-auto h-max rounded-3xl ">
        <Graphsvg />
      </div>
    </div>
  );
}
