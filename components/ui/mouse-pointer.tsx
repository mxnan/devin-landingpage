"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

export default function Mouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const xScale = useTransform(mouseX, (x) => {
    const diff = x - mousePosition.x;
    return Math.max(0.2, Math.min(2, 1 + diff / 200));
  });

  const yScale = useTransform(mouseY, (y) => {
    const diff = y - mousePosition.y;
    return Math.max(0.2, Math.min(2, 1 + diff / 200));
  });

  const offsetX = useTransform(mouseX, (x) => x + 8); // Offset the x position by 20px
  const offsetY = useTransform(mouseY, (y) => y + 8); // Offset the y position by 20px

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        xScale.set(2);
        yScale.set(2);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, xScale, yScale]);

  return (
    <motion.div
      ref={circleRef}
      className="fixed pointer-events-none z-[999]"
    
      style={{
        x: offsetX , // Use the offsetX value for the x position
        y: offsetY, // Use the offsetY value for the y position
        scaleX: xScale,
        scaleY: yScale,
      }}
    >
      <div className="w-4 h-4 rounded-full bg-[#2b2727] dark:bg-[#e0e0e0]" />
    </motion.div>
  );
}
