import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./components/SocialLink";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-24">
      
      <h1 className="font-serif text-5xl font-bold text-center">
        Ludvig Stålhammar
      </h1>

      <div className="flex flex-row gap-8">
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

    </div>
  );
}

export default App;
