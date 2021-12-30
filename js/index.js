const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__item');

const accents = [document.querySelector('.nav__color_btn1'), document.querySelector('.nav__color_btn2'), document.querySelector('.nav__color_btn3')];

console.log(navLinks.length);
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // console.log("Im here");
        document.body.classList.remove('nav-open');
    })
});


accents.forEach((accent, index) => {
    accent.addEventListener('click', () => {
        // console.log(`here${index}`);
        document.body.classList.remove('accent1');
        document.body.classList.remove('accent2');
        document.body.classList.remove('accent3');
        document.body.classList.toggle(`accent${index + 1}`);
    })
})