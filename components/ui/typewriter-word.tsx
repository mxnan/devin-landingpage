"use client";

import React from "react";
import { motion } from "framer-motion";
interface TypewriterProps {
  text: string;
  delay: number;
  speed: number;
}

export default function TypewriterParagraph({
  text,
  delay,
  speed,
}: TypewriterProps) {

  const words = text.split(" ");

  return (
    <motion.p
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: speed,// Adjust the speed of each character
            staggerDirection: 1,
             
          },
        },
      }}
      initial="hidden"
      animate="visible"
     
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.p>
  );
}
