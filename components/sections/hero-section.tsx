import React from "react";
import { Button, Rightarrow } from "../ui";

export default function Herosection() {
  return (
    <div className="h-[80vh] w-full  flex items-center justify-center">
      <div className="flex flex-col pt-24 max-md:pt-52   max-md:px-2   gap-8 p-6 ">
        <div className="flex flex-col pb-4 border-b gap-4">
          <p className="text-2xl  font-base">We are ,</p>
          <p className="text-2xl md:text-3xl font-base">Creators of Devin ,</p>
          <p className="text-[28px] md:text-4xl capitalize font-medium ">
            the first AI software engineer.
          </p>
        </div>

        <div className="flex flex-col  gap-6">
          <div className="flex flex-col gap-4 pb-4 border-b">
            {" "}
            <p className="text-base md:text-lg dark:font-extralight font-light">
              We are an applied AI lab focused on reasoning, and code is just
              the beginning.
            </p>
            <Button
              variant={"default"}
              className="w-max border text-sm md:text-base font-semibold flex-1 "
            >
              Learn more here
            </Button>
          </div>

          <div className="flex flex-col gap-4 pb-4 border-b">
            {" "}
            <p className="text-base md:text-lg dark:font-extralight capitalize font-light flex flex-col gap-4">
              {
                " A compact team .  Based in New York and the San Francisco Bay Area. "
              }
            </p>
            <Button
              variant={"default"}
              className="w-max border text-sm md:text-base font-semibold flex-1 "
            >
              Come work with us
            </Button>
          </div>
        </div>

        <Button
          variant={"link"}
          className="w-max h-max border px-4 pb-2 flex text-start gap-1  text-sm md:text-base tracking-wide   font-semibold "
        >
          {" Hire Devin for engineering "} <br className="md:hidden" />{" "}
          <span className="max-md:hidden flex-1 pointer-events-none">
            <Rightarrow />
          </span>
          {" Join the waitlist now !"}
        </Button>

        <div className="flex w-full justify-end">
          <Button
            variant={"default"}
            className="w-max text-sm md:text-base border capitalize font-semibold "
          >
            privacy policy
          </Button>
        </div>
      </div>
    </div>
  );
}
