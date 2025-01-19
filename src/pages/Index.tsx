import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;