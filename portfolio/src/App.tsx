import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./components/SocialLink";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <main className="flex flex-col items-center justify-center gap-24">
        <h1 className="font-serif text-5xl font-bold text-center pt-12">
          Ludvig Stålhammar
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          <Card text="Om mig" />
          <Card text="Projekt" />
          <Card text="Färdigheter" />
          <Card text="Erfarenheter" />
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

export default App;
