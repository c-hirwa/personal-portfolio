
import React from 'react';
import { Terminal, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="cyber-container">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="flex items-center text-2xl font-bold mb-6 text-cyber-green">
              <Terminal className="mr-2 h-5 w-5" /> 
              <span>about.sys</span>
            </h2>
            
            <div className="cyber-window p-6">
              <div className="text-gray-300 space-y-4">
                <p>
                  <span className="text-cyber-blue">{'>'}</span> Hello, I'm a passionate software engineer with expertise in building robust and scalable applications.
                </p>
                <p>
                  <span className="text-cyber-purple">{'>'}</span> I specialize in backend development, distributed systems, and cloud architecture while maintaining strong frontend skills.
                </p>
                <p>
                  <span className="text-cyber-green">{'>'}</span> With over <span className="text-cyber-green">5 years</span> of industry experience, I've worked on projects ranging from high-performance financial systems to consumer-facing applications.
                </p>
                <p>
                  <span className="text-cyber-orange">{'>'}</span> I'm constantly exploring new technologies and methodologies to solve complex problems and improve existing systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="flex items-center text-2xl font-bold mb-6 text-cyber-green">
              <Code className="mr-2 h-5 w-5" />
              <span>technical_profile.json</span>
            </h2>
            
            <div className="cyber-window p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "name": "Software Engineer",
  "location": "Tech Hub City",
  "focus": [
    "Backend Systems",
    "Cloud Architecture", 
    "System Design",
    "API Development"
  ],
  "experience": {
    "years": 5,
    "roles": [
      "Senior Software Engineer",
      "Backend Developer",
      "System Architect"
    ]
  },
  "education": {
    "degree": "Computer Science",
    "certifications": [
      "AWS Solutions Architect",
      "Kubernetes Administrator"
    ]
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
