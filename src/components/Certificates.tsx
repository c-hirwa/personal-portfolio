
import React from 'react';
import { Code, Terminal } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: 'code' | 'terminal';
  link?: string;
}

const Certificates: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "code",
      link: "#"
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      icon: "terminal",
      link: "#"
    },
    {
      id: 3,
      name: "Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2023",
      icon: "code",
      link: "#"
    },
    {
      id: 4,
      name: "Advanced Security Practitioner",
      issuer: "CompTIA",
      date: "2022",
      icon: "terminal",
      link: "#"
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-cyber-dark/50">
      <div className="cyber-container">
        <h2 className="cyber-title text-center mb-2">Certificates</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Professional certifications and achievements
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="cyber-window hover:border-cyber-purple/50 transition-all duration-300">
              <div className="p-6 flex items-center">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center">
                    {cert.icon === 'code' ? (
                      <Code className="w-6 h-6 text-cyber-purple" />
                    ) : (
                      <Terminal className="w-6 h-6 text-cyber-purple" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyber-purple mb-1">{cert.name}</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      className="mt-2 inline-block text-sm text-cyber-purple hover:text-cyber-blue"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Certificate →
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

export default Certificates;
