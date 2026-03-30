import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="font-serif text-5xl font-bold text-center p-18">
        Ludvig Stålhammar
      </h1>
      <div className="flex gap-8">
        <a
          href="https://github.com/Stalhammar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-12 h-12 cursor-pointer transition transform hover:scale-105" />
        </a>
        <a
          href="https://www.linkedin.com/in/ludvig-stalhammar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-12 h-12 cursor-pointer transition transform hover:scale-105" />
        </a>
      </div>
    </div>
  );
}

export default App;
