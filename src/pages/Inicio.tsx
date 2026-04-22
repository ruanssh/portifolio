import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProfileCard } from "@/components/profile/ProfileCard";

export function Inicio() {
  return (
    <Section id="inicio" className="pt-32 md:pt-40">
      <Container>
        <ProfileCard
          coverImage="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          avatarImage="/ruan-pereira.jpg"
          name="Ruan Pereira"
          username="ruanssh"
          description="Desenvolvedor Full Stack que atua além do código, participando da definição de soluções e decisões técnicas com foco em impacto real. Trabalho com TypeScript, Python e PHP para construir sistemas integrados, APIs robustas, dashboards em tempo real e automações para ambientes web, industriais e IoT."
          location="Manaus, Brasil"
          joinedDate=""
          yearsExperience={5}
          totalProjects={20}
          age={21}
          socials={{
            github: "https://github.com/ruanssh",
            linkedin: "https://www.linkedin.com/in/ruanppereira/",
          }}
        />
      </Container>
    </Section>
  );
}
