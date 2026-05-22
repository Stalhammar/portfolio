import BackButton from "../components/BackButton";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-24">
      <h1 className="font-serif text-5xl font-bold text-center pt-12">
        Om mig
      </h1>
      <BackButton />
    </div>
  );
}

export default About;
