"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToggleTheme } from "../ui";
import { Stickylogo } from ".";

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
      className={`fixed w-full bg-background  top-0 h-10 border-b z-50 ${
        isVisible ? "" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className=" h-full  flex items-center shadow-lg justify-center">
        <p className="flex items-center text-sm  gap-2">
          Elevated by $21M Series-A, led by Founders Fund. Dive in.{" "}
          <a className="font-semibold">Learn more twitter link</a>
        </p>
      </div>
      <Stickylogo />
    </motion.div>
  );
}
