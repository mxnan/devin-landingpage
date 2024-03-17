import React from "react";
import { Button, Rightarrow } from "../ui";

export default function Herosection() {
  return (
    <div className="h-[90vh] w-full  flex items-center justify-center">
      <div className="flex flex-col pt-24 max-md:pt-36 max-md:items-center max-md:text-center max-md:px-8   gap-12 p-6 ">
        <div className="flex flex-col font-medium  pb-4 border-b gap-4">
          <p className="text-3xl ">We are ,</p>
          <p className="text-4xl md:text-3xl ">Creators of Devin .</p>
          <span></span>
        </div>

        <div className="flex flex-col max-md:items-center  gap-10">
          <div className="flex flex-col max-md:items-center gap-6 ">
            {" "}
            <p className="text-base md:text-lg xl:text-xl dark:font-extralight font-medium">
              We are an applied AI lab focused on reasoning, and code is just
              the beginning.
            </p>
            <Button
              variant={"default"}
              className="w-max  text-sm md:text-base font-semibold flex-1 "
            >
              Learn more here
            </Button>
          </div>
          <div className="flex flex-col max-md:items-center gap-6">
            {" "}
            <p className="text-base md:text-lg xl:text-xl dark:font-extralight capitalize font-medium">
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
          className="w-max font-logo hover:border-foreground tracking-widest h-max border-2 px-4 pb-2 flex text-start gap-1 xl:text-xl text-sm md:text-base "
        >
          {" Hire Devin for engineering "} <br className="md:hidden" />{" "}
          <span className=" flex-1 pointer-events-none">
            <Rightarrow />
          </span>
          {" Join the waitlist now !"}
        </Button>

        <div className="flex w-full justify-end max-md:justify-center">
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
