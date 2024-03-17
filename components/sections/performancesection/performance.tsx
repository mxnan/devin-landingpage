import React from "react";
import GraphContent from "./performance-graph";
import Image from "next/image";
import Texttop from "./performance-text";

export default function Performance() {
  return (
    <div className="w-full h-full  px-2 max-w-6xl pb-4 border-b space-y-20 max-md:space-y-16 mx-auto ">
      <Texttop />
      <GraphContent />
      <Image
        src="/devingraph.png"
        alt="devingraph"
        width={1000}
        height={1000}
        className="w-full md:hidden h-full rounded-3xl shadow-2xl border"
      />

      <p className="text-2xl py-4 text-center font-logo hover:underline underline-offset-4 font-medium">
        {
          "We plan to publish a more detailed technical report soon — stay tuned for more details."
        }
      </p>
    </div>
  );
}
