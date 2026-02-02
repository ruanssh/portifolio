import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
];

export function Navbar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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

        {/* Nav Items */}
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

        {/* Theme Toggle */}
        {/* <button
          onClick={toggleTheme}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full ml-2",
            "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200",
          )}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button> */}
      </nav>
    </motion.header>
  );
}
