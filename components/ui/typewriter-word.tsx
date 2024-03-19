"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { margin: "-50px" });

  const words = text.split(" ");

  return (
    <motion.p
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: speed, // Adjust the speed of each character
            staggerDirection: 1,
          },
        },
      }}
      initial="hidden"
      //animate="visible"
      animate={inView ? "visible" : "hidden"} // Start animation when in view
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
