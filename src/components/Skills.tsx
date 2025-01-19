export const Skills = () => {
  const skills = [
    { 
      category: "Backend & Cloud", 
      items: [".NET Core", "C#", "SQL Server", "Azure DevOps"] 
    },
    { 
      category: "Frontend & UI", 
      items: ["Angular", "TypeScript", "React", "Material UI"] 
    },
    { 
      category: "Specializations", 
      items: ["AI/ML", "Cybersecurity", "Enterprise Architecture", "System Integration"] 
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(({ category, items }) => (
            <div key={category} className="glass-card p-6 animate-fade-up">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};