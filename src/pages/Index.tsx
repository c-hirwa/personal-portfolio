
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MatrixRain from '../components/MatrixRain';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-200">
      <MatrixRain />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
