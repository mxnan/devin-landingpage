import React from "react";

export default function Texttop() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center pt-6 border-t">
        <p className="text-5xl font-logo">
          real world software engineering performance
        </p>
        <p className="text-3xl font-logo">[SWE-Bench]</p>
      </div>
      <div className="flex flex-col  justify-around relative   max-w-4xl mx-auto w-full">
        <div className="space-y-8 py-10">
          <p className="font-logo text-3xl ">{"Devin's Performance :"}</p>
          <p className="text-lg font-medium">
            {
              "We evaluated Devin on SWE-bench, a challenging benchmark that asks agents to resolve real-world GitHub issues found in open source projects like Django and scikit-learn."
            }
          </p>
          <p className="text-lg font-medium">
            {
              "Devin correctly resolves 13.86%* of the issues end-to-end, far exceeding the previous state-of-the-art of 1.96%. Even when given the exact files to edit, the best previous models can only resolve 4.80% of issues."
            }
          </p>
        </div>
      </div>
    </>
  );
}
