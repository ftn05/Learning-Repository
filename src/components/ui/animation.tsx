
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "slide-left" | "slide-right" | "zoom-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

export const AnimateOnScroll = ({
  children,
  type = "fade-in",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const animations = {
    "fade-in": {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={animations[type]}
      transition={{ duration: 0.5, delay: delay / 10 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
