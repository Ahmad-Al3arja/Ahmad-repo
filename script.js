document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
    

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClasses();
            link.classList.add('active');
        });
    });

    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
document.getElementById('menuIcon').addEventListener('click', function() {
    var navList = document.getElementById('navList');
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
});

