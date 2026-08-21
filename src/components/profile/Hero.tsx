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
    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
      {/* Text column */}
      <div className="order-2 lg:order-1">
        {/* Terminal prompt line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="font-mono text-sm text-ink-3 mb-4"
        >
          $ whoami
        </motion.p>

        {/* Typewriter headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink mb-6 min-h-[1.2em]">
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
            className="text-lg md:text-xl text-ink-2 max-w-xl mb-8"
          >
            {t.hero.role} — {t.hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={revealItem}
            className="flex flex-wrap gap-4 mb-12"
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

          {/* Stat / social row */}
          <motion.div
            variants={revealItem}
            className="flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <p className="flex items-center gap-1 text-sm text-ink-3">
              <MapPin className="h-3.5 w-3.5" />
              {t.hero.location}
            </p>

            <div className="hidden sm:block h-8 w-px bg-line" />

            <div className="flex items-center gap-5 font-mono text-sm">
              <span className="text-ink-2">
                <span className="text-ink font-semibold">
                  {yearsExperience}+
                </span>{" "}
                {t.hero.yearsExperience}
              </span>
            </div>

            <div className="flex items-center gap-2 ml-auto">
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

      {/* Photo column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
        className="order-1 lg:order-2"
      >
        <div className="relative mx-auto max-w-sm lg:max-w-none">
          <span
            aria-hidden="true"
            className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-ink/60"
          />
          <span
            aria-hidden="true"
            className="absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-ink/60"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-ink/60"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-ink/60"
          />
          <img
            src={avatarImage}
            alt={name}
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
        </div>
        <p className="mt-4 text-center lg:text-left font-mono text-xs text-ink-3">
          // {t.hero.location}
        </p>
      </motion.div>
    </div>
  );
}
