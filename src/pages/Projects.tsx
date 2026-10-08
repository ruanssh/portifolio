import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Github,
  ImageOff,
  Lock,
  Star,
} from "lucide-react";
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

function ProjectSlide({
  project,
  labels,
}: {
  project: ProjectEntry;
  labels: {
    featured: string;
    repository: string;
    visitSite: string;
    confidential: string;
    confidentialTooltip: string;
    noPreview: string;
  };
}) {
  return (
    <div className="min-w-full snap-center grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface-2 group">
        {project.image && project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${labels.visitSite}: ${project.title}`}
            className="block w-full h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg border border-line-strong bg-canvas/80 backdrop-blur px-2.5 py-1 font-mono text-xs text-ink opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {project.liveUrl.replace(/^https?:\/\//, "")}
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </a>
        ) : project.image ? (
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
      <div>
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
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {labels.visitSite}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
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
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = t.projects.items.length;

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(total - 1, index));
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  const pad = (value: number) => String(value).padStart(2, "0");
  const labels = {
    featured: t.projects.featured,
    repository: t.projects.repository,
    visitSite: t.projects.visitSite,
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
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-4">
            <p className="text-ink-2 max-w-2xl">{t.projects.subtitle}</p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="font-mono text-sm text-ink-3 mr-1">
                {pad(active + 1)} / {pad(total)}
              </span>
              <Button
                variant="outline"
                size="icon"
                aria-label={t.projects.previous}
                disabled={active === 0}
                onClick={() => goTo(active - 1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label={t.projects.next}
                disabled={active === total - 1}
                onClick={() => goTo(active + 1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="no-scrollbar flex overflow-x-auto snap-x snap-mandatory rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {t.projects.items.map((project) => (
              <ProjectSlide
                key={project.title}
                project={project}
                labels={labels}
              />
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {t.projects.items.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={project.title}
                aria-current={index === active}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === active
                    ? "w-8 bg-ink"
                    : "w-4 bg-line-strong hover:bg-ink-3"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
