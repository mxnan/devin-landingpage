"use client";
import React from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { Twittericon } from "../ui";
import { motion } from "framer-motion";
import Link from "next/link";
import DevinlogoWhite from "../ui/devinlogowhite";

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

    y: 150,
  },
  animate: {
    opacity: 1,

    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export default function Footer() {
  return (
    <div
      className="w-full   p-6 flex flex-col 
     mx-auto space-y-16 mb-12"
    >
      <motion.div
        variants={containervariants}
        initial="initial"
        animate="animate"
        className=" flex max-md:flex-col items-center justify-center gap-6"
      >
        <div className="flex items-center justify-center gap-1 space-x-10">
          <motion.div
            variants={textvariants}
            className="xl:hidden dark:hidden max-sm:hidden"
          >
            <Devinlogo />
          </motion.div>
          <motion.div
            variants={textvariants}
            className="xl:hidden  max-sm:hidden"
          >
            <DevinlogoWhite />
          </motion.div>
        
          <motion.p
            variants={textvariants}
            className=" text-4xl md:text-6xl whitespace-nowrap font-logo uppercase"
          >
            Cognition AI
          </motion.p>
          <motion.div variants={textvariants} className="flex gap-3">
            <div className="p-2 rounded-full  hover-transition hover:scale-110 transition-transform  border z-10">
              <Twittericon />
            </div>
            <div className="p-2 rounded-full  hover-transition hover:scale-110 transition-transform border z-10">
              <Linkedin size={28} strokeWidth={1} />
            </div>
          </motion.div>
        </div>

        <motion.p variants={textvariants} className="text-base font-medium">
          © 2024 Cognition AI
        </motion.p>
      </motion.div>
      <motion.p
        variants={textvariants}
        className="text-sm font-normal text-center"
      >
        Developed by{" "}
        <a
          className="font-semibold cursor-pointer"
          onClick={() => window.open("https://github.com/mxnan")}
        >
          @mxnan
        </a>
      </motion.p>
    </div>
  );
}
