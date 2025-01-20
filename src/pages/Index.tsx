import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Navigation } from "../components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default Index;