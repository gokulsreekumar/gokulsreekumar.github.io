const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__item');
console.log(navLinks.length);
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Im here");
        document.body.classList.remove('nav-open');
    })
});
