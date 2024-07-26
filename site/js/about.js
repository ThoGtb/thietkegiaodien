const bubbleContainer = document.querySelector('.bubble-container');
const sidebarLinks = document.querySelectorAll('.sidebar a');


function createBubbles() {
  for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Randomize bubble properties
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomSize = Math.random() * 50 + 20; // between 20 and 70
    const randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;

    bubble.style.left = `${randomX}px`;
    bubble.style.top = `${randomY}px`;
    bubble.style.width = `${randomSize}px`;
    bubble.style.height = `${randomSize}px`;
    bubble.style.backgroundColor = randomColor;

    bubbleContainer.appendChild(bubble);

    // Animate the bubble
    bubble.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100vh)' }
    ], {
      duration: 2000,
      easing: 'ease-out',
      fill: 'forwards'
    });

    // Remove the bubble after animation
    setTimeout(() => {
      bubble.remove();
    }, 2000);
  }
}

function showContent(contentId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });
  const contentElement = document.getElementById(contentId);
  contentElement.style.display = ''; // Remove inline style
  contentElement.style.display = 'block'; // Set display to block

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`[data-content="${contentId}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showContent('skills-content');
});