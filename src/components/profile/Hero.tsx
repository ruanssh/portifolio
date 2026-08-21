import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";
import { smoothEase } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroProps {
  name: string;
  avatarImage: string;
  yearsExperience: number;
  socials?: {
    github?: string;
    linkedin?: string;
  };
  email: string;
}

/**
 * Large portrait with terminal-style corner brackets. Desktop only — mobile
 * uses the small circular avatar inline with the `$ whoami` prompt.
 */
function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  const bracket = "absolute h-6 w-6 border-ink/60 pointer-events-none";

  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className={`${bracket} -top-2 -left-2 border-t-2 border-l-2`}
      />
      <span
        aria-hidden="true"
        className={`${bracket} -top-2 -right-2 border-t-2 border-r-2`}
      />
      <span
        aria-hidden="true"
        className={`${bracket} -bottom-2 -left-2 border-b-2 border-l-2`}
      />
      <span
        aria-hidden="true"
        className={`${bracket} -bottom-2 -right-2 border-b-2 border-r-2`}
      />
      <img
        src={src}
        alt={alt}
        className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top"
      />
    </div>
  );
}

export function Hero({
  name,
  avatarImage,
  yearsExperience,
  socials,
  email,
}: HeroProps) {
  const { t } = useLanguage();
  const { displayed, done } = useTypewriter(t.hero.greeting);

  const revealContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const revealItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: smoothEase },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-8 lg:gap-16 items-center">
      {/* Text column — first in DOM so mobile leads with the headline */}
      <div>
        {/* Prompt line, with the circular avatar inline on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="flex items-center gap-3 mb-3"
        >
          <img
            src={avatarImage}
            alt={name}
            className="md:hidden h-11 w-11 shrink-0 rounded-full border border-line object-cover object-top"
          />
          <p className="font-mono text-sm text-ink-3">$ whoami</p>
        </motion.div>

        {/* Typewriter headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-5 min-h-[1.2em]">
          {displayed}
          <span
            aria-hidden="true"
            className="inline-block w-[3px] md:w-[4px] h-[0.85em] ml-1 -mb-1 bg-ink animate-pulse"
          />
        </h1>

        <motion.div
          initial="hidden"
          animate={done ? "visible" : "hidden"}
          variants={revealContainer}
        >
          {/* Subtitle */}
          <motion.p
            variants={revealItem}
            className="text-lg md:text-xl text-ink-2 max-w-xl mb-7"
          >
            {t.hero.role} — {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealItem}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8"
          >
            <Button asChild>
              <a href="#projects">{t.hero.viewProjects}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${email}`}>
                <Mail className="h-4 w-4 mr-2" />
                {t.hero.getInTouch}
              </a>
            </Button>
          </motion.div>

          {/* Credentials row */}
          <motion.div
            variants={revealItem}
            className="flex items-center gap-4"
          >
            <div className="flex min-w-0 flex-col gap-y-1 sm:flex-row sm:items-center sm:gap-x-5">
              <p className="flex items-center gap-1 text-sm text-ink-3">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {t.hero.location}
              </p>

              <div className="hidden sm:block h-8 w-px bg-line" />

              <span className="font-mono text-sm text-ink-2 whitespace-nowrap">
                <span className="text-ink font-semibold">
                  {yearsExperience}+
                </span>{" "}
                {t.hero.yearsExperience}
              </span>
            </div>

            <div className="flex items-center gap-1 ml-auto shrink-0">
              {socials?.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-ink-3 hover:text-ink hover:bg-surface-2 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {socials?.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-ink-3 hover:text-ink hover:bg-surface-2 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Photo column — desktop only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
        className="hidden md:block"
      >
        <PhotoFrame src={avatarImage} alt={name} />
        <p className="mt-4 font-mono text-xs text-ink-3">
          // {t.hero.location}
        </p>
      </motion.div>
    </div>
  );
}
