import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { smoothEase } from "@/lib/motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: smoothEase }}
      className={cn("py-16 md:py-24 scroll-mt-28", className)}
    >
      {children}
    </motion.section>
  );
}
