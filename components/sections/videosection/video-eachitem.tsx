"use client";

import TypewriterParagraph from "@/components/ui/typewriter-word";
import React from "react";
import { motion } from "framer-motion";

interface VideoItemProps {
  id: number;
  title: string;
  description: string;
  videolink: string;
}
const containervariants = {
  animate: {
    transition: {
      staggerChildren: 0.5, // Adjust the stagger duration as needed
    },
  },
};
const textvariants = {
  initial: {
    opacity: 0,

    x: -300,
  },
  animate: {
    opacity: 1,

    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      ease: "easeInOut",
    },
  },
};

export default function VideoEachItem({ item }: { item: VideoItemProps }) {
  return (
    <div className="w-full flex flex-col max-lg:items-center space-y-16">
      <motion.div
        variants={containervariants}
        initial="initial"
        animate="animate"
        className="flex flex-col w-full max-xl:max-w-2xl  max-xl:space-y-10 mx-auto items-center justify-center
    xl:max-w-6xl xl:flex-row xl:justify-between
    "
      >
        <div className=" flex flex-col px-4 xl:w-1/2 space-y-4 ">
          <motion.p
            variants={textvariants}
            className="text-2xl font-logo tracking-wide font-light "
          >
            {item.title}
          </motion.p>
          <motion.div variants={textvariants} className="text-lg font-medium">
            <TypewriterParagraph
              text={item.description}
              delay={0.5}
              speed={0.3}
            />
          </motion.div>
        </div>
        <motion.div
          variants={textvariants}
          className="flex max-xl:w-full  max-xl:h-[30vh] xl:h-[30vh] shadow-xl rounded-3xl border-2  "
        >
          <iframe
            className="z-10 aspect-auto 
          xl:aspect-video 
          max-xl:w-full 
          overflow-clip rounded-3xl "
            src={item.videolink}
            title="videos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}
