"use client";
import React from "react";
import { motion } from "framer-motion";
import TypewriterParagraph from "@/components/ui/typewriter-word";

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
  },
  animate: {
    opacity: 1,

    y: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeInOut",
      damping: 80,
      stiffness: 50,
    },
  },
};

export default function VideoText() {
  return (
    <motion.div
      variants={containervariants}
      initial="initial"
      animate="animate"
      className="w-full max-w-6xl p-6 pb-12 border-b flex flex-col space-y-16 mx-auto"
    >
      <motion.div
        variants={textvariants}
        className="py-3 space-y-4 max-md:text-center font-bold uppercase"
      >
        {" "}
        <p className="text-6xl max-md:text-4xl">Introducing Devin,</p>
        <p className="text-6xl max-md:text-4xl text-end max-md:text-center  ">
          {" "}
          The first AI software engineer
        </p>
      </motion.div>
      <motion.p
        variants={textvariants}
        className="text-3xl max-md:text-2xl font-logo  tracking-wider font-medium text-center"
      >
        Meet Devin,
        <br className="md:hidden" /> the world’s first fully autonomous AI
        software engineer.
      </motion.p>
      <motion.div
        variants={textvariants}
        className="space-y-6 max-md:text-start text-center text-lg  max-md:px-4  mx-auto font-medium"
      >
        <>
          <TypewriterParagraph
            text="   Devin is a
            tireless, skilled teammate, 
             equally ready to build alongside you or independently complete tasks
             for you to review."
            delay={1}
            speed={0.2}
          />
        </>
        <p>
          With Devin, engineers can focus on more interesting problems and
          engineering teams can strive for more ambitious goals.
        </p>
      </motion.div>
      <div className="space-y-5 max-md:px-4 font-medium">
        <motion.p
          variants={textvariants}
          className="text-2xl font-logo tracking-wider"
        >
          {"Devin's Capabilities : "}
        </motion.p>
        <motion.p variants={textvariants} className="text-lg ">
          With our advances in long-term reasoning and planning, Devin can plan
          and execute complex engineering tasks requiring thousands of
          decisions. Devin can recall relevant context at every step, learn over
          time, and fix mistakes.
        </motion.p>
        <motion.p variants={textvariants} className="text-lg ">
          {
            "We've also equipped Devin with common developer tools including the shell, code editor, and browser within a sandboxed compute environment—everything a human would need to do their work."
          }
        </motion.p>
        <motion.p variants={textvariants} className="text-lg ">
          {
            "Finally, we've given Devin the ability to actively collaborate with the user. Devin reports on its progress in real time, accepts feedback, and works together with you through design choices as needed."
          }
        </motion.p>
      </div>
    </motion.div>
  );
}
