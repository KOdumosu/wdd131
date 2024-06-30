const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
const currentyear = document.querySelector("#currentyear");


// use the date object
const today = new Date();

currentyear.innerHTML = "&copy;${today.getFullYear()} 🐱‍👤 Odumosu Kehinde Olusegun 🐱‍👤 Nigeria";

const lastModified = document.querySelector("#lastModified")

lastModified.innerHTML = "Last Modification ${document.lastModified}";

