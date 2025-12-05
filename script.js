document.addEventListener('DOMContentLoaded', () => {
    
    // Hero 3D Tilt Effect
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');

    heroSection.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        heroContent.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroContent.style.transform = `rotateY(0deg) rotateX(0deg)`;
        heroContent.style.transition = 'transform 0.5s ease';
    });

    heroSection.addEventListener('mouseenter', () => {
        heroContent.style.transition = 'none';
    });

    // Portfolio 3D Slider
    const slider = document.querySelector('.slider-3d');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentAngle = 0;

    // Sample portfolio items (in a real app, this would come from the admin panel)
    const portfolioItems = [
        { title: 'Project 1', image: '' },
        { title: 'Project 2', image: '' },
        { title: 'Project 3', image: '' },
        { title: 'Project 4', image: '' },
        { title: 'Project 5', image: '' }
    ];

    // Update slide content with images
    function updateSlides() {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            const content = slide.querySelector('.slide-content');
            const item = portfolioItems[index];
            
            if (item && item.image) {
                content.innerHTML = `<img src="${item.image}" alt="${item.title}">`;
            } else {
                content.textContent = item ? item.title : `Project ${index + 1}`;
            }
        });
    }

    // Initialize slides
    updateSlides();

    nextBtn.addEventListener('click', () => {
        currentAngle -= 72; // 360 / 5 slides = 72 degrees
        slider.style.transform = `rotateY(${currentAngle}deg)`;
    });

    prevBtn.addEventListener('click', () => {
        currentAngle += 72;
        slider.style.transform = `rotateY(${currentAngle}deg)`;
    });

    // WhatsApp Contact Handling
    // Direct link to WhatsApp is handled by HTML

    // Smooth Scrolling for Anchor Links (Fallback/Enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
