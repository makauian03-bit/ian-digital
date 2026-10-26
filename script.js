"use strict";

// Select the navigation elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");

menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
);

menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
);

menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close the menu after selecting a link
navLinks.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute(
"aria-label",
"Open navigation menu"
);
menuToggle.textContent = "☰";
});
});

// Automatically update the copyright year
document.getElementById("year").textContent =
new Date().getFullYear();