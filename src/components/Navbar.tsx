
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code, Zap, Server } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cyber-black/80 backdrop-blur-md border-b border-cyber-green/30 px-6 py-4">
      <div className="cyber-container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors">
          <Terminal className="h-5 w-5" />
          <span className="font-mono font-bold text-lg tracking-wider">CHRIS_HIRWA</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-cyber-green hover:text-cyber-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <Code className="h-6 w-6" />
          ) : (
            <Zap className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`}
              className="text-sm uppercase tracking-wider text-gray-400 hover:text-cyber-green transition-colors duration-300"
            >
              <span className="text-cyber-green">/</span>{item}
            </a>
          ))}
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-cyber-green/20">
          <div className="cyber-container flex flex-col space-y-4">
            {['about', 'projects', 'skills', 'certificates', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className="text-sm uppercase tracking-wider text-gray-400 hover:text-cyber-green transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-cyber-green">~/</span>{item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
