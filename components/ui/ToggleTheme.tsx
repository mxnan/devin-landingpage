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

  const handleThemeToggle = (newTheme: string) => {
    setTheme(newTheme);
    // Reload the page after a short delay to ensure the theme change is applied
    setTimeout(() => {
      window.location.reload();
    }, 30);
  };

  return (
    <motion.div className="flex items-center  ">
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
          onClick={() => handleThemeToggle("light")}
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
          onClick={() => handleThemeToggle("dark")}
        >
          <Moon className=" w-8 h-8   " />
        </motion.button>
      )}
    </motion.div>
  );
}
