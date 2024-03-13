"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";



export function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div className="fixed top-20 left-4  flex items-center  ">
      {theme === "dark" ? (
        <motion.button
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          onClick={() => setTheme("light")}
        >
          <Sun className=" w-8 h-8  " />
        </motion.button>
      ) : (
        <motion.button
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          onClick={() => setTheme("dark")}
        >
          <Moon className=" w-8 h-8   " />
        </motion.button>
      )}
    </motion.div>
  );
}
