"use client";
import React from "react";
import { motion } from "framer-motion";

const containervariants = {
  animate: {
    transition: {
      staggerChildren: 0.6, // Adjust the stagger duration as needed
    },
  },
};
const textvariants = {
  initial: {
    opacity: 0,
    y: -100,
    x: 300,
  },
  animate: {
    opacity: 1,

    y: 0,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

export default function Texttop() {
  return (
    <motion.div
      variants={containervariants}
      initial="initial"
      animate="animate"
      className="space-y-10"
    >
      {" "}
      <div className="w-full flex flex-col gap-8 text-center">
        <motion.p
          variants={textvariants}
          className="text-5xl max-md:text-4xl font-logo "
        >
          real world software engineering performance
        </motion.p>
        <motion.p variants={textvariants} className="text-3xl font-logo">
          [SWE-Bench]
        </motion.p>
      </div>
      <div className="space-y-8 font-medium px-6 ">
        <motion.p variants={textvariants} className="font-logo text-3xl ">
          {"Devin's Performance :"}
        </motion.p>
        <motion.p variants={textvariants} className="text-lg">
          {
            "We evaluated Devin on SWE-bench, a challenging benchmark that asks agents to resolve real-world GitHub issues found in open source projects like Django and scikit-learn."
          }
        </motion.p>
        <motion.p variants={textvariants} className="text-lg ">
          {
            "Devin correctly resolves 13.86%* of the issues end-to-end, far exceeding the previous state-of-the-art of 1.96%. Even when given the exact files to edit, the best previous models can only resolve 4.80% of issues."
          }
        </motion.p>
      </div>
    </motion.div>
  );
}
