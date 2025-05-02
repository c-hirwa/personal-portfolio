
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
  category: 'backend' | 'frontend' | 'fullstack' | 'ai';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'frontend' | 'fullstack' | 'ai'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Workout Planner",
      description: "A solo project that generates personalized workout plans based on user goals, fitness level, and available equipment using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&h=300",
      github: "#",
      category: 'ai'
    },
    {
      id: 2,
      title: "Farm-to-Table Platform",
      description: "A collaborative team project connecting local farmers directly with consumers, featuring real-time inventory management and delivery tracking.",
      technologies: ["React", "Express", "MongoDB", "Redux"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#",
      category: 'fullstack'
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: "A functional replica of the Netflix interface with movie browsing, trailer playback, and user authentication features.",
      technologies: ["React", "Firebase", "TMDB API", "CSS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300",
      github: "#",
      demo: "#",
      category: 'frontend'
    },
    {
      id: 4,
      title: "RESTful API Service",
      description: "A backend API service for managing user data, authentication, and resource sharing with comprehensive documentation.",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
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
          <button 
            className={`cyber-button ${filter === 'ai' ? 'bg-cyber-green/20' : ''}`} 
            onClick={() => setFilter('ai')}
          >
            <Code className="inline-block w-4 h-4 mr-2" />
            AI
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
