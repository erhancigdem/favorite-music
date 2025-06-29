document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check for elements in view
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Interactive header animation
    const header = document.querySelector('header');
    
    header.addEventListener('mousemove', (e) => {
        const rect = header.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        header.style.background = `
            linear-gradient(
                135deg,
                var(--primary-color),
                var(--secondary-color),
                hsl(${(x / rect.width) * 360}, 70%, 50%)
            )
        `;
    });

    header.addEventListener('mouseleave', () => {
        header.style.background = `
            linear-gradient(
                135deg,
                var(--primary-color),
                var(--secondary-color)
            )
        `;
    });
}); 