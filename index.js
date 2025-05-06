// Add active class to nav links based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality (existing code)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            if (document.documentElement.getAttribute('data-theme') === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
        }
    }
    
    // Handle active nav links based on scroll
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function setActiveLink() {
        let scrollPosition = window.scrollY + 100; // Offset for better detection
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Set active link on page load
    setActiveLink();
    
    // Update active link on scroll
    window.addEventListener('scroll', setActiveLink);
});
