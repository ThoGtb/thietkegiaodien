// Add event listener to navigation links
const navLinks = document.querySelectorAll('.sidebar a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Add active class to the clicked link
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// // Add hover effect to navigation links
// navLinks.forEach(link => {
//   link.addEventListener('mouseover', () => {
//     link.style.color = '#ffd700';
//   });
//   link.addEventListener('mouseout', () => {
//     link.style.color = '#fff';
//   });
// });

// Add animation to the header images
const headerImages = document.querySelectorAll('header img');
headerImages.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

// Add animation to the digital reality text
const digitalRealityText = document.querySelector('.left-content p span');
digitalRealityText.addEventListener('mouseover', () => {
  digitalRealityText.style.transform = 'scale(1.1)';
  digitalRealityText.style.color = '#fff';
});
digitalRealityText.addEventListener('mouseout', () => {
  digitalRealityText.style.transform = 'scale(1)';
  digitalRealityText.style.color = 'rgb(251, 187, 69)';
});

// Add animation to the image in the right content
const rightContentImage = document.querySelector('.right-content img');
rightContentImage.addEventListener('mouseover', () => {
  rightContentImage.style.transform = 'scale(1.1)';
});
rightContentImage.addEventListener('mouseout', () => {
  rightContentImage.style.transform = 'scale(1)';
});
// Get the bubble container element
const bubbleContainer = document.querySelector('.bubble-container');

// Function to create a random bubble element
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Randomize bubble properties
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomSize = Math.random() * 50 + 20; // between 20 and 70
  const randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;

  bubble.style.top = `${randomY}px`;
  bubble.style.left = `${randomX}px`;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;
  bubble.style.backgroundColor = randomColor;

  bubbleContainer.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 3000); // Remove the bubble after 3 seconds
}
// Create multiple bubbles at once
function createMultipleBubbles() {
    for (let i = 0; i < 10; i++) {
      createBubble();
    }
  }
// Create a new bubble every 1-3 seconds
setInterval(() => {
  createBubble();
}, Math.random() * 2000 ); // between 1 and 3 seconds
bubbleContainer.appendChild(bubble);
bubbles.push(bubble);

// Update bubble position and remove when it reaches the top
function updateBubblePosition() {
  const bubbleTop = bubble.offsetTop;
  if (bubbleTop < -bubble.offsetHeight) {
    bubble.remove();
    const index = bubbles.indexOf(bubble);
    if (index !== -1) {
      bubbles.splice(index, 1);
    }
  } else {
    bubble.style.transform = `translateY(${bubbleTop - 10}px)`;
    requestAnimationFrame(updateBubblePosition);
  }
}
updateBubblePosition();
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // Thay đổi thời gian cuộn (1000 mili giây = 1 giây)
        return false;
      }
    });
  });
  // Get the elements
const leftContent = document.querySelector('.left-content');
const rightImage = document.querySelector('.right-content');

// Set the initial styles
leftContent.style.transform = 'translateY(-100%)';
rightImage.style.transform = 'translateX(100%)';

// Add event listener to window load
window.addEventListener('load', () => {
  // Animate the left content
  leftContent.style.transition = 'transform 1s ease-in-out';
  leftContent.style.transform = 'translateY(0)';

  // Animate the right image
  rightImage.style.transition = 'transform 1s ease-in-out';
  rightImage.style.transform = 'translateX(0)';
});
document.querySelector('.sidebar-toggle').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});
// Toggle sidebar function
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active',);
}
