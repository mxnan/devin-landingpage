import React from "react";

export default function Texttop() {
  return (
    <>
      <div className="w-full flex flex-col gap-8 text-center">
        <p className="text-5xl max-md:text-4xl font-logo ">
          real world software engineering performance
        </p>
        <p className="text-3xl font-logo">[SWE-Bench]</p>
      </div>

      <div className="space-y-8 font-medium px-6 ">
        <p className="font-logo text-3xl ">{"Devin's Performance :"}</p>
        <p className="text-lg">
          {
            "We evaluated Devin on SWE-bench, a challenging benchmark that asks agents to resolve real-world GitHub issues found in open source projects like Django and scikit-learn."
          }
        </p>
        <p className="text-lg ">
          {
            "Devin correctly resolves 13.86%* of the issues end-to-end, far exceeding the previous state-of-the-art of 1.96%. Even when given the exact files to edit, the best previous models can only resolve 4.80% of issues."
          }
        </p>
      </div>
    </>
  );
}
