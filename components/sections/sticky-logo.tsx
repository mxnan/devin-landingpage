"use client";

import React from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { ToggleTheme, Twittericon } from "../ui";
import { motion } from "framer-motion";

export default function Stickylogo() {
  return (
  
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed flex items-center flex-col gap-4 left-6 top-16  "
      >
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
