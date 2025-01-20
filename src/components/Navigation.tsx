import { CircuitBoard, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-primary/80 backdrop-blur-sm border border-white/10 shadow-lg">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
          <CircuitBoard className="w-6 h-6" />
          <span className="font-semibold">Softenance</span>
        </Link>
        
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary/95 border-white/10">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-6">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};