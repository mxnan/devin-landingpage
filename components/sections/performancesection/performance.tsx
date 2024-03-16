import React from "react";
import GraphContent from "./performance-graph";
import Image from "next/image";

export default function Performance() {
  return (
    <div className="w-full h-full  px-2 max-w-6xl space-y-20 max-md:space-y-16 mx-auto ">
      <div className="w-full flex flex-col items-center justify-center pt-6 border-t">
        <p className="text-5xl font-logo">
          real world software engineering performance
        </p>
        <p className="text-3xl font-logo">[SWE-Bench]</p>
      </div>
      <GraphContent />
      <Image
        src="/devingraph.png"
        alt="devingraph"
        width={1000}
        height={1000}
        className="w-full md:hidden h-full rounded-3xl shadow-2xl border"
      />
      <div className="flex flex-col  justify-around relative   max-w-4xl mx-auto w-full">
        <div className="space-y-8 py-10">
          <p className="font-logo text-2xl ">{"Devin's Performance :"}</p>
          <p className="text-base font-medium">
            {
              "We evaluated Devin on SWE-bench, a challenging benchmark that asks agents to resolve real-world GitHub issues found in open source projects like Django and scikit-learn."
            }
          </p>
          <p className="text-base font-medium">
            {
              "Devin correctly resolves 13.86%* of the issues end-to-end, far exceeding the previous state-of-the-art of 1.96%. Even when given the exact files to edit, the best previous models can only resolve 4.80% of issues."
            }
          </p>
        </div>
        <p className="text-lg py-8 font-logo hover:underline underline-offset-4 font-medium">
          {
            "We plan to publish a more detailed technical report soon — stay tuned for more details."
          }
        </p>
      </div>
    </div>
  );
}
