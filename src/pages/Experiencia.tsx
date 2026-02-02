import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "Tech Corp",
    role: "Full Stack Developer",
    period: "31 Dec, 2021 - 30 Dec, 2023",
    description:
      "Full stack web application development using React, Node.js and PostgreSQL.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    company: "Startup X",
    role: "Frontend Developer",
    period: "31 May, 2021 - 30 Dec, 2021",
    description: "Modern interface development with React and TypeScript.",
    technologies: ["React", "TypeScript"],
  },
  {
    company: "Freelance",
    role: "Backend Developer",
    period: "31 Dec, 2019 - Atualmente",
    description: "API and backend services development.",
    technologies: ["Node.js", "Python"],
    isCurrent: true,
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-emerald-500 ring-4 ring-zinc-950" />

      {/* Content */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <h3 className="text-lg font-semibold text-zinc-100">
            {item.company}
          </h3>
          <span className="text-sm text-zinc-500">({item.period})</span>
        </div>

        <p className="text-emerald-400 font-medium">{item.role}</p>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Experiencia() {
  return (
    <Section id="experiencia">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Minha jornada.
          </h2>
          <p className="text-zinc-400 mb-12">
            Uma breve visão geral da minha jornada profissional e funções.
          </p>

          <div className="relative">
            {experiences.map((item, index) => (
              <TimelineItem
                key={item.company + item.role}
                item={item}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
