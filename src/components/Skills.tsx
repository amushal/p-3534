export const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
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