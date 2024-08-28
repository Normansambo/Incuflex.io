document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const learnMoreBtns = document.querySelectorAll('.learn-more');

    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex === slideImages.length - 1) {
            showSlide(0);
        } else {
            showSlide(currentIndex + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            showSlide(slideImages.length - 1);
        } else {
            showSlide(currentIndex - 1);
        }
    });

    setInterval(() => {
        nextBtn.click();
    }, 5000); // Automatically move to the next slide every 5 seconds

    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const fullDescription = btn.nextElementSibling;
            fullDescription.style.display = fullDescription.style.display === 'block' ? 'none' : 'block';
        });
    });
});
