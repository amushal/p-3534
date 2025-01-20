export const Skills = () => {
  const skills = [
    { 
      category: "Backend & Cloud", 
      items: [".NET Core", "C#", "SQL Server", "Azure DevOps", "Node.js"] 
    },
    { 
      category: "Frontend & UI", 
      items: ["Angular", "React", "TypeScript", "Material UI", "Responsive Design"] 
    },
    { 
      category: "Specializations", 
      items: ["Web Development", "SaaS Solutions", "AI/ML", "Cybersecurity", "Enterprise Architecture"] 
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-card/80 backdrop-blur-xl p-6 rounded-lg animate-fade-up">
                <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-primary/20 rounded-full text-primary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};