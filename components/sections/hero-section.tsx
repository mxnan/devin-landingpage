"use client";

import React, { useRef } from "react";
import { Button, Rightarrow } from "../ui";
import { motion, useInView } from "framer-motion";

const containervariants = {
  animate: {
    transition: {
      staggerChildren: 0.3, // Adjust the stagger duration as needed
    },
  },
};
const textvariants = {
  initial: {
    opacity: 0,
    x: 200,
    y: -150,
    scale: 1.5
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      type: "tween",
    },
  },
};

export default function Herosection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px" });
  // for using animation each time inview

  return (
    <div className="h-[90vh] w-full  flex items-center justify-center">
      <motion.div
        variants={containervariants}
        ref={ref}
        initial="initial"
        //animate="animate"
        animate={isInView ? "animate" : "initial"}
        className="flex flex-col pt-24 max-md:pt-36 max-md:items-center max-md:text-center max-md:px-8   gap-12 p-6 "
      >
        <motion.div
          variants={textvariants}
          className="flex flex-col font-medium  pb-4 border-b gap-4"
        >
          <p className="text-3xl ">We are ,</p>
          <p className="text-4xl md:text-3xl ">Creators of Devin .</p>
          <span></span>
        </motion.div>

        <motion.div
          variants={textvariants}
          className="flex flex-col max-md:items-center  gap-10"
        >
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
        </motion.div>

        <Button
          variant={"link"}
          className="w-max font-logo hover:border-foreground  tracking-widest h-max border-[1px] px-4 pb-2 flex text-start gap-1 hover:gap-8 xl:text-xl text-sm md:text-base "
        >
          {" Hire Devin for engineering "} <br className="md:hidden" />{" "}
          <span className=" flex w-max">
            <Rightarrow />
          </span>
          {" Join the waitlist now !"}
        </Button>

        <motion.div
          variants={textvariants}
          className="flex w-full justify-end max-md:justify-center"
        >
          <Button
            variant={"default"}
            className="w-max text-sm md:text-base border capitalize font-semibold "
          >
            privacy policy
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
