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
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative bg-card/80 backdrop-blur-xl rounded-lg p-6 space-y-4 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/20 rounded-full text-primary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};