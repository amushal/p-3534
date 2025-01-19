import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Enterprise SaaS Platform",
      description: "Cloud-based SaaS solution for business process automation and workflow management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["C#", ".NET", "Angular", "Azure"],
    },
    {
      title: "Web Development Suite",
      description: "Modern web application platform with responsive design and enterprise integration capabilities.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["React", "TypeScript", "Node.js", "SQL Server"],
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