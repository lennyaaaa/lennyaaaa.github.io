console.log('Hello World');

const sectionHome = document.querySelector('.home-section').style.display = "none";
const sectionAbout = document.querySelector('.about-section');
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navContact = document.querySelector('.nav-contact');
const navProjects = document.querySelectorAll('.nav-projects');


navHome.addEventListener('click', () => {
    sectionAbout.classList.add('d-none');
    sectionHome.classList.remove('d-none');
});
navAbout.addEventListener('click', () => {
    sectionHome.classList.add('d-none');
    sectionAbout.classList.remove('d-none');
});