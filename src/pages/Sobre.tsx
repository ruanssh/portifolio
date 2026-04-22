import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Mail,
  Zap,
  MessageSquare,
  Code,
  Briefcase,
  Rocket,
  Users,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const philosophyItems = [
  {
    icon: Zap,
    title: "Entrega Rápida",
    description:
      "Transformo requisitos em entregas funcionais com ciclos curtos e foco em impacto imediato.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Ágil",
    description:
      "Respondo rápido, mantenho alinhamento constante e reduzo ruído entre negócio e tecnologia.",
  },
  {
    icon: Code,
    title: "Qualidade que Escala",
    description:
      "Desenvolvo com arquitetura sólida e código limpo para sustentar a evolução contínua do produto.",
  },
];

const servicesItems = [
  {
    icon: Rocket,
    title: "Desenvolvimento Full Stack",
    description:
      "Desenvolvimento completo de aplicações web, desde o frontend moderno e responsivo até APIs robustas e escaláveis no backend.",
  },
  {
    icon: Users,
    title: "Consultoria Técnica",
    description:
      "Análise de arquitetura, revisão de código, otimização de performance e orientação na escolha das melhores tecnologias para seu projeto.",
  },
  {
    icon: Sparkles,
    title: "Integrações e Automações",
    description:
      "Integração de sistemas, APIs de terceiros, automação de processos e desenvolvimento de soluções sob medida para seu negócio.",
  },
];

export function Sobre() {
  const reduceMotion = useReducedMotion();

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

          <div className="space-y-6 text-zinc-400 leading-relaxed mb-12 text-base md:text-lg text-justify">
            <p>
              Olá, sou o Ruan, Desenvolvedor Full Stack, e atuo além da
              implementação: participo da definição de soluções e das decisões
              técnicas junto ao cliente, conectando visão de produto com
              execução prática. Trabalho principalmente com TypeScript, Python e
              PHP, desenvolvendo aplicações web modernas, APIs robustas e
              integrações entre sistemas.
            </p>
            <p>
              Tenho experiência em conduzir projetos do zero até produção, com
              foco em impacto real no negócio, rastreabilidade, dashboards em
              tempo real e eficiência operacional. Transito com fluidez entre
              frontend e backend, estruturando arquiteturas escaláveis, código
              limpo e fluxos de entrega consistentes em times ágeis.
            </p>
            <p>
              Também exploro desenvolvimento mobile como extensão natural das
              soluções que construo, utilizando Swift e React Native para criar
              aplicações integradas ao ecossistema dos sistemas. Atualmente,
              aprofundo meus estudos em Rust, inteligência artificial e
              segurança da informação, além de utilizar múltiplos agentes de IA
              de forma orquestrada, com validação de saídas e automação de
              fluxos para elevar produtividade e qualidade técnica.
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
              <a href="mailto:ruanpinheiro762@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Entre em contato
              </a>
            </Button>
          </div>

          {/* Freelance Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-emerald-500" />
              <p className="text-xs uppercase tracking-widest text-emerald-500 font-medium">
                Disponível para Projetos!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {servicesItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group relative h-full overflow-hidden hover:border-emerald-500/30 transition-colors duration-300">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-70" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-60" />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent"
                      style={{ transform: "skewX(-18deg)" }}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              x: ["-15%", "360%"],
                              opacity: [0, 0.9, 0],
                            }
                      }
                      transition={{
                        duration: 1.8,
                        delay: index * 0.35,
                        repeat: reduceMotion ? 0 : 2,
                        repeatDelay: 1.6,
                        ease: "easeInOut",
                      }}
                    />
                    <CardContent className="relative p-6">
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
                  <Card className="group relative h-full overflow-hidden hover:border-emerald-500/30 transition-colors duration-300">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-70" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-60" />
                    <motion.div
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent"
                      style={{ transform: "skewX(-18deg)" }}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              x: ["-15%", "360%"],
                              opacity: [0, 0.9, 0],
                            }
                      }
                      transition={{
                        duration: 1.8,
                        delay: index * 0.35,
                        repeat: reduceMotion ? 0 : 2,
                        repeatDelay: 1.6,
                        ease: "easeInOut",
                      }}
                    />
                    <CardContent className="relative p-6">
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
