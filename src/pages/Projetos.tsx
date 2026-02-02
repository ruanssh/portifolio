import { motion } from "framer-motion";
import { Github, ExternalLink, ImageOff } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description?: string;
  period: string;
  image?: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    period: "14 MAY, 2022 — 19 MAR, 2023",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/ruanssh/ecommerce",
  },
  {
    title: "Task Manager API",
    period: "30 JUN, 2023 — ATUALMENTE",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    technologies: ["TypeScript", "Fastify"],
    repoUrl: "https://github.com/ruanssh/task-api",
  },
  {
    title: "Portfolio Website",
    period: "31 DEC, 2022 — 29 JUN, 2023",
    technologies: ["PostgreSQL", "TypeScript", "Docker"],
    repoUrl: "https://github.com/ruanssh/portfolio",
    demoUrl: "https://ruanssh.dev/",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-zinc-800">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-600">
              <div className="text-center">
                <ImageOff className="h-12 w-12 mx-auto mb-2" />
                <span className="text-sm">NO PREVIEW</span>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        </div>

        <CardContent className="p-6">
          {/* Period */}
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
            {project.period}
          </p>

          {/* Title */}
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.repoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Repo
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Projetos() {
  return (
    <Section id="projetos">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Projetos
          </h2>
          <p className="text-zinc-400 mb-12">
            Veja meus projetos recentes, onde uso tecnologia para criar soluções
            inovadoras para desafios reais, refletindo minha paixão por
            desenvolvimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
