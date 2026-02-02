import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProfileCard } from "@/components/profile/ProfileCard";

export function Inicio() {
  const handleContactClick = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="inicio" className="pt-32 md:pt-40">
      <Container>
        <ProfileCard
          coverImage="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=1200&auto=format&fit=crop"
          avatarImage="/ruan-pereira.jpg"
          name="Ruan Pereira"
          username="ruanssh"
          description="Um engenheiro de software focado em criar soluções elegantes e eficazes. Sou movido por desafios e pelo desejo de aprender novas tecnologias."
          location="Manaus, Brasil"
          joinedDate=""
          yearsExperience={5}
          totalProjects={20}
          age={21}
          socials={{
            github: "https://github.com/ruanssh",
            linkedin: "https://www.linkedin.com/in/ruanppereira/",
          }}
          onContactClick={handleContactClick}
        />
      </Container>
    </Section>
  );
}
