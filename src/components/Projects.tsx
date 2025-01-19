import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with cart functionality and payment integration.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoLink: "https://demo.com",
      githubLink: "https://github.com",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};