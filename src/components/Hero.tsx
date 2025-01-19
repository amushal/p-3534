import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <div className="animate-fade-up space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          I build exceptional digital experiences with modern technologies.
          Focused on creating responsive and user-friendly applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-2 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-2 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com"
             className="p-2 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};