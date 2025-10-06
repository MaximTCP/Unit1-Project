// Blur Text Animation - React Bits Style
function initBlurAnimation() {
    const titleElement = document.getElementById('blurTitle');

    if (!titleElement) {
        console.warn('Blur title element not found');
        return;
    }

    // Get the text content and split into words
    const text = titleElement.textContent.trim();
    const words = text.split(' ');

    // Clear the element
    titleElement.innerHTML = '';

    // Create spans for each word only (not spaces)
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'blur-text-word';
        wordSpan.textContent = word;
        titleElement.appendChild(wordSpan);

        // Add regular space between words (not animated)
        if (index < words.length - 1) {
            titleElement.appendChild(document.createTextNode(' '));
        }
    });

    // Trigger animation with staggered delay (200ms per word for more visibility)
    const wordSpans = titleElement.querySelectorAll('.blur-text-word');
    wordSpans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('animate');
        }, 500 + (index * 200)); // Start after 500ms, then 200ms between each word
    });
}

// Progress Bar Update
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    const progressBar = document.getElementById('progressBar');

    if (progressBar) {
        progressBar.style.width = scrollProgress + '%';
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Initialize blur animation
    initBlurAnimation();

    // Initialize smooth scroll
    initSmoothScroll();

    // Add scroll listener for progress bar
    window.addEventListener('scroll', updateProgressBar);
});
