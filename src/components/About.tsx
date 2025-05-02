
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
                  <span className="text-cyber-blue">{'>'}</span> Hello, I'm Chris Hirwa, a Software Engineering Student at ALU with a passion for creating innovative digital solutions.
                </p>
                <p>
                  <span className="text-cyber-purple">{'>'}</span> I specialize in Web Development, AI projects, and Cloud Engineering while continuously expanding my knowledge in these areas.
                </p>
                <p>
                  <span className="text-cyber-green">{'>'}</span> Currently in my <span className="text-cyber-green">2nd year</span> of studies, I'm actively working on projects that combine my technical skills with real-world applications.
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
  "name": "Chris Hirwa",
  "title": "Software Engineering Student",
  "location": "African Leadership University",
  "focus": [
    "Web Development",
    "AI Projects", 
    "Cloud Engineering"
  ],
  "education": {
    "institution": "African Leadership University",
    "degree": "BSc in Software Engineering",
    "year": "2nd year"
  },
  "interests": [
    "Web Development",
    "AI Projects",
    "Cloud Engineering"
  ]
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
