"use client";

import React, { useEffect, useState } from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { ToggleTheme, Twittericon } from "../ui";
import { useAnimation, motion } from "framer-motion";

export default function Stickylogo() {
  const [isStickyBottom, setIsStickyBottom] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const footerPosition = document.body.scrollHeight;
      setIsStickyBottom(scrollPosition >= footerPosition);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isStickyBottom) {
      controls.start({
         bottom: "4rem",
         
         left: "50%",
    
    }); // Adjust the distance from the bottom as needed
    } else {
      controls.start({ 
        top: "4rem",
      
    }); // Adjust the distance from the top as needed
    }
  }, [isStickyBottom, controls]);

  return (
    <motion.div
    animate={controls}
    className="fixed flex items-center flex-col gap-4 left-4  ">
      <Devinlogo />
      <p className="text-4xl font-logo uppercase">Cognition AI</p>
      <div className="p-2 rounded-full border">
        <Twittericon />
      </div>
      <div className="p-2 rounded-full border">
        <Linkedin size={28} strokeWidth={1} />
      </div>
      <ToggleTheme />
    </motion.div>
  );
}
