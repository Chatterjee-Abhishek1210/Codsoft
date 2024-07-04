// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
};



const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

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

ScrollReveal().reveal(' .home-content, .heading',{ origin: 'top' });
ScrollReveal().reveal(' .projects-box , .about-content h3 ,.about-content p,.about-content a ,.home-content h1 ', { origin: 'right'});
ScrollReveal().reveal(' .skill-container ,.home-img, .home-content h3,.home-content p ', { origin: 'left'});
ScrollReveal().reveal(' .about-img , .contact form ', { origin: 'bottom'});


const typed = new Typed('.multi-text', {

    strings: ['Frontend developer','Software Engineer Student'],
    typeSpeed: 100,     
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});