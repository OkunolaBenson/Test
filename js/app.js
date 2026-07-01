const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdown = dropdownToggle.parentElement;

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

dropdownToggle.addEventListener("click", (e) => {
if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("open");
}
});
