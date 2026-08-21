import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/profile/Hero";

export function Home() {
  return (
    <Section id="home" className="relative overflow-hidden pt-40 md:pt-48 pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
      <Container className="relative z-10 max-w-6xl">
        <Hero
          name="Ruan Pereira"
          avatarImage="/ruan-pereira.jpg"
          yearsExperience={5}
          email="ruanpinheiro762@gmail.com"
          socials={{
            github: "https://github.com/ruanssh",
            linkedin: "https://www.linkedin.com/in/ruanppereira/",
          }}
        />
      </Container>
    </Section>
  );
}
