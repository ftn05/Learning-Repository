
const Skills = () => {
  const skills = [
    { name: "Android Development", percentage: 95 },
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "Tailwind.css", percentage: 90 },
    { name: "HTML/CSS/Javascript", percentage: 90 },
    { name: "Hadoop", percentage: 98 },
    { name: "Predictive Analysis", percentage: 90 },
    { name: "PowerBI", percentage: 90 },
   { name: "Object Oriented programming/Dynamic Programming", percentage: 90 },
    { name: "Data Structure & Algorithms", percentage: 90 },
    { name: "MongoDB", percentage: 60 },
    { name: "Testing-Junit", percentage: 89 },
    { name: "API", percentage: 90 },
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-br-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="text-cyan-400">Skills</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            These are the technologies I've worked with and my proficiency in each.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan-400">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
