import React from "react";
import GraphContent from "./performance-graph";
import Image from "next/image";
import Texttop from "./performance-text";
import TypewriterParagraph from "@/components/ui/typewriter-word";

export default function Performance() {
  
  return (
    <div className="w-full h-full  px-2 max-w-6xl pb-4 border-b space-y-20 max-md:space-y-16 mx-auto ">
      <Texttop />
      {/* <GraphContent /> */}
      <GraphContent />
      <Image
        src="/devingraph.png"
        alt="devingraph"
        width={1000}
        height={1000}
        className="w-full md:hidden h-full rounded-3xl shadow-2xl border"
      />
      {/* <GraphContent /> */}

      <div className="text-2xl max-md:text-xl py-4 text-center font-logo hover:underline underline-offset-4 font-medium">
        <TypewriterParagraph
          text={
            "We plan to publish a more detailed technical report soon — stay tuned for more details."
          }
          delay={0.4}
          speed={0.2}
        />
      </div>
    </div>
  );
}
