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
    <section id="skills" className="py-20 px-4 bg-black/20 opacity-0 animate-fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="relative group h-[250px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-dark to-gold rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative bg-card/80 backdrop-blur-xl p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gold/10 rounded-full text-gold-light border border-gold/20"
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