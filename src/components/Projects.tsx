
import React, { useState } from 'react';
import { Code, Link, Server, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  category: 'backend' | 'frontend' | 'fullstack';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'frontend' | 'fullstack'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Distributed Cache System",
      description: "High-performance distributed caching system built with Redis and Node.js to handle millions of requests per day.",
      technologies: ["Node.js", "Redis", "Docker", "AWS"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300",
      github: "#",
      category: 'backend'
    },
    {
      id: 2,
      title: "Secure Authentication API",
      description: "Zero-trust authentication service with multi-factor authentication and JWT token management.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "OAuth"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&h=300",
      github: "#",
      category: 'backend'
    },
    {
      id: 3,
      title: "Network Monitoring Dashboard",
      description: "Real-time network monitoring tool with interactive visualizations and alert system.",
      technologies: ["React", "D3.js", "WebSockets", "Node.js"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#",
      category: 'fullstack'
    },
    {
      id: 4,
      title: "Code Deployment Pipeline",
      description: "Automated CI/CD pipeline for seamless code deployment with testing and rollback capabilities.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300",
      github: "#",
      category: 'backend'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-cyber-dark/50">
      <div className="cyber-container">
        <h2 className="cyber-title text-center mb-2">Projects</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          A showcase of my technical projects and software engineering work
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`cyber-button ${filter === 'all' ? 'bg-cyber-green/20' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`cyber-button ${filter === 'backend' ? 'bg-cyber-green/20' : ''}`} 
            onClick={() => setFilter('backend')}
          >
            <Server className="inline-block w-4 h-4 mr-2" />
            Backend
          </button>
          <button 
            className={`cyber-button ${filter === 'frontend' ? 'bg-cyber-green/20' : ''}`} 
            onClick={() => setFilter('frontend')}
          >
            <Code className="inline-block w-4 h-4 mr-2" />
            Frontend
          </button>
          <button 
            className={`cyber-button ${filter === 'fullstack' ? 'bg-cyber-green/20' : ''}`} 
            onClick={() => setFilter('fullstack')}
          >
            <Database className="inline-block w-4 h-4 mr-2" />
            Fullstack
          </button>
        </div>
        
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="cyber-window group hover:border-cyber-blue/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden border-b border-cyber-green/30">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-cyber-black/70 px-2 py-1 rounded border border-cyber-green/50 text-cyber-green"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-cyber-black/70 px-2 py-1 rounded border border-cyber-green/50 text-cyber-green">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyber-blue mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-sm text-cyber-green hover:text-cyber-blue flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-sm text-cyber-green hover:text-cyber-blue flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Link className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
