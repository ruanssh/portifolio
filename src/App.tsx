import { Navbar } from "@/components/layout/Navbar";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Experience } from "@/pages/Experience";
import { Projects } from "@/pages/Projects";
import { Technologies } from "@/pages/Technologies";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/layout/SectionDivider";

function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Home />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
