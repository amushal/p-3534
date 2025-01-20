import { CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-primary/80 backdrop-blur-sm border border-white/10 shadow-lg">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <CircuitBoard className="w-6 h-6" />
          <span className="font-semibold">Softenance</span>
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white/80 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};