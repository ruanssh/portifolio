import { motion, useReducedMotion } from "framer-motion";

const accentSquares = [
  { top: "18%", left: "12%", delay: 0 },
  { top: "30%", left: "78%", delay: 0.5 },
  { top: "62%", left: "20%", delay: 1 },
  { top: "70%", left: "74%", delay: 1.5 },
];

export function CyberGridBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.13),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(52,211,153,0.12),transparent_42%)]" />

      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                backgroundPosition: ["0px 0px", "42px 42px"],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent blur-md"
        animate={reduceMotion ? undefined : { x: ["0%", "420%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      {accentSquares.map((square) => (
        <motion.div
          key={`${square.top}-${square.left}`}
          className="absolute h-5 w-5 md:h-6 md:w-6 border border-emerald-400/50 bg-emerald-400/10"
          style={{ top: square.top, left: square.left }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  opacity: [0.35, 0.95, 0.35],
                }
          }
          transition={{
            duration: 3.5,
            delay: square.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/85" />
    </div>
  );
}
