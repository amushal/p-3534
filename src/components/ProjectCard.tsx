interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className="glass-card p-6 space-y-4 animate-fade-up">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-primary/20 rounded-full text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};