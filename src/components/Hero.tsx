import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <div className="animate-fade-up space-y-6 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
            Softenance
          </h1>
          <p className="text-xl text-accent/80 font-medium">Software Consulting Solutions</p>
        </div>
        <p className="text-lg md:text-xl text-gray-300">
          Enterprise-grade solutions in Web Development, SaaS, AI, Cybersecurity, and Full-Stack Development.
          Delivering scalable, secure, and innovative software solutions for businesses.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-2 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com"
             className="p-2 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};