import { motion } from "framer-motion";
import { Github, Mail, Shield, Zap, Code } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const philosophyItems = [
  {
    icon: Shield,
    title: "Segurança Primeiro",
    description: "Arquitetura construída com mentalidade de zero-confiança.",
  },
  {
    icon: Zap,
    title: "Alta Eficiência",
    description: "Otimizado para baixa latência e alta throughput.",
  },
  {
    icon: Code,
    title: "Lógica Limpa",
    description: "Código que se lê como uma história, mantido com facilidade.",
  },
];

export function Sobre() {
  return (
    <Section id="sobre">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">
            Sobre mim.
          </h2>

          <div className="space-y-6 text-zinc-400 leading-relaxed mb-12">
            <p>
              Minha jornada no desenvolvimento de software começou na faculdade,
              onde tive meu primeiro contato com a tecnologia e me encantei pela
              forma como as coisas funcionam.
            </p>
            <p>
              Esse interesse me impulsionou a explorar novas ferramentas e
              aprofundar meus conhecimentos além da sala de aula, buscando
              sempre aprender mais.
            </p>
            <p>
              Com 1.5 anos de experiência em desenvolvimento web e foco em
              Backend, busco desafios para criar soluções inovadoras.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/ruanssh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Ver no Github
              </a>
            </Button>
            <Button asChild>
              <a href="mailto:contact@ruanssh.com.br">
                <Mail className="h-4 w-4 mr-2" />
                Entre em contato
              </a>
            </Button>
          </div>

          {/* Philosophy Section */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-emerald-500 font-medium mb-6">
              Filosofia de Design
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {philosophyItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-emerald-500/30 transition-colors duration-300">
                    <CardContent className="p-6">
                      <item.icon className="h-8 w-8 text-emerald-500 mb-4" />
                      <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
