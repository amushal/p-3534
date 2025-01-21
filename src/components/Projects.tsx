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
      title: "Manhattan Financial Group",
      description: "Financial services platform providing wealth management, investment strategies, and portfolio analysis tools.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
      technologies: ["Angular", ".NET", "SQL Server", "Azure"],
    },
    {
      title: "VG Heavy Haul",
      description: "Specialized logistics platform for heavy equipment and oversized load transportation management across North America.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Casablanca Hookah Lounge",
      description: "Premium hookah lounge management system with reservation, inventory, and customer relationship features.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
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