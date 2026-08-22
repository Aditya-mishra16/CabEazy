"use client";

import React from "react";
import { motion, MotionProps } from "motion/react";

type RevealVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type AnimProps = { opacity: number; y?: number; x?: number; scale?: number };

const hiddenStates: Record<RevealVariant, AnimProps> = {
  fadeUp: { opacity: 0, y: 28 },
  fadeIn: { opacity: 0 },
  slideLeft: { opacity: 0, x: -32 },
  slideRight: { opacity: 0, x: 32 },
  scaleUp: { opacity: 0, scale: 0.93 },
};

const visibleState: AnimProps = { opacity: 1, y: 0, x: 0, scale: 1 };

/**
 * ScrollReveal — Viewport-triggered entrance animation wrapper.
 *
 * Content is ALWAYS present in the SSR HTML. Animation only controls opacity/transform.
 * Respects prefers-reduced-motion via the CSS rule in globals.css.
 *
 * Usage:
 *   <ScrollReveal variant="fadeUp" delay={0.1}>
 *     <MyComponent />
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.15,
}: ScrollRevealProps) {
  const motionProps: MotionProps = {
    initial: hiddenStates[variant],
    whileInView: visibleState,
    viewport: { once, amount },
    transition: { duration, delay, ease: EASE },
  };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
