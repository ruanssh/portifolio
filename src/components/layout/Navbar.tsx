import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const sectionIds = ["home", "about", "experience", "projects", "technologies"];

function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-line-strong p-0.5",
        className,
      )}
    >
      <button
        onClick={() => language !== "en" && toggleLanguage()}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
        className={cn(
          "rounded-full px-2.5 py-1 font-mono text-xs transition-colors duration-200",
          language === "en"
            ? "bg-ink text-canvas font-semibold"
            : "text-ink-3 hover:text-ink-2",
        )}
      >
        EN
      </button>
      <button
        onClick={() => language !== "pt" && toggleLanguage()}
        aria-label="Switch to Portuguese"
        aria-pressed={language === "pt"}
        className={cn(
          "rounded-full px-2.5 py-1 font-mono text-xs transition-colors duration-200",
          language === "pt"
            ? "bg-ink text-canvas font-semibold"
            : "text-ink-3 hover:text-ink-2",
        )}
      >
        PT
      </button>
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [activeHref, setActiveHref] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: "home", label: t.nav.home, href: "#home" },
    { key: "about", label: t.nav.about, href: "#about" },
    { key: "experience", label: t.nav.experience, href: "#experience" },
    { key: "projects", label: t.nav.projects, href: "#projects" },
    { key: "technologies", label: t.nav.technologies, href: "#technologies" },
  ];

  const activeLabel =
    navItems.find((item) => item.href === activeHref)?.label ?? t.nav.home;

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    // Let the mobile dropdown's collapse render before scrolling, so its
    // closing height animation can't clip or race the scroll on touch
    // devices.
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm md:w-auto md:max-w-none"
    >
      <div className="rounded-lg border-2 border-line bg-surface shadow-xl shadow-black/30 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-line bg-surface-2">
          <span className="h-2.5 w-2.5 rounded-full border border-ink-3/50" />
          <span className="h-2.5 w-2.5 rounded-full border border-ink-3/50" />
          <span className="h-2.5 w-2.5 rounded-full border border-ink-3/50" />
          <span className="ml-2 font-mono text-[11px] text-ink-3 truncate">
            ruan@portfolio — zsh
          </span>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden ml-auto flex items-center gap-1.5 shrink-0 font-mono text-xs text-ink-2"
          >
            {activeLabel}
            {isOpen ? (
              <X className="h-3.5 w-3.5" />
            ) : (
              <Menu className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-center overflow-x-auto">
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "relative flex items-center gap-2 px-3.5 py-2.5 font-mono text-xs md:text-sm whitespace-nowrap",
                  "border-r-2 border-line last:border-r-0 transition-colors duration-200",
                  isActive
                    ? "bg-canvas text-ink"
                    : "text-ink-2 hover:text-ink hover:bg-surface-2",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors duration-200",
                    isActive ? "bg-ink" : "bg-ink-3/60",
                  )}
                />
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-ink" />
                )}
              </a>
            );
          })}

          {/* Language toggle */}
          <div className="flex items-center pl-3 pr-3.5 border-l-2 border-line shrink-0">
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = item.href === activeHref;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        "relative flex items-center gap-2 px-4 py-3 font-mono text-sm",
                        "border-t-2 border-line transition-colors duration-200",
                        isActive
                          ? "bg-canvas text-ink"
                          : "text-ink-2 hover:text-ink hover:bg-surface-2",
                      )}
                    >
                      <span className="text-ink-3">$</span>
                      cd {item.label.toLowerCase()}
                      <span
                        className={cn(
                          "ml-auto h-1.5 w-1.5 rounded-full transition-colors duration-200",
                          isActive ? "bg-ink" : "bg-ink-3/60",
                        )}
                      />
                      {isActive && (
                        <span className="absolute inset-y-0 left-0 w-0.5 bg-ink" />
                      )}
                    </a>
                  );
                })}

                {/* Language toggle */}
                <div className="flex items-center justify-between px-4 py-3 border-t-2 border-line">
                  <span className="font-mono text-sm text-ink-3">
                    <span className="text-ink-3">$</span> lang
                  </span>
                  <LanguageToggle />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
