
import React, { useState } from 'react';
import { Database, Server, Code, Wifi, Computer, Monitor, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'devops' | 'other';
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'backend' | 'frontend' | 'devops' | 'other'>('all');
  
  const skills: Skill[] = [
    { name: "Node.js", level: 90, category: "backend", icon: <Server /> },
    { name: "Python", level: 85, category: "backend", icon: <Code /> },
    { name: "Java", level: 80, category: "backend", icon: <Database /> },
    { name: "SQL", level: 85, category: "backend", icon: <Database /> },
    { name: "React", level: 85, category: "frontend", icon: <Monitor /> },
    { name: "TypeScript", level: 80, category: "frontend", icon: <Code /> },
    { name: "CSS/SCSS", level: 75, category: "frontend", icon: <Layers /> },
    { name: "Docker", level: 80, category: "devops", icon: <Server /> },
    { name: "Kubernetes", level: 75, category: "devops", icon: <Wifi /> },
    { name: "AWS", level: 85, category: "devops", icon: <Computer /> },
    { name: "CI/CD", level: 80, category: "devops", icon: <Wifi /> },
    { name: "GraphQL", level: 70, category: "backend", icon: <Database /> },
    { name: "Redis", level: 75, category: "backend", icon: <Database /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="cyber-container">
        <h2 className="cyber-title text-center mb-2">Technical Expertise</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Languages, frameworks, and technologies I work with
        </p>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`cyber-button ${activeCategory === 'all' ? 'bg-cyber-green/20' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`cyber-button ${activeCategory === 'backend' ? 'bg-cyber-green/20' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            <Server className="inline-block w-4 h-4 mr-2" />
            Backend
          </button>
          <button 
            className={`cyber-button ${activeCategory === 'frontend' ? 'bg-cyber-green/20' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            <Monitor className="inline-block w-4 h-4 mr-2" />
            Frontend
          </button>
          <button 
            className={`cyber-button ${activeCategory === 'devops' ? 'bg-cyber-green/20' : ''}`}
            onClick={() => setActiveCategory('devops')}
          >
            <Wifi className="inline-block w-4 h-4 mr-2" />
            DevOps
          </button>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="cyber-window p-4">
              <div className="flex items-center mb-2">
                <div className="text-cyber-green mr-2">
                  {skill.icon}
                </div>
                <h3 className="text-lg text-gray-200">{skill.name}</h3>
              </div>
              <div className="h-2 bg-cyber-dark rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyber-green to-cyber-blue" 
                  style={{width: `${skill.level}%`}}
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-400">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
