/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 600);

}, 1500);

}

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.getElementById("menu-btn");

const nav =
document.getElementById("nav");

if(menuBtn){

menuBtn.addEventListener("click", () => {

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML =
'<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML =
'<i class="fas fa-bars"></i>';

}

});

}

/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

document
.querySelectorAll("nav a")
.forEach(link => {

link.addEventListener("click", () => {

if(nav){

nav.classList.remove("active");

}

if(menuBtn){

menuBtn.innerHTML =
'<i class="fas fa-bars"></i>';

}

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

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(updateCounter, 25);

}else{

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

filterButtons.forEach(btn => {

btn.classList.remove("active");

});

button.classList.add("active");

const filter =
button.getAttribute("data-filter");

portfolioItems.forEach(item => {

if(
filter === "all" ||
item.classList.contains(filter)
){

item.style.display =
"block";

}else{

item.style.display =
"none";

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

function showSlide(index){

slides.forEach(slide => {

slide.classList.remove("active");

});

if(slides[index]){

slides[index]
.classList.add("active");

}

}

if(slides.length > 0){

setInterval(() => {

currentSlide++;

if(
currentSlide >=
slides.length
){

currentSlide = 0;

}

showSlide(currentSlide);

}, 4000);

}

/* ==========================
   HEADER SHADOW
========================== */

window.addEventListener(
"scroll",
() => {

const header =
document.querySelector("header");

if(header){

if(window.scrollY > 50){

header.style.boxShadow =
"0 0 20px rgba(0,255,136,.25)";

}else{

header.style.boxShadow =
"none";

}

}

}
);

/* ==========================
   ACTIVE NAVIGATION
========================== */

const currentPage =
window.location.pathname
.split("/")
.pop();

document
.querySelectorAll("nav a")
.forEach(link => {

const href =
link.getAttribute("href");

if(href === currentPage){

link.classList.add("active");

}

});

/* ==========================
   WHATSAPP PULSE
========================== */

const whatsapp =
document.querySelector(".whatsapp");

if(whatsapp){

setInterval(() => {

whatsapp.style.transform =
"scale(1.15)";

setTimeout(() => {

whatsapp.style.transform =
"scale(1)";

}, 500);

}, 2000);

}

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.id =
"scrollTopBtn";

document.body.appendChild(topBtn);

topBtn.style.position =
"fixed";

topBtn.style.right =
"20px";

topBtn.style.bottom =
"100px";

topBtn.style.width =
"50px";

topBtn.style.height =
"50px";

topBtn.style.border =
"none";

topBtn.style.borderRadius =
"50%";

topBtn.style.background =
"#00ff88";

topBtn.style.color =
"#000";

topBtn.style.cursor =
"pointer";

topBtn.style.display =
"none";

topBtn.style.zIndex =
"999";

window.addEventListener(
"scroll",
() => {

if(window.scrollY > 300){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}
);

topBtn.addEventListener(
"click",
() => {

window.scrollTo({

top:0,
behavior:"smooth"

});

}
);

/* ==========================
   PRELOADING EFFECT
========================== */

const images =
document.querySelectorAll("img");

images.forEach(img => {

img.loading = "lazy";

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"BLACK DRAGON GRAPHICS DESIGN READY"
);
