import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialLink from "./components/SocialLink";
import Card from "./components/Card";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="flex flex-col items-center justify-center gap-24">
        <h1 className="font-serif text-5xl font-bold text-center pt-12">
          Ludvig Stålhammar
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          <Card text="Om mig" to="/about"/>
          <Card text="Projekt" to="/projects"/>
          <Card text="Färdigheter" to="/skills"/>
          <Card text="Erfarenheter" to="/experience"/>
        </div>

        <div className="flex gap-8">
          <SocialLink href="https://github.com/Stalhammar">
            <FaGithub className="w-12 h-12" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/ludvig-stalhammar">
            <FaLinkedin className="w-12 h-12" />
          </SocialLink>
        </div>
      </main>

      <footer className="text-center text-sm p-12">
        © {new Date().getFullYear()} Ludvig Stålhammar
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
