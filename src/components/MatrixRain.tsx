
import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initMatrix();
    };

    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    let drops: number[] = [];

    const initMatrix = () => {
      drops = [];
      for(let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -canvas.height;
      }
    };

    initMatrix();

    const drawMatrix = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#39FF14'; // Matrix green
      ctx.font = `${fontSize}px monospace`;

      for(let i = 0; i < drops.length; i++) {
        // Get a random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Randomly reset some columns when they've reached the bottom
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move the drops down
        drops[i]++;
      }
    };

    // Animation loop
    const animationFrame = setInterval(drawMatrix, 40);

    return () => {
      clearInterval(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] opacity-10 pointer-events-none"
    />
  );
};

export default MatrixRain;
