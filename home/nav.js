
const hamburger = document.querySelector('.hamburger');
const logoAndFavorites = document.querySelector('.logo-favorite-icons');
const dropdowns = document.querySelector(".wrapper-links");
const search = document.querySelector(".search");
const signUpLinks = document.querySelector(".sign-up-links");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    dropdowns.classList.toggle("active");
    signUpLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-link")
    .forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove('active');
        dropdowns.classList.remove('active');
        signUpLinks.classList.remove('active');
    }));