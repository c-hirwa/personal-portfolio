document.addEventListener('DOMContentLoaded', function() {
  // Variables for typing animation control
  const commands = [
    document.getElementById('command1'),
    document.getElementById('command2'),
    document.getElementById('command3')
  ];
  
  const responses = [
    document.getElementById('response1'),
    document.getElementById('response2'),
    document.getElementById('response3')
  ];
  
  // Function to simulate typing for commands
  function typeCommand(element, text, delay = 100) {
    return new Promise(resolve => {
      let index = 0;
      element.textContent = '';
      
      const interval = setInterval(() => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(resolve, 500); // Wait before showing response
        }
      }, delay);
    });
  }
  
  // Function to show responses with typing effect
  function showResponse(responseElement, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        responseElement.style.display = 'block';
        setTimeout(resolve, 2000); // Time to complete typing animation + pause
      }, delay);
    });
  }
  
  // Initial animation sequence
  async function startTerminalAnimation() {
    const commandTexts = ['whoami', 'cat about.txt', './view_portfolio.sh'];
    
    // Initial delay before starting
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // First command and response
    await typeCommand(commands[0], commandTexts[0]);
    await showResponse(responses[0], 100);
    
    // Second command and response
    await typeCommand(commands[1], commandTexts[1]);
    await showResponse(responses[1], 100);
    
    // Third command and response
    await typeCommand(commands[2], commandTexts[2]);
    await showResponse(responses[2], 100);
    
    // Show blinking cursor after all commands
    document.querySelector('.blink').style.display = 'inline-block';
  }
  
  // Start the terminal animation
  startTerminalAnimation();
  
  // Create matrix rain effect in background of terminal
  const terminalBody = document.querySelector('.terminal-body');
  
  function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    terminalBody.style.position = 'relative';
    terminalBody.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = terminalBody.offsetWidth;
    canvas.height = terminalBody.offsetHeight;
    
    const columns = Math.floor(canvas.width / 15);
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        ctx.fillText(text, i * 15, drops[i] * 15);
        
        if (drops[i] * 15 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    setInterval(draw, 50);
    
    // Resize handler
    window.addEventListener('resize', function() {
      canvas.width = terminalBody.offsetWidth;
      canvas.height = terminalBody.offsetHeight;
    });
  }
  
  // Initialize matrix rain effect
  createMatrixRain();
});