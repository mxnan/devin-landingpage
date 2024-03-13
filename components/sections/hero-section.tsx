import React from "react";

export default function Herosection() {
  return (
    <div className="h-[80vh] flex items-center justify-start">
      <div className="flex flex-col gap-6">
        <div>
          <div className="  flex flex-col gap-2">
            <p className="text-5xl capitalize">Makers of Devin,</p>
            <p className="text-6xl capitalize">
              the first AI software engineer.
            </p>
            <a className="font-semibold text-2xl ">Learn more here.</a>
          </div>
        </div>

        <p className="text-3xl">
          We are an applied AI lab focused on reasoning, and code is just the
          beginning.
        </p>
        <p className="text-3xl">
          To hire Devin for engineering work, please join the waitlist.
        </p>
        <p className="text-xl flex flex-col gap-1">
          {
            " We're a small team based in New York and the San Francisco Bay Area. "
          }
          <a className="font-semibold text-2xl ">Come work with us.</a>
        </p>
        <p>privacy policy</p>
      </div>
    </div>
  );
}
