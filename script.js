emailjs.init({
  publicKey: "UqOCku3DfsV3908R3"
});
  const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

// Change theme when clicked
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    }

});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_5m34sy9",
        "template_streo4p",
        templateParams
    ).then(function(response) {

        alert("Message sent successfully!");

        contactForm.reset();

    }).catch(function(error) {

        alert("Message failed to send. Please try again.");

        console.log(error);

    });

});

// Typing Animation
const typingText = document.querySelector(".typing");

const words = [
    "Future Software Developer",
    "Web Developer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll("section");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("reveal", "active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);