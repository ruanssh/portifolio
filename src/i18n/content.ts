export type Language = "en" | "pt";

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string; // format: "YYYY-MM"
  endDate: string | null; // null = current
  location: string;
  type: string;
  description: string;
  details: string[];
  technologies: string[];
  logo: string;
}

export interface ProjectEntry {
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

export interface TechGroup {
  label: string;
  items: { name: string; highlighted?: boolean }[];
}

export interface SiteContent {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    technologies: string;
  };
  footer: {
    home: string;
    about: string;
    contact: string;
    projects: string;
    experience: string;
    rights: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    location: string;
    viewProjects: string;
    getInTouch: string;
    yearsExperience: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    viewGithub: string;
    getInTouch: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
    entries: ExperienceEntry[];
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    repository: string;
    confidential: string;
    confidentialTooltip: string;
    noPreview: string;
    items: ProjectEntry[];
  };
  technologies: {
    title: string;
    subtitle: string;
    groups: TechGroup[];
  };
}

export const content: Record<Language, SiteContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      technologies: "Technologies",
    },
    footer: {
      home: "Home",
      about: "About",
      contact: "Contact",
      projects: "Projects",
      experience: "Experience",
      rights: "All rights reserved.",
    },
    hero: {
      greeting: "Hi, I'm Ruan Pereira.",
      role: "Full Stack Developer",
      tagline: "Building AI-powered systems and automation platforms.",
      location: "Manaus, Brazil",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
      yearsExperience: "years experience",
    },
    about: {
      title: "About me.",
      paragraphs: [
        "Full Stack Developer with 5+ years of experience across the software development lifecycle, from requirements gathering and system design to development, deployment, and production support.",
        "Experienced with TypeScript, Python, and PHP, building enterprise systems, automation platforms, dashboards, industrial solutions, IoT applications, and scalable integrations. I also work with infrastructure and application delivery using Docker, Kubernetes, CI/CD, VPS environments, and production deployment workflows.",
        "My current focus is Artificial Intelligence applied to software engineering, including AI-assisted development and multi-agent workflows, where specialized agents collaborate on implementation, testing, debugging, code analysis, refactoring, and solution design.",
        "I'm especially interested in combining software engineering, automation, infrastructure, and AI to accelerate development and build scalable solutions with measurable business impact.",
      ],
      viewGithub: "View on GitHub",
      getInTouch: "Get in touch",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey and contributions at each company.",
      present: "Present",
      entries: [
        {
          company:
            "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
          role: "Mid-Level Full Stack Developer",
          startDate: "2025-10",
          endDate: null,
          location: "Manaus, Amazonas, Brazil",
          type: "Full-time · Hybrid",
          description:
            "Full stack development for Lean Manufacturing and industrial IoT, with a growing focus on AI-powered automation across the company's internal systems.",
          details: [
            "Built systems for Lean Manufacturing, optimizing production processes, traceability, and efficiency indicators (OEE, productivity, operational losses) to support client decision-making",
            "Delivered IoT solutions for the shop floor — operator monitoring via ESD wristbands, access control integration, and real-time operational dashboards",
            "Designed and integrated AI-powered solutions into enterprise systems: process automation, document generation, intelligent classification, and AI-assisted workflows",
            "Implemented LLM-based solutions using RAG, embeddings, vector databases, and local AI models to power internal AI services",
            "Standardized and automated internal IT processes with AI-assisted development workflows, reducing rework and improving team efficiency",
          ],
          technologies: [
            "Docker",
            "CI/CD",
            "React",
            "TypeScript",
            "Node.js",
            "IoT",
            "LLMs",
            "RAG",
            "Vector Databases",
            "Ollama",
            "Prompt Engineering",
          ],
          logo: "IC",
        },
        {
          company:
            "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
          role: "Junior Full Stack Developer",
          startDate: "2024-10",
          endDate: "2025-10",
          location: "Manaus, Amazonas, Brazil",
          type: "Full-time · Hybrid",
          description:
            "Worked across the full software development lifecycle, from requirements gathering to delivery and maintenance, using Scrum and Agile practices with a focus on continuous delivery.",
          details: [
            "Implemented Single Sign-On (SSO) for unified authentication across the client's systems",
            "Improved the purchase approval system, including automatic PO generation reflected in SAP",
            "Built APIs and integrations to automate internal business processes",
            "Provided direct technical support for requirements gathering and rollout of improvements",
          ],
          technologies: ["React", "TypeScript", "Node.js", "SAP", "APIs"],
          logo: "IC",
        },
        {
          company: "Salcomp Plc",
          role: "Junior Full Stack Developer",
          startDate: "2023-10",
          endDate: "2024-10",
          location: "Manaus, Amazonas, Brazil",
          type: "Full-time · On-site",
          description:
            "Worked on the development, integration, and support of industrial systems, with a strong focus on manufacturing processes, traceability, and operational reliability.",
          details: [
            "Built computer vision solutions in Python for image validation and MES integration",
            "Developed asset management with S3-compatible file storage",
            "Built data integrations and operational dashboards for production visibility",
            "Created a material inbound/outbound control system with traceability and audit history",
            "Supported industrial systems for production, rework, routing, and access control",
          ],
          technologies: ["Python", "Computer Vision", "S3", "MES", "Dashboards"],
          logo: "SP",
        },
        {
          company: "Salcomp Plc",
          role: "Software Engineering Intern",
          startDate: "2021-04",
          endDate: "2023-03",
          location: "Manaus, Amazonas, Brazil",
          type: "Internship · On-site",
          description:
            "Developed and maintained internal web applications, gaining a foundation in relational databases and collaborative software development.",
          details: [
            "Built and maintained PHP web applications, including CRUD operations and internal workflows",
            "Worked with MySQL and SQL Server for data modeling, queries, and integrations",
            "Used Git and GitHub for version control and collaborative development",
            "Supported bug fixes and feature improvements based on user feedback",
          ],
          technologies: ["PHP", "MySQL", "SQLServer", "Git", "Github"],
          logo: "SP",
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle:
        "Take a look at my recent projects, where I use technology to build innovative solutions for real-world challenges, reflecting my passion for development.",
      featured: "Featured",
      repository: "Repository",
      confidential: "Confidential",
      confidentialTooltip: "Private repository — internal company project",
      noPreview: "NO PREVIEW",
      items: [
        {
          title: "MAINTENIX",
          category: "Industrial Maintenance",
          description:
            "Full industrial maintenance management system with a dashboard, email notifications, and PDF report generation.",
          highlights: [
            "Real-time dashboard with maintenance indicators",
            "Automatic email notifications for the team",
            "On-demand PDF report generation",
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
          title: "SAP Script Management",
          category: "SAP Test Management",
          description:
            "Full stack system for managing scripts and test plans in SAP projects, with control over modules, transactions, defects, and approvals, multi-client support, and report export to Excel.",
          highlights: [
            "Multi-client test plan approval workflow",
            "Defect and rework tracking per stage",
            "Full report export to Excel",
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
      ],
    },
    technologies: {
      title: "Technologies.",
      subtitle:
        "I work with a modern stack, focusing on performance, scalability, and robust solutions.",
      groups: [
        {
          label: "AI & Automation",
          items: [
            { name: "LLMs", highlighted: true },
            { name: "RAG", highlighted: true },
            { name: "Vector Databases", highlighted: true },
            { name: "Ollama", highlighted: true },
            { name: "OpenAI", highlighted: true },
            { name: "Gemini", highlighted: true },
            { name: "Prompt Engineering", highlighted: true },
            { name: "Multi-Agent Workflows", highlighted: true },
          ],
        },
        {
          label: "Frontend",
          items: [{ name: "React" }, { name: "TypeScript" }],
        },
        {
          label: "Backend",
          items: [{ name: "Node.js" }, { name: "Python" }, { name: "PHP" }],
        },
        {
          label: "Infrastructure & Data",
          items: [
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "CI/CD" },
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "SQLServer" },
            { name: "Redis" },
            { name: "S3" },
          ],
        },
      ],
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      technologies: "Tecnologias",
    },
    footer: {
      home: "Início",
      about: "Sobre",
      contact: "Contato",
      projects: "Projetos",
      experience: "Experiência",
      rights: "Todos os direitos reservados.",
    },
    hero: {
      greeting: "Olá, eu sou o Ruan Pereira.",
      role: "Desenvolvedor Full Stack",
      tagline: "Construindo sistemas com IA e plataformas de automação.",
      location: "Manaus, Brasil",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em contato",
      yearsExperience: "anos de experiência",
    },
    about: {
      title: "Sobre mim.",
      paragraphs: [
        "Desenvolvedor Full Stack com mais de 5 anos de experiência em todo o ciclo de vida de desenvolvimento de software, do levantamento de requisitos e design de sistemas até o desenvolvimento, deploy e suporte em produção.",
        "Experiência com TypeScript, Python e PHP, construindo sistemas corporativos, plataformas de automação, dashboards, soluções industriais, aplicações IoT e integrações escaláveis. Também trabalho com infraestrutura e entrega de aplicações usando Docker, Kubernetes, CI/CD, ambientes VPS e fluxos de deploy em produção.",
        "Meu foco atual é Inteligência Artificial aplicada à engenharia de software, incluindo desenvolvimento assistido por IA e fluxos multi-agente, onde agentes especializados colaboram em implementação, testes, debug, análise de código, refatoração e design de soluções.",
        "Tenho interesse especial em combinar engenharia de software, automação, infraestrutura e IA para acelerar o desenvolvimento e construir soluções escaláveis com impacto real no negócio.",
      ],
      viewGithub: "Ver no GitHub",
      getInTouch: "Entre em contato",
    },
    experience: {
      title: "Experiência",
      subtitle: "Minha trajetória profissional e contribuições em cada empresa.",
      present: "Atual",
      entries: [
        {
          company:
            "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
          role: "Desenvolvedor Full Stack Pleno",
          startDate: "2025-10",
          endDate: null,
          location: "Manaus, Amazonas, Brasil",
          type: "Tempo integral · Híbrido",
          description:
            "Desenvolvimento full stack para Lean Manufacturing e IoT industrial, com foco crescente em automação com IA nos sistemas internos da empresa.",
          details: [
            "Construção de sistemas para Lean Manufacturing, otimizando processos produtivos, rastreabilidade e indicadores de eficiência (OEE, produtividade, perdas operacionais) para apoiar a tomada de decisão do cliente",
            "Entrega de soluções de IoT para o chão de fábrica — monitoramento de operadores via pulseiras ESD, integração com controle de acesso e dashboards operacionais em tempo real",
            "Design e integração de soluções com IA em sistemas corporativos: automação de processos, geração de documentos, classificação inteligente e fluxos assistidos por IA",
            "Implementação de soluções baseadas em LLMs usando RAG, embeddings, bancos vetoriais e modelos de IA locais para serviços internos de IA",
            "Padronização e automação de processos internos de TI com fluxos de desenvolvimento assistidos por IA, reduzindo retrabalho e aumentando a eficiência do time",
          ],
          technologies: [
            "Docker",
            "CI/CD",
            "React",
            "TypeScript",
            "Node.js",
            "IoT",
            "LLMs",
            "RAG",
            "Bancos Vetoriais",
            "Ollama",
            "Engenharia de Prompt",
          ],
          logo: "IC",
        },
        {
          company:
            "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
          role: "Desenvolvedor Full Stack Júnior",
          startDate: "2024-10",
          endDate: "2025-10",
          location: "Manaus, Amazonas, Brasil",
          type: "Tempo integral · Híbrido",
          description:
            "Atuação em todo o ciclo de desenvolvimento de software, do levantamento de requisitos à entrega e manutenção, com Scrum e práticas ágeis focadas em entrega contínua.",
          details: [
            "Implementação de Single Sign-On (SSO) para autenticação unificada entre os sistemas do cliente",
            "Melhoria do sistema de aprovação de compras, incluindo geração automática de pedidos de compra (POs) refletidos no SAP",
            "Construção de APIs e integrações para automatizar processos internos do negócio",
            "Suporte técnico direto para levantamento de requisitos e implantação de melhorias",
          ],
          technologies: ["React", "TypeScript", "Node.js", "SAP", "APIs"],
          logo: "IC",
        },
        {
          company: "Salcomp Plc",
          role: "Desenvolvedor Full Stack Júnior",
          startDate: "2023-10",
          endDate: "2024-10",
          location: "Manaus, Amazonas, Brasil",
          type: "Tempo integral · Presencial",
          description:
            "Atuação no desenvolvimento, integração e suporte de sistemas industriais, com forte foco em processos de manufatura, rastreabilidade e confiabilidade operacional.",
          details: [
            "Construção de soluções de visão computacional em Python para validação de imagens e integração com o MES",
            "Desenvolvimento de gestão de ativos com armazenamento de arquivos compatível com S3",
            "Construção de integrações de dados e dashboards operacionais para visibilidade da produção",
            "Criação de um sistema de controle de entrada/saída de materiais com rastreabilidade e histórico de auditoria",
            "Suporte a sistemas industriais de produção, retrabalho, roteamento e controle de acesso",
          ],
          technologies: ["Python", "Visão Computacional", "S3", "MES", "Dashboards"],
          logo: "SP",
        },
        {
          company: "Salcomp Plc",
          role: "Estagiário de Engenharia de Software",
          startDate: "2021-04",
          endDate: "2023-03",
          location: "Manaus, Amazonas, Brasil",
          type: "Estágio · Presencial",
          description:
            "Desenvolvimento e manutenção de aplicações web internas, construindo uma base sólida em bancos de dados relacionais e desenvolvimento colaborativo.",
          details: [
            "Construção e manutenção de aplicações web em PHP, incluindo operações CRUD e fluxos internos",
            "Trabalho com MySQL e SQL Server para modelagem de dados, consultas e integrações",
            "Uso de Git e GitHub para controle de versão e desenvolvimento colaborativo",
            "Suporte em correções de bugs e melhorias de funcionalidades a partir do feedback dos usuários",
          ],
          technologies: ["PHP", "MySQL", "SQLServer", "Git", "Github"],
          logo: "SP",
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Confira meus projetos recentes, onde uso tecnologia para construir soluções inovadoras para desafios reais, refletindo minha paixão por desenvolvimento.",
      featured: "Destaque",
      repository: "Repositório",
      confidential: "Confidencial",
      confidentialTooltip: "Repositório privado — projeto interno da empresa",
      noPreview: "SEM PRÉVIA",
      items: [
        {
          title: "MAINTENIX",
          category: "Manutenção Industrial",
          description:
            "Sistema completo de gerenciamento de manutenção industrial com dashboard, notificações por e-mail e geração de relatórios em PDF.",
          highlights: [
            "Dashboard em tempo real com indicadores de manutenção",
            "Notificações automáticas por e-mail para a equipe",
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
            "Sistema fullstack para gestão de scripts e planos de teste em projetos SAP, com controle de módulos, transações, defeitos e aprovações, suporte multi-cliente e exportação de relatórios para Excel.",
          highlights: [
            "Fluxo de aprovação de planos de teste multi-cliente",
            "Rastreamento de defeitos e retrabalho por etapa",
            "Exportação completa de relatórios para Excel",
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
      ],
    },
    technologies: {
      title: "Tecnologias.",
      subtitle:
        "Trabalho com uma stack moderna, focando em performance, escalabilidade e soluções robustas.",
      groups: [
        {
          label: "IA & Automação",
          items: [
            { name: "LLMs", highlighted: true },
            { name: "RAG", highlighted: true },
            { name: "Bancos Vetoriais", highlighted: true },
            { name: "Ollama", highlighted: true },
            { name: "OpenAI", highlighted: true },
            { name: "Gemini", highlighted: true },
            { name: "Engenharia de Prompt", highlighted: true },
            { name: "Fluxos Multi-Agente", highlighted: true },
          ],
        },
        {
          label: "Frontend",
          items: [{ name: "React" }, { name: "TypeScript" }],
        },
        {
          label: "Backend",
          items: [{ name: "Node.js" }, { name: "Python" }, { name: "PHP" }],
        },
        {
          label: "Infraestrutura & Dados",
          items: [
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "CI/CD" },
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "SQLServer" },
            { name: "Redis" },
            { name: "S3" },
          ],
        },
      ],
    },
  },
};
