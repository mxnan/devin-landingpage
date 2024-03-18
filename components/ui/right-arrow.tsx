"use client";
import React from "react";
import { motion } from "framer-motion";

const Rightarrow = () => {
  return (
    <motion.svg
      whileHover={{
        scaleX: 1,
        scaleY: 1,
        strokeWidth: 1.5,
        rotate: 90,
        transition: {
          duration: 0.2,
          type: "tween",
          ease: "easeInOut",
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-move-right stroke-foreground rounded-full"
    >
      <motion.path d="M18 8L22 12L18 16" />
      <motion.path d="M2 12H22" />
    </motion.svg>
  );
};

export { Rightarrow };
