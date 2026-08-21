import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { smoothEase } from "@/lib/motion";
import { useLanguage } from "@/context/LanguageContext";

export function Technologies() {
  const { t } = useLanguage();
  const marqueeItems = t.technologies.groups.flatMap((group) =>
    group.items.map((item) => item.name),
  );

  return (
    <Section id="technologies">
      {/* Marquee strip */}
      <div className="relative overflow-hidden border-y border-line py-4 mb-16 select-none">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-mono text-sm text-ink-3 px-6 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-canvas to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-canvas to-transparent" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <p className="font-mono text-sm text-ink-3 mb-4">$ cat stack.json</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t.technologies.title}
          </h2>
          <p className="text-ink-2 mb-12">{t.technologies.subtitle}</p>

          <div className="space-y-8">
            {t.technologies.groups.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.08,
                  ease: smoothEase,
                }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3 mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant={tech.highlighted ? "default" : "secondary"}
                      className="px-4 py-2 text-sm cursor-default hover:bg-white/15 hover:text-ink transition-all duration-200"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
