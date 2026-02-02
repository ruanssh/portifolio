import { motion } from "framer-motion";
import { Github, ImageOff } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description?: string;
  image?: string;
  technologies: string[];
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "MAINTENIX",
    description:
      "Sistema completo de gerenciamento de manutenção industrial com dashboard, notificações por email e geração de PDFs.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Docker",
      "MinIO",
    ],
    repoUrl: "https://github.com/ruanssh/MAINTENIX",
  },
  {
    title: "Amazon Trails",
    description:
      "Plataforma web para compartilhar informações e rotas de trilhas na floresta amazônica com mapas interativos.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Google Maps"],
    repoUrl: "https://github.com/ruanssh/amazon-trails",
  },
  {
    title: "Anime Discord Bot",
    description:
      "Bot do Discord em Python que busca informações de animes usando a API Jikan REST com embeds personalizados.",
    image:
      "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?q=80&w=800&auto=format&fit=crop",
    technologies: ["Python", "Discord.py", "Jikan API"],
    repoUrl: "https://github.com/ruanssh/Anime-Bot",
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
          {/* Title */}
          <h3 className="text-xl font-semibold text-zinc-100 mb-2">
            {project.title}
          </h3>

          {/* Description */}
          {project.description && (
            <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
              {project.description}
            </p>
          )}

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
                  Repositório
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
