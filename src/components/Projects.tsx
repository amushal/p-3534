import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description: "AI-powered analytics platform for business intelligence with machine learning capabilities.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubLink: "https://github.com",
      technologies: ["C#", ".NET", "AI/ML", "SQL Server"],
    },
    {
      title: "Cybersecurity Suite",
      description: "Enterprise security solution with threat detection and real-time monitoring.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubLink: "https://github.com",
      technologies: ["Angular", "C#", ".NET", "Cybersecurity"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};