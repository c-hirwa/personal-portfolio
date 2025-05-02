
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-cyber-green/30 bg-cyber-black">
      <div className="cyber-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Terminal className="h-5 w-5 text-cyber-green mr-2" />
            <span className="font-mono font-bold text-lg tracking-wider text-cyber-green">CHRIS_HIRWA</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {currentYear} Chris Hirwa. All rights reserved.</p>
            <p className="mt-1">
              <span className="text-cyber-green">{'>'}</span> Made with React & TypeScript
            </p>
          </div>
          
          <nav className="mt-6 md:mt-0">
            <ul className="flex space-x-6">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`}
                    className="text-sm text-gray-500 hover:text-cyber-green transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
