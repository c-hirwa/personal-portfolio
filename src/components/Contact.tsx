
import React, { useState } from 'react';
import { Wifi, Code, Server, Link } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="cyber-container">
        <h2 className="cyber-title text-center mb-2">Contact</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Get in touch for collaborations, opportunities, or just to say hello
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact form */}
          <div className="lg:w-2/3">
            <div className="cyber-window p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-cyber-green mb-2 text-sm">
                    <Code className="inline w-4 h-4 mr-2" />
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-4 py-2 text-gray-200 focus:border-cyber-blue focus:outline-none"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-cyber-green mb-2 text-sm">
                    <Wifi className="inline w-4 h-4 mr-2" />
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-4 py-2 text-gray-200 focus:border-cyber-blue focus:outline-none"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-cyber-green mb-2 text-sm">
                    <Server className="inline w-4 h-4 mr-2" />
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-cyber-dark border border-cyber-green/30 rounded px-4 py-2 text-gray-200 focus:border-cyber-blue focus:outline-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`cyber-button w-full ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  {isSubmitting ? 'PROCESSING...' : 'SEND MESSAGE'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-cyber-green/20 border border-cyber-green/50 text-cyber-green rounded">
                    Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 text-red-400 rounded">
                    Error sending message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="lg:w-1/3">
            <div className="cyber-window p-6 mb-6">
              <h3 className="text-xl font-bold text-cyber-green mb-4">Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-cyber-blue mr-3" />
                  <a href="mailto:developer@example.com" className="text-gray-300 hover:text-cyber-blue transition-colors">
                    developer@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Server className="w-5 h-5 text-cyber-blue mr-3" />
                  <span className="text-gray-300">Location: Tech Valley</span>
                </div>
              </div>
            </div>
            
            <div className="cyber-window p-6">
              <h3 className="text-xl font-bold text-cyber-green mb-4">Social</h3>
              <div className="space-y-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  <Code className="w-5 h-5 mr-3" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  <Link className="w-5 h-5 mr-3" />
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  <Wifi className="w-5 h-5 mr-3" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
