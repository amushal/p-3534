import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

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
      <ScrollToTop />
    </>
  );
};

export default Index;