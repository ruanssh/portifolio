import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <nav
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-2",
            "bg-zinc-900/80 backdrop-blur-xl border border-white/10",
            "shadow-lg shadow-black/20",
          )}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleClick(e, "#inicio")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-sm mr-2"
          >
            RP
          </a>

          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex md:hidden items-center justify-center w-10 h-10 rounded-full ml-2",
              "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200",
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl shadow-black/30 p-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
