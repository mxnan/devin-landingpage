"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleTheme } from "../ui";

export default function TopFlag() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= scrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <motion.div
      className={`fixed w-full top-0 h-10 border-b dark:border-gray-200 border-gray-900 ${
        isVisible ? "" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex h-full items-center justify-center">
        <p className="flex items-center text-sm gap-2">
          Elevated by $21M Series-A, led by Founders Fund. Dive in.{" "}
          <a className="font-semibold">Learn more twitter link</a>
        </p>
      </div>

      <div className="fixed flex-1 left-4 top-20">
        <ToggleTheme />
        
      </div>
    </motion.div>
  );
}
