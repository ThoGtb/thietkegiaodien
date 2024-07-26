// Get the bubble container and education cards
const bubbleContainer = document.querySelector('.bubble-container');


// Function to create a bubble
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 5 + 2}s`;
    bubbleContainer.appendChild(bubble);
}


// Create bubbles on page load
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 10; i++) {
        createBubble();
    }
    slideInCards();
});

// Create bubbles on click
document.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        createBubble();
    }
    slideInCards();
});
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('animate');
});
