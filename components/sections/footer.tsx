"use client";
import React from "react";
import Devinlogo from "../ui/devin-logo";
import { Linkedin } from "lucide-react";
import { Twittericon } from "../ui";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="w-full  h-[20vh] p-6 flex flex-col 
     mx-auto space-y-16 mb-12"
    >
      <motion.div className=" flex items-center justify-center space-x-10">
        <div className="xl:hidden">
          <Devinlogo />
        </div>

        <p className=" text-4xl md:text-6xl font-logo uppercase">
          Cognition AI
        </p>
        <>
          {" "}
          <div className="p-2 rounded-full border z-10">
            <Twittericon />
          </div>
          <div className="p-2 rounded-full border z-10">
            <Linkedin size={28} strokeWidth={1} />
          </div>
        </>

        <p className="text-base font-medium">© 2024 Cognition AI</p>
      </motion.div>
      <p className="text-sm font-normal text-center">
        Developed by{" "}
        <a
          className="font-semibold cursor-pointer"
          onClick={() => window.open("https://github.com/mxnan")}
        >
          @mxnan
        </a>
      </p>
    </div>
  );
}
