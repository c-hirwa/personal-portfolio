document.addEventListener('DOMContentLoaded', function() {
  // Project data
  const projects = [
    {
      title: "AI Workout Planner",
      description: "A personalized workout planning application powered by AI that creates custom fitness routines based on user goals, fitness level, and available equipment.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "Python", "Machine Learning", "API Integration"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Farm-to-Table Platform",
      description: "A comprehensive platform connecting local farmers directly with consumers. Includes marketplace, delivery logistics, and inventory management.",
      image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "MongoDB", "Express", "Google Maps API"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Netflix Clone",
      description: "A frontend replica of Netflix with responsive design, dynamic content loading, and video playback functionality using public APIs.",
      image: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "CSS", "TMDb API", "Responsive Design"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "RESTful API & Database",
      description: "A robust backend service providing APIs for a content management system with user authentication, authorization, and data persistence.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "API Design"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  // Function to render project cards
  function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      projectCard.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.demoLink}" class="project-link" target="_blank">Demo</a>
            <a href="${project.codeLink}" class="project-link" target="_blank">Code</a>
          </div>
        </div>
      `;
      
      projectsContainer.appendChild(projectCard);
    });
  }
  
  // Initialize projects
  renderProjects();
  
  // Add hover effects and animations to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Mouse enter animation
    card.addEventListener('mouseenter', function() {
      const title = this.querySelector('.project-title');
      
      // Title glitch effect
      if (title) {
        title.classList.add('glitch');
        title.setAttribute('data-text', title.textContent);
        
        // Remove effect after animation completes
        setTimeout(() => {
          title.classList.remove('glitch');
        }, 2000);
      }
    });
    
    // Add reveal animation when scrolled into view
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s forwards';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    observer.observe(card);
  });
  
  // Keyframe animation for fade in effect
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .project-card {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
});