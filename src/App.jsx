import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollProgress } from "./hooks/useScrollProgress";

export default function App() {
  const progress = useScrollProgress();
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070a12]">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <BackgroundFX />
      <Navbar />
      <main id="top" className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
