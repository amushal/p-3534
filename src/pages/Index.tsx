import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Index;