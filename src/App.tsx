import { Navbar } from "@/components/layout/Navbar";
import { Inicio } from "@/pages/Inicio";
import { Sobre } from "@/pages/Sobre";
import { Experiencia } from "@/pages/Experiencia";
import { Projetos } from "@/pages/Projetos";
import { Tecnologias } from "@/pages/Tecnologias";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Inicio />
        <Sobre />
        <Experiencia />
        <Projetos />
        <Tecnologias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
