import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  startDate: string; // formato: "YYYY-MM"
  endDate?: string | null; // null = atual
  location: string;
  type: string;
  description: string;
  details: string[];
  technologies: string[];
  logo: string;
}

// Função para calcular a duração entre duas datas
function calculateDuration(start: string, end: string | null): string {
  const startDate = new Date(start + "-01");
  const endDate = end ? new Date(end + "-01") : new Date();

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  let totalMonths = years * 12 + months;
  if (totalMonths < 0) totalMonths = 0;

  const finalYears = Math.floor(totalMonths / 12);
  const finalMonths = totalMonths % 12;

  if (finalYears === 0 && finalMonths === 0) return "1 mês";
  if (finalYears === 0)
    return `${finalMonths} ${finalMonths === 1 ? "mês" : "meses"}`;
  if (finalMonths === 0)
    return `${finalYears} ${finalYears === 1 ? "ano" : "anos"}`;
  return `${finalYears} ${finalYears === 1 ? "ano" : "anos"} ${finalMonths} ${finalMonths === 1 ? "mês" : "meses"}`;
}

// Função para formatar o período
function formatPeriod(start: string, end: string | null): string {
  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const startDate = new Date(start + "-01");
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();

  if (!end) {
    return `${startMonth} de ${startYear} - o momento`;
  }

  const endDate = new Date(end + "-01");
  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  return `${startMonth} de ${startYear} - ${endMonth} de ${endYear}`;
}

const experiences: ExperienceItem[] = [
  {
    company: "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
    role: "Desenvolvedor Full Stack PL",
    startDate: "2025-10",
    endDate: null, // null = posição atual
    location: "Manaus, Amazonas, Brasil",
    type: "Tempo integral · Híbrida",
    description:
      "Envolvido em deploy, pipelines e infraestrutura de aplicações, incluindo Docker, CI/CD e provisionamento em servidores. Desenvolvimento full stack com foco em entrega contínua e alinhamento técnico com as necessidades do negócio.",
    details: [
      "Implementação de pipelines CI/CD para automação de deploys",
      "Configuração de containers Docker para padronização de ambientes",
      "Provisionamento e gestão de servidores na nuvem",
      "Desenvolvimento full stack alinhado às necessidades do negócio",
    ],
    technologies: ["Docker", "CI/CD", "React", "Node.js", "PostgreSQL"],
    logo: "IC",
  },
  {
    company: "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
    role: "Desenvolvedor Full Stack Jr",
    startDate: "2024-10",
    endDate: "2025-10",
    location: "Manaus, Amazonas, Brasil",
    type: "Tempo integral · Híbrida",
    description:
      "Atuação no ciclo completo de desenvolvimento de software, do levantamento de requisitos à entrega e manutenção. Experiência com Scrum e metodologias ágeis, focado em entregas contínuas e alinhamento com o negócio.",
    details: [
      "Implementação de SSO para permitir autenticação unificada entre sistemas utilizados pelo cliente",
      "Melhoria do sistema de aprovação de compras do cliente, incluindo geração automática de POs refletidas no SAP após aprovação",
      "Desenvolvimento de APIs e integrações voltadas para automatizar processos internos do cliente",
      "Suporte técnico direto com áreas do cliente para levantamento de requisitos e implantação de melhorias",
    ],
    technologies: ["React", "TypeScript", "Node.js", "SAP", "APIs"],
    logo: "IC",
  },
  {
    company: "Salcomp Plc",
    role: "Analista de Sistemas Jr",
    startDate: "2023-10",
    endDate: "2024-10",
    location: "Manaus, Amazonas, Brasil",
    type: "Tempo integral · Presencial",
    description:
      "Desenvolvimento de soluções para ambiente industrial com foco em visão computacional, controle de ativos e integração com sistemas MES.",
    details: [
      "Visão computacional em Python para validação de imagens e integração com o MES",
      "Controle de ativos com anexos via Protocolo S3",
      "Integração de dados e implementação de dashboards",
      "Sistema de controle de entrada/saída de materiais, incluindo registro, rastreabilidade e auditoria",
      "Suporte a sistemas industriais (produção, retrabalho, rota, catracas, etc.)",
    ],
    technologies: ["Python", "Computer Vision", "S3", "MES", "Dashboards"],
    logo: "SP",
  },
  {
    company: "Salcomp Plc",
    role: "Assistente de TI",
    startDate: "2021-04",
    endDate: "2023-04",
    location: "Manaus, Amazonas, Brasil",
    type: "Aprendiz · Presencial",
    description:
      "Desenvolvimento de operações e automações para otimização de processos internos.",
    details: [
      "Desenvolvimento de operações CRUD utilizando PHP",
      "Manipulação de dados em bancos de dados relacionais (MySQL, SQLServer)",
      "Automações de e-mails para agilizar processos internos, personalizando mensagens e integrando sistemas",
      "Utilização do controle de versionamento Git e Github",
    ],
    technologies: ["PHP", "MySQL", "SQLServer", "Git", "Github"],
    logo: "SP",
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const period = formatPeriod(item.startDate, item.endDate);
  const duration = calculateDuration(item.startDate, item.endDate);
  const isCurrent = item.endDate === null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full ${
          isCurrent ? "bg-emerald-500" : "bg-zinc-600"
        } ring-4 ring-zinc-950`}
      />

      {/* Content */}
      <div className="space-y-4">
        {/* Company Header */}
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold text-lg">
            {item.logo}
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-zinc-100">
              {item.company}
            </h3>
            <p className="text-zinc-400 text-sm">{item.type}</p>
          </div>
        </div>

        {/* Role Section */}
        <div className="space-y-2">
          <h4 className="text-lg font-medium text-zinc-200">{item.role}</h4>

          {/* Period and Location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {period} · {duration}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Details List */}
        <ul className="space-y-1.5">
          {item.details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-zinc-500"
            >
              <span className="text-emerald-500 mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
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
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-emerald-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
              Experiência
            </h2>
          </div>
          <p className="text-zinc-400 mb-12">
            Minha trajetória profissional e contribuições em cada empresa.
          </p>

          <div className="relative">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.company + item.role + item.period}
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
