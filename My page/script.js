/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1500);

});


/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML =
            '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    }

});


/* Close menu after click */

document.querySelectorAll("nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 80;

        if (current < target) {

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(updateCounter, 25);

        } else {

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

});


/* ==========================
   PORTFOLIO FILTER
========================== */

const filterButtons =
document.querySelectorAll(
".filter-buttons button"
);

const portfolioItems =
document.querySelectorAll(
".portfolio-item"
);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.getAttribute("data-filter");

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ==========================
   TESTIMONIAL SLIDER
========================== */

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index]
    .classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if (
        currentSlide >= slides.length
    ) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 4000);


/* ==========================
   HEADER SHADOW
========================== */

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
        "0 0 20px rgba(0,255,136,.25)";

    } else {

        header.style.boxShadow =
        "none";

    }

});


/* ==========================
   SCROLL REVEAL
========================== */

ScrollReveal({

    distance: "80px",
    duration: 1500,
    delay: 150,
    reset: false

});

ScrollReveal().reveal(

".hero-text",

{
origin: "left"
}

);

ScrollReveal().reveal(

".hero-image",

{
origin: "right"
}

);

ScrollReveal().reveal(

".service-card",

{
origin: "bottom",
interval: 150
}

);

ScrollReveal().reveal(

".portfolio-item",

{
origin: "bottom",
interval: 120
}

);

ScrollReveal().reveal(

".about-box",

{
origin: "top"
}

);

ScrollReveal().reveal(

".slide",

{
origin: "bottom"
}

);

ScrollReveal().reveal(

".contact-form",

{
origin: "bottom"
}

);


/* ==========================
   SMOOTH BUTTON EFFECT
========================== */

const buttons =
document.querySelectorAll(
".btn, .btn-outline"
);

buttons.forEach(button => {

    button.addEventListener(
    "mouseenter",
    () => {

        button.style.transform =
        "translateY(-5px)";

    });

    button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform =
        "translateY(0px)";

    });

});


/* ==========================
   FLOATING WHATSAPP PULSE
========================== */

const whatsapp =
document.querySelector(".whatsapp");

setInterval(() => {

    whatsapp.style.transform =
    "scale(1.15)";

    setTimeout(() => {

        whatsapp.style.transform =
        "scale(1)";

    }, 500);

}, 2000);


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if (
            pageYOffset >=
            sectionTop - 200
        ) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   FUTURE FEATURES
========================== */

// Dark/Light Mode
// Portfolio Lightbox
// Contact Form API
// Blog Section
// Pricing Cards
// Live Chat Widget

console.log(
"BLACK DRAGON WEBSITE READY"
);
