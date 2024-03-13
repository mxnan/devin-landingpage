import React from "react";
import { Button } from "../ui";

export default function Herosection() {
  return (
    <div className="h-[80vh] w-full  flex items-center justify-center">
      <div className="flex flex-col gap-8 p-6 ">
        <div className="flex flex-col pb-4 border-b gap-4">
          <p className="text-2xl font-base">We are ,</p>
          <p className="text-3xl font-base">Creators of Devin ,</p>
          <p className="text-4xl capitalize font-medium ">
            the first AI software engineer.
          </p>
        </div>

        <div className="flex flex-col  gap-6">
          <div className="flex flex-col gap-4 pb-4 border-b">
            {" "}
            <p className="text-xl dark:font-extralight font-light">
              We are an applied AI lab focused on reasoning, and code is just
              the beginning.
            </p>
            <Button
              variant={"default"}
              className="w-max border font-semibold flex-1"
            >
              Learn more here
            </Button>
          </div>

          <div className="flex flex-col gap-4 pb-4 border-b">
            {" "}
            <p className="text-xl dark:font-extralight font-light flex flex-col gap-4">
              {
                " We're a compact team based in New York and the San Francisco Bay Area. "
              }
            </p>
            <Button
              variant={"default"}
              className="w-max border font-semibold flex-1 "
            >
              Come Work with Us
            </Button>
          </div>
        </div>

        <Button
          variant={"default"}
          className="w-max border px-4 py-1 text-xl tracking-wide   font-semibold flex"
        >
          {" Hire Devin for engineering – Join the waitlist now !"}
        </Button>

        <div className="flex w-full justify-end">
          <Button
            variant={"default"}
            className="w-max  border capitalize font-semibold "
          >
            privacy policy
          </Button>
        </div>
      </div>
    </div>
  );
}
