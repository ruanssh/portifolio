import { motion } from "framer-motion";
import { Github, Mail, Shield, Zap, Code, Briefcase, Rocket, Users, Sparkles } from "lucide-react";
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

const servicesItems = [
  {
    icon: Rocket,
    title: "Desenvolvimento Full Stack",
    description: "Desenvolvimento completo de aplicações web, desde o frontend moderno e responsivo até APIs robustas e escaláveis no backend.",
  },
  {
    icon: Users,
    title: "Consultoria Técnica",
    description: "Análise de arquitetura, revisão de código, otimização de performance e orientação na escolha das melhores tecnologias para seu projeto.",
  },
  {
    icon: Sparkles,
    title: "Integrações e Automações",
    description: "Integração de sistemas, APIs de terceiros, automação de processos e desenvolvimento de soluções sob medida para seu negócio.",
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
            <p className="text-lg">
              Sou o Ruan, desenvolvedor fullstack com experiência sólida em desenvolvimento web e soluções robustas baseadas em APIs modernas. Trabalho principalmente com React, TypeScript, Node.js, PHP e Python, aplicando boas práticas de arquitetura e foco em código limpo e performático.
            </p>
            <p>
              Tenho facilidade em transitar entre frontend e backend, além de colaborar ativamente em times ágeis. Atualmente, aprofundo meus estudos em Rust, inteligência artificial e segurança da informação, sempre buscando expandir minha visão técnica e entregar soluções cada vez mais inovadoras.
            </p>
            <p>
              Minha abordagem combina pensamento analítico com criatividade técnica, permitindo-me criar soluções que não apenas funcionam perfeitamente, mas também proporcionam experiências excepcionais aos usuários. Acredito que a tecnologia deve servir as pessoas, e é essa filosofia que guia cada linha de código que escrevo.
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
                Disponível para Projetos
              </p>
            </div>

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 md:p-8 mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 mb-4">
                Estou aberto a oportunidades de freelance e projetos full stack!
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Se você tem uma ideia de projeto, precisa de ajuda para desenvolver uma aplicação web completa, ou busca um profissional para integrar sua equipe de forma remota, ficarei feliz em conversar. Tenho experiência em entregar projetos desde o conceito até o deploy, trabalhando com metodologias ágeis e mantendo uma comunicação transparente durante todo o processo.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Seja um MVP para validar sua ideia, uma plataforma SaaS escalável, ou a modernização de sistemas legados, posso ajudar a transformar suas necessidades em soluções tecnológicas eficientes. Valorizo parcerias de longo prazo e me dedico a entender profundamente o negócio de cada cliente para entregar resultados que realmente fazem a diferença.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                  Freelance
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                  Projetos Full Stack
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                  Consultoria
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">
                  Parcerias
                </span>
              </div>
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
