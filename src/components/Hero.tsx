
import React, { useEffect, useState, useRef } from 'react';
import { Server } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Welcome to my digital workspace";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const matrixRef = useRef<HTMLDivElement>(null);

  // Typing effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(typingTimer);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText]);

  // Matrix rain effect
  useEffect(() => {
    if (!matrixRef.current) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = matrixRef.current.offsetWidth;
    canvas.height = matrixRef.current.offsetHeight;
    matrixRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const chars = "10アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const font_size = 14;
    const columns = canvas.width / font_size;
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height / font_size;
    }
    
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#39FF14";
      ctx.font = font_size + "px JetBrains Mono";
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const animationFrame = setInterval(draw, 35);
    
    return () => {
      clearInterval(animationFrame);
      if (matrixRef.current?.contains(canvas)) {
        matrixRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={matrixRef} className="absolute inset-0 z-0"></div>
      <div className="cyber-window relative z-10 max-w-4xl w-full mx-4 p-8 md:p-12">
        <div className="absolute top-0 left-0 right-0 h-6 bg-cyber-dark border-b border-cyber-green/30 flex items-center px-4">
          <Server className="w-3 h-3 text-cyber-green mr-2" />
          <span className="text-xs text-cyber-green">user@cyberdeck ~ $</span>
        </div>
        <div className="pt-8">
          <h2 className="text-lg text-cyber-green mb-4">{"> initializing system..."}</h2>
          <h1 className="cyber-title mb-6">
            <span className="cyber-text">{displayText}</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-2xl">
            <span className="text-cyber-purple">{'>'}</span> I'm Chris Hirwa, a Software Engineering Student at ALU specializing in 
            Web Development, AI projects, and Cloud Engineering.
          </p>
          
          {isTypingComplete && (
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="cyber-button">
                View Projects
              </a>
              <a href="#contact" className="cyber-button">
                Connect
              </a>
            </div>
          )}
        </div>
        <div className="scanline"></div>
      </div>
    </div>
  );
};

export default Hero;
