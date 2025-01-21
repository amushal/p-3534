import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "SquadCare",
      description: "Healthcare management platform for streamlined patient care and administrative operations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "MFG",
      description: "Manufacturing solutions platform for optimizing production processes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["Angular", ".NET", "SQL Server", "Azure"],
    },
    {
      title: "VG Heavy Haul",
      description: "Logistics management system for heavy equipment transportation.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Casablanca",
      description: "Real estate management and booking platform.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      technologies: ["Vue.js", ".NET Core", "SQL Server", "Azure"],
    },
    {
      title: "Vybz",
      description: "Entertainment and event management platform.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Savvy Off",
      description: "E-commerce platform for exclusive deals and offers.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Vercel"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};