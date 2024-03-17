"use client";

import React, { useRef } from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { ToggleTheme, Twittericon } from "../ui";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Stickylogo() {
  return (
    <motion.div className="fixed flex items-center flex-col z-0 gap-4 left-6 top-1/2 -translate-y-1/2 ">
      <Devinlogo />
      <p className="text-4xl font-logo uppercase">Cognition AI</p>
      <div className="p-2 rounded-full border hover-transition hover:scale-110 transition-transform z-10">
        <Twittericon />
      </div>
      <div className="p-2 rounded-full border hover-transition hover:scale-110 transition-transform z-10">
        <Linkedin size={28} strokeWidth={1} />
      </div>
      <ToggleTheme />
    </motion.div>
  );
}
