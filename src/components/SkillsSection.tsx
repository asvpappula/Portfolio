
const SkillChip: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  const getWidth = () => {
    return `${level * 20}%`;
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-cyber-neon-blue">{level * 20}%</span>
      </div>
      <div className="w-full bg-cyber-muted rounded-full h-2">
        <div 
          className="bg-cyber-primary h-2 rounded-full transition-all duration-1000" 
          style={{ width: getWidth() }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const codingSkills = [
    { name: "Python", level: 5 },
    { name: "Java", level: 5 },
    { name: "HTML", level: 4 },
    { name: "CSS", level: 3.5 },
    { name: "C++", level: 3 }
  ];

  const leadershipSkills = [
    { name: "Event Management", level: 5 },
    { name: "Teamwork", level: 5 },
    { name: "Leadership", level: 5 },
    { name: "Team Management", level: 4 }
  ];

  const otherSkills = [
    { name: "Budgeting Skills", level: 3.5 },
    { name: "Knowledge of Finance", level: 3.5 },
    { name: "Advertising Management", level: 3.5 },
    { name: "Fundraising", level: 3.5 }
  ];

  return (
    <div className="container mx-auto px-4 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8 cyber-text">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-6 text-cyber-accent">Programming</h3>
          {codingSkills.map((skill) => (
            <SkillChip key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-6 text-cyber-accent">Leadership</h3>
          {leadershipSkills.map((skill) => (
            <SkillChip key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        <div className="neon-card">
          <h3 className="text-xl font-semibold mb-6 text-cyber-accent">Business</h3>
          {otherSkills.map((skill) => (
            <SkillChip key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-cyber-accent">Other Capabilities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {["Business Partnerships", "Communication", "Project Management", "Problem Solving", "Adaptability", "Time Management"].map((item) => (
            <div 
              key={item} 
              className="bg-cyber-muted border border-cyber-primary/50 rounded-md py-3 px-4 text-center hover:border-cyber-primary transition-all duration-300 hover:shadow-[0_0_10px_rgba(33,150,243,0.3)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
