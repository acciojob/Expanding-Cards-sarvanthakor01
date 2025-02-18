const images = [
    {
        url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        text: 'Explore The World' // Ensure this matches the expected text
    },
    {
        url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        text: 'Wild Forest'
    },
    {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80',
        text: 'City on Winter'
    },
    {
        url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        text: 'Mountain Cloud'
    },
    {
        url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        text: 'Sunny Beach'
    }
];

const container = document.querySelector('.container');

// Create panels dynamically
images.forEach((image, index) => {
    const panel = document.createElement('div');
    panel.className = `panel${index === 0 ? ' active' : ''}`; // Set first panel as active
    panel.id = `panel-${index + 1}`;
    panel.style.backgroundImage = `url(${image.url})`;
    
    const textDiv = document.createElement('div');
    textDiv.className = 'img-text';
    textDiv.textContent = image.text; // Ensure this matches the expected text
    
    panel.appendChild(textDiv);
    container.appendChild(panel);

    // Add click event listener
    panel.addEventListener('click', () => {
        // Remove active class from all panels
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        // Add active class to clicked panel
        panel.classList.add('active');
    });
});