console.log("Bry's JavaScript is alive!");


const weddingDate = new Date("September 26, 2026 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});
/* =====================================================
   SCROLL ANIMATION
===================================================== */

console.log(document.querySelectorAll(".fade"));

const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            console.log("SHOW:", entry.target);

            entry.target.classList.add("show");

        }

    });

});

fades.forEach(section=>{

    console.log("Observing:", section);

    observer.observe(section);

});

/* ==========================
   LIGHTBOX
========================== */

const galleryPhotos =
document.querySelectorAll(".gallery-photo");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

const closeButton =
document.querySelector(".close");

galleryPhotos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src = photo.src;

    });

});

closeButton.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* =====================================================
   RSVP FORM
===================================================== */

const rsvpForm = document.querySelector(".rsvp-form");

if(rsvpForm){

    rsvpForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(rsvpForm);

        fetch("/", {

            method:"POST",

            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },

            body:new URLSearchParams(formData).toString()

        })
        .then(() => {

            window.location.href = "success.html";

        })
        .catch(() => {

            alert("Something went wrong. Please try again.");

        });

    });

}