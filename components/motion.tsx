"use client";

import {
  MotionConfig,
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.65,
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

export function Float({
  children,
  className,
  amplitude = 8,
  duration = 6,
}: {
  children?: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  className,
  offset = 40,
}: {
  children?: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

const arcVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" },
  }),
};

export function SignalArcs({ className }: { className?: string }) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      stroke="#E5484D"
      strokeWidth={9}
      strokeLinecap="round"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.path d="M8 68A24 24 0 0 1 32 92" variants={arcVariants} custom={0} />
      <motion.path d="M8 50A42 42 0 0 1 50 92" variants={arcVariants} custom={1} />
      <motion.path d="M8 32A60 60 0 0 1 68 92" variants={arcVariants} custom={2} />
    </motion.svg>
  );
}
