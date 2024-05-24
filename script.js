document.getElementById('flower-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const inputContainer = document.getElementById('input-container');
    const questionContainer = document.getElementById('question-container');
    const typewriterText = document.getElementById('typewriter-text');
    const revealButton = document.getElementById('reveal-button');
    
    // Hide the input container
    inputContainer.classList.add('hidden');
    
    // Show the question container
    questionContainer.classList.remove('hidden');
    
    // Set the typewriter text
    typewriterText.textContent = "Wanna know my favorite flower?";
    
    // Add the fade-in class to the button after a delay
    setTimeout(() => {
        revealButton.classList.remove('hidden');
        revealButton.classList.add('fade-in', 'show');
    }, 3500); // Duration of the typewriter effect
    
    // Smoothly scroll to the bottom of the page
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('reveal-button').addEventListener('click', function() {
    const questionContainer = document.getElementById('question-container');
    const loveContainer = document.getElementById('love-container');
    const loveText = document.getElementById('love-text');    
    // Hide the question container
    questionContainer.classList.add('hidden');
    
    // Show the love container
    loveContainer.classList.remove('hidden');
    
    // Smoothly reveal the love text
    setTimeout(() => {
        loveText.style.opacity = 1;
    }, 1000);

    setTimeout(createFlowers, 1000); // Adjust delay as needed
});


function createFlowers() {
    const numFlowers = 50; // Number of flowers
    const flowerImages = ['img/1.png']; // Array of flower images
    const flowerRainContainer = document.getElementById('flower-rain');

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('img');
        flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.top = `${-Math.random() * 100}vh`; // Set random top position
        flower.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
        flowerRainContainer.appendChild(flower);
    }
}
