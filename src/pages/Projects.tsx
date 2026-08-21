import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { CheckCircle2, Github, ImageOff, Lock, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectEntry } from "@/i18n/content";

function ProjectRow({
  project,
  index,
  isLast,
  labels,
}: {
  project: ProjectEntry;
  index: number;
  isLast: boolean;
  labels: {
    featured: string;
    repository: string;
    confidential: string;
    confidentialTooltip: string;
    noPreview: string;
  };
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: smoothEase }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 ${
        isLast ? "" : "border-b border-line"
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface-2 group ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-3">
            <div className="text-center">
              <ImageOff className="h-12 w-12 mx-auto mb-2" />
              <span className="text-sm">{labels.noPreview}</span>
            </div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-lg border border-line-strong bg-canvas/80 backdrop-blur px-2.5 py-1 text-xs font-medium text-ink">
            <Star className="h-3 w-3 fill-ink" />
            {labels.featured}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        {project.category && (
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-ink-3 mb-3 block">
            {project.category}
          </span>
        )}

        <h3 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight">
          {project.title}
        </h3>

        {project.description && (
          <p className="text-base text-ink-2 mb-6 leading-relaxed">
            {project.description}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="flex flex-col gap-2 mb-6">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-sm text-ink-2"
              >
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-ink-2" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                {labels.repository}
              </a>
            </Button>
          )}
          {!project.repoUrl && project.confidential && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="secondary" className="cursor-default">
                    <Lock className="h-3 w-3" />
                    {labels.confidential}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>{labels.confidentialTooltip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const labels = {
    featured: t.projects.featured,
    repository: t.projects.repository,
    confidential: t.projects.confidential,
    confidentialTooltip: t.projects.confidentialTooltip,
    noPreview: t.projects.noPreview,
  };

  return (
    <Section id="projects">
      <Container className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <p className="font-mono text-sm text-ink-3 mb-4">$ ls ~/projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            {t.projects.title}
          </h2>
          <p className="text-ink-2 mb-4 max-w-2xl">{t.projects.subtitle}</p>

          <div>
            {t.projects.items.map((project, index) => (
              <ProjectRow
                key={project.title}
                project={project}
                index={index}
                isLast={index === t.projects.items.length - 1}
                labels={labels}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
