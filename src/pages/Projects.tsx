import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
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
  X,
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
import type { ProjectEntry, SiteContent } from "@/i18n/content";

type Labels = SiteContent["projects"];

const CARD_TECH_LIMIT = 4;
const TRACK_GAP = 24;

const trackVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase },
  },
};

function WindowFrame({
  src,
  alt,
  noPreview,
  imageClassName = "",
}: {
  src?: string;
  alt: string;
  noPreview: string;
  imageClassName?: string;
}) {
  return (
    <div className="overflow-hidden bg-surface-2">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt}
            draggable={false}
            className={`h-full w-full object-cover object-top ${imageClassName}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ink-3">
            <div className="text-center">
              <ImageOff className="mx-auto mb-2 h-10 w-10" />
              <span className="text-sm">{noPreview}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  labels,
  onOpen,
}: {
  project: ProjectEntry;
  labels: Labels;
  onOpen: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.09), transparent 70%)`;

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const extraTech = project.technologies.length - CARD_TECH_LIMIT;

  return (
    <motion.div
      variants={cardVariants}
      className="w-[82vw] flex-shrink-0 sm:w-[400px] lg:w-[430px]"
    >
      <motion.div
        layoutId={`project-${project.title}`}
        role="button"
        tabIndex={0}
        aria-label={`${labels.viewDetails}: ${project.title}`}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative">
          <WindowFrame
            src={project.image}
            alt={project.title}
            noPreview={labels.noPreview}
            imageClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {project.featured && (
            <div className="absolute right-3 top-0 flex h-6 items-center gap-1.5 font-mono text-[11px] font-medium text-ink-2">
              <Star className="h-3 w-3 fill-ink-2" />
              {labels.featured}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          {project.category && (
            <span className="mb-2 block font-mono text-xs font-medium uppercase tracking-wider text-ink-3">
              {project.category}
            </span>
          )}
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          {project.description && (
            <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-ink-2">
              {project.description}
            </p>
          )}

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, CARD_TECH_LIMIT).map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
            {extraTech > 0 && <Badge variant="secondary">+{extraTech}</Badge>}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-line pt-4 font-mono text-sm">
            <span className="flex items-center gap-1.5 text-ink-2 transition-colors duration-300 group-hover:text-ink">
              {labels.viewDetails}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {!project.repoUrl && project.confidential && (
              <span className="flex items-center gap-1.5 text-xs text-ink-3">
                <Lock className="h-3 w-3" />
                {labels.confidential}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectDetail({
  project,
  labels,
  onClose,
}: {
  project: ProjectEntry;
  labels: Labels;
  onClose: () => void;
}) {
  const shots = [project.image, ...(project.gallery ?? [])].filter(
    (shot): shot is string => Boolean(shot),
  );
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-canvas/80 backdrop-blur-md"
      />

      <motion.div
        layoutId={`project-${project.title}`}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="relative max-h-full w-full max-w-5xl overflow-y-auto rounded-2xl border border-line-strong bg-surface shadow-2xl"
      >
        <Button
          variant="secondary"
          size="icon"
          aria-label={labels.close}
          onClick={onClose}
          className="absolute right-4 top-4 z-10 h-9 w-9 rounded-lg border border-line-strong bg-canvas/80 backdrop-blur"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
          <div className="border-b border-line lg:border-b-0 lg:border-r">
            <WindowFrame
              src={shots[shot]}
              alt={project.title}
              noPreview={labels.noPreview}
            />
            {shots.length > 1 && (
              <div className="flex gap-3 border-t border-line p-4">
                {shots.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`${project.title} ${index + 1}`}
                    aria-current={index === shot}
                    onClick={() => setShot(index)}
                    className={`aspect-[16/10] w-24 cursor-pointer overflow-hidden rounded-lg border transition-all duration-200 ${
                      index === shot
                        ? "border-ink"
                        : "border-line opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: smoothEase }}
            className="p-6 sm:p-8"
          >
            {project.category && (
              <span className="mb-3 block font-mono text-xs font-medium uppercase tracking-wider text-ink-3">
                {project.category}
              </span>
            )}
            <h3 className="mb-4 pr-10 text-3xl font-bold tracking-tight text-ink">
              {project.title}
            </h3>
            {project.description && (
              <p className="mb-6 text-base leading-relaxed text-ink-2">
                {project.description}
              </p>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mb-6 flex flex-col gap-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-ink-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-2" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
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
                    <Github className="mr-2 h-4 w-4" />
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
                    <TooltipContent>
                      {labels.confidentialTooltip}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const labels = t.projects;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggedRef = useRef(false);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const openProject = labels.items.find(
    (project) => project.title === openTitle,
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const measure = () => {
      const max = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxScroll(max);
      if (x.get() < -max) x.set(-max);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(track);
    return () => observer.disconnect();
  }, [x]);

  useMotionValueEvent(x, "change", (latest) => {
    const start = latest >= -4;
    const end = latest <= -maxScroll + 4;
    setEdges((current) =>
      current.start === start && current.end === end
        ? current
        : { start, end },
    );
  });

  const progress = useTransform(x, (latest) =>
    maxScroll > 0 ? Math.min(1, Math.max(0, -latest / maxScroll)) : 0,
  );
  const progressLeft = useTransform(progress, (value) => `${value * 70}%`);

  const slide = (direction: 1 | -1) => {
    const card = trackRef.current?.firstElementChild;
    const step = (card?.clientWidth ?? 400) + TRACK_GAP;
    const target = Math.min(0, Math.max(-maxScroll, x.get() - direction * step));
    animate(x, target, { type: "spring", stiffness: 220, damping: 30 });
  };

  const canScroll = maxScroll > 0;

  return (
    <Section id="projects">
      <Container className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-sm text-ink-3 mb-4">
              $ ls ~/projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
              {labels.title}
            </h2>
            <p className="text-ink-2 max-w-2xl">{labels.subtitle}</p>
          </div>

          {canScroll && (
            <div className="flex flex-shrink-0 items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                aria-label={labels.previous}
                disabled={edges.start}
                onClick={() => slide(-1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label={labels.next}
                disabled={edges.end}
                onClick={() => slide(1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </motion.div>
      </Container>

      <div ref={viewportRef} className="relative overflow-hidden py-4">
        <motion.div
          ref={trackRef}
          style={{ x, gap: TRACK_GAP }}
          drag={canScroll ? "x" : false}
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.25, timeConstant: 260 }}
          onDragStart={() => {
            draggedRef.current = true;
          }}
          onDragEnd={() => {
            window.setTimeout(() => {
              draggedRef.current = false;
            }, 50);
          }}
          variants={trackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={`flex w-max items-stretch px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] ${
            canScroll ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          {labels.items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              labels={labels}
              onOpen={() => {
                if (!draggedRef.current) setOpenTitle(project.title);
              }}
            />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-canvas to-transparent sm:block" />
      </div>

      {canScroll && (
        <Container className="max-w-6xl">
          <div className="relative mt-6 h-px w-full bg-line">
            <motion.div
              style={{ left: progressLeft }}
              className="absolute -top-px h-[3px] w-[30%] rounded-full bg-ink"
            />
          </div>
        </Container>
      )}

      {createPortal(
        <AnimatePresence>
          {openProject && (
            <ProjectDetail
              key={openProject.title}
              project={openProject}
              labels={labels}
              onClose={() => setOpenTitle(null)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </Section>
  );
}
