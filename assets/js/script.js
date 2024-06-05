window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
