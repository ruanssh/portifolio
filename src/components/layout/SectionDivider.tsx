import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative my-2 md:my-4 h-7 flex items-center w-full">
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent blur-[1px]" />

      <div className="absolute inset-x-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute h-px w-28 bg-gradient-to-r from-transparent via-emerald-300/90 to-transparent"
          animate={{ left: ["-7rem", "calc(100% + 7rem)"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative mx-auto flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
        <span className="h-px w-10 bg-gradient-to-r from-emerald-500/20 via-emerald-400/70 to-emerald-500/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" />
      </div>
    </div>
  );
}
