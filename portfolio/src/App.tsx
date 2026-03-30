import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="font-serif text-5xl font-bold text-center p-18">
        Ludvig Stålhammar
      </h1>
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
