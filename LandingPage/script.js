let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*=${sectionId}]`).classList.add('active');
        }
    });
    let header = document.querySelector("Header");

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal(' .home-content h1, .about-content h2 , .destinations h2 , .contact h2 ',{ origin: 'top' });
ScrollReveal().reveal(' .home-content p, .about-content p , .destinations , .home-content , .about-content ',{ origin: 'left' });
ScrollReveal().reveal(' .contact form ',{ origin: 'bottom' });