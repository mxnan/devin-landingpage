"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const svganimation: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: -200,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      type: "tween",
    },
  },
};

const baranimation: Variants = {
  initial: {
    y: 500,
  },
  animate: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.5,
      ease: "easeInOut",
      type: "tween",
      staggerDirection: -1,
    },
  },
};

export default function GraphContent() {
  return (
    <div className="flex max-md:hidden relative h-[50vh] max-w-4xl mx-auto w-full">
      <p className="font-logo text-3xl absolute top-10 right-5 text-background ">
        {"% Issues resolved"}
      </p>
      <span className="absolute text-background right-5 bottom-10">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up-from-line overflow-visible"
        >
          <motion.path
            d="m18 9-6-6-6 6"
            color="foreground"
            variants={svganimation}
            initial="initial"
            animate="animate"
          />
          <motion.path
            d="M12 3v14"
            color="foreground"
            variants={svganimation}
            initial="initial"
            animate="animate"
          />
          <motion.path d="M5 21h14" color="foreground" />
        </motion.svg>
      </span>

      {/* all graph bars container */}
      <div className="flex items-end gap-10 px-6 w-full h-full bg-foreground overflow-hidden rounded-3xl">
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, aqua 0%, transparent 100%)",

            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[80%]  relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-3 text-background"
          >
            {"13.84%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-2xl tracking-wide absolute bottom-3 text-center w-full  text-foreground"
          >
            Devin
          </motion.p>
        </motion.div>
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, green 0%, transparent 100%)",
            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[49%] relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-5 text-background"
          >
            {"4.80%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-lg absolute bottom-2 text-center w-full  text-foreground"
          >
            Claude 2
          </motion.p>
        </motion.div>
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, green 0%, transparent 100%)",
            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[39%] relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-5 text-background"
          >
            {"3.97%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-base absolute bottom-2 text-center w-full  text-foreground"
          >
            llama 13b
          </motion.p>
        </motion.div>
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, green 0%, transparent 100%)",
            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[29%] relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-5 text-background"
          >
            {"3.01%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-base absolute bottom-1 text-center w-full text-foreground"
          >
            llama 7b
          </motion.p>
        </motion.div>
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, green 0%, transparent 100%)",
            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[16%] relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-5 text-background"
          >
            {"1.74%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-sm absolute bottom-1 text-center w-full  text-foreground"
          >
            gpt-4
          </motion.p>
        </motion.div>
        <motion.div
          variants={baranimation}
          whileHover={{
            background: "linear-gradient(to top, green 0%, transparent 100%)",
            transition: {
              duration: 1,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          initial="initial"
          animate="animate"
          className="h-[9%] relative w-24 rounded-t-xl bg-background"
        >
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-3xl absolute -top-10 left-5 text-background"
          >
            {"0.52%"}
          </motion.p>
          <motion.p
            variants={baranimation}
            initial="initial"
            animate="animate"
            className="font-logo text-sm absolute bottom-1 text-center w-full  text-foreground"
          >
            gpt-3.5
          </motion.p>{" "}
        </motion.div>
      </div>
      {/* all graph bars container */}
      <p className=" absolute -bottom-14  left-1/2 -translate-x-1/2 font-medium text-center text-xs w-2/3 ">
        {
          "*Devin was evaluated on a random 25% subset of the dataset. Devin was unassisted,   "
        }
        {"  whereas all other models were assisted "}
        {
          "  (meaning the model was told exactly which files need to be edited)."
        }
      </p>
    </div>
  );
}
