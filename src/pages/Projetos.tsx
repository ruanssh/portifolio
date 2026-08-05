import { motion } from "framer-motion";
import { CheckCircle2, Github, ImageOff, Lock, Star } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Project {
  title: string;
  category?: string;
  description?: string;
  highlights?: string[];
  image?: string;
  technologies: string[];
  repoUrl?: string;
  confidential?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "MAINTENIX",
    category: "Manutenção Industrial",
    description:
      "Sistema completo de gerenciamento de manutenção industrial com dashboard, notificações por email e geração de PDFs.",
    highlights: [
      "Dashboard em tempo real com indicadores de manutenção",
      "Notificações automáticas por email para a equipe",
      "Geração de relatórios em PDF sob demanda",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Docker",
      "MinIO",
    ],
    repoUrl: "https://github.com/ruanssh/MAINTENIX",
    featured: true,
  },
  {
    title: "Gerenciamento de Scripts SAP",
    category: "Gestão de Testes SAP",
    description:
      "Sistema fullstack para gestão de scripts e planos de teste em projetos SAP, com controle de módulos, transações, defeitos e aprovações, multi-cliente e exportação de relatórios para Excel.",
    highlights: [
      "Fluxo de aprovação de planos de teste multi-cliente",
      "Rastreamento de defeitos e retrabalho por etapa",
      "Exportação de relatórios completos para Excel",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    technologies: [
      "React 19",
      "TypeScript",
      "NestJS",
      "Prisma",
      "MySQL",
      "Ant Design",
      "Tailwind CSS",
      "JWT",
      "MinIO",
    ],
    confidential: true,
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        className={`h-full flex flex-col overflow-hidden group transition-all duration-300 ${
          project.featured
            ? "border-emerald-500/40 shadow-[0_0_24px_-8px_rgba(16,185,129,0.35)] hover:border-emerald-500/60"
            : "hover:border-emerald-500/30"
        }`}
      >
        {/* Image */}
        <div className="relative h-56 flex-shrink-0 overflow-hidden bg-zinc-800">
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
          {project.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-zinc-950/80 backdrop-blur px-2.5 py-1 text-xs font-medium text-emerald-400">
              <Star className="h-3 w-3 fill-emerald-400" />
              Destaque
            </div>
          )}
        </div>

        <CardContent className="p-6 sm:p-7 flex flex-col flex-1">
          {/* Category */}
          {project.category && (
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-2">
              {project.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-2xl font-semibold text-zinc-100 mb-2">
            {project.title}
          </h3>

          {/* Description - Agora mostra texto completo */}
          {project.description && (
            <p className="text-sm text-zinc-400 mb-4">{project.description}</p>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="flex flex-col gap-2 mb-6">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions - Sempre no final do card */}
          <div className="mt-auto flex gap-3">
            {project.repoUrl && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Repositório
                </a>
              </Button>
            )}
            {!project.repoUrl && project.confidential && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="cursor-default">
                      <Lock className="h-3 w-3" />
                      Confidencial
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    Repositório privado — projeto interno da empresa
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
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
