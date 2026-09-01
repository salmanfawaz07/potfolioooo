import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 24,
  className = "",
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
