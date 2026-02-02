import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";

interface Technology {
  name: string;
  icon?: string;
}

const technologies: Technology[] = [
  { name: "React" },
  { name: "Node.js" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQLServer" },
  { name: "Redis" },
  { name: "TypeScript" },
  { name: "Docker" },
  { name: "Python" },
  { name: "PHP" },
  { name: "S3" },
];

export function Tecnologias() {
  return (
    <Section id="tecnologias">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Minhas Tecnologias.
          </h2>
          <p className="text-zinc-400 mb-12">
            Trabalho com uma stack moderna, focando em performance,
            escalabilidade e soluções robustas.
          </p>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm cursor-default hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-200"
                >
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-zinc-500 mt-8 text-sm"
          >
            ... e muito mais
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
