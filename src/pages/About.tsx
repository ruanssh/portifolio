import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { Github, Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <p className="font-mono text-sm text-ink-3 mb-4">$ cat about.md</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8">
            {t.about.title}
          </h2>

          <div className="space-y-6 text-ink-2 leading-relaxed mb-12 text-base md:text-lg text-justify">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/ruanssh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                {t.about.viewGithub}
              </a>
            </Button>
            <Button asChild>
              <a href="mailto:ruanpinheiro762@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                {t.about.getInTouch}
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
