document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentIndex = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    // Function to go to the next slide
    function nextSlide() {
        if (currentIndex === slideImages.length - 1) {
            showSlide(0); // Go back to the first slide
        } else {
            showSlide(currentIndex + 1); // Show the next slide
        }
    }

    // Function to go to the previous slide
    function prevSlide() {
        if (currentIndex === 0) {
            showSlide(slideImages.length - 1); // Go to the last slide
        } else {
            showSlide(currentIndex - 1); // Show the previous slide
        }
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop the auto-sliding when clicked
        nextSlide();
        startSlideShow(); // Restart the slideshow after manual navigation
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop the auto-sliding when clicked
        prevSlide();
        startSlideShow(); // Restart the slideshow after manual navigation
    });

    // Function to start the slideshow with a 10-second interval
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    }

    // Initialize the slideshow
    startSlideShow();
});
