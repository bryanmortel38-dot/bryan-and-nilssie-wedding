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
   LIGHTBOX + GALLERY ALBUM
========================== */

const galleryPhotos =
document.querySelectorAll(".gallery-photo");

const lightbox =
document.querySelector(".lightbox");

const lightboxImage =
document.querySelector(".lightbox-image");

const closeButton =
document.querySelector(".close");

let currentPhotoIndex = 0;


/* ==========================
   CREATE NAVIGATION BUTTONS
========================== */

const prevButton = document.createElement("button");

prevButton.className = "lightbox-prev";
prevButton.innerHTML = "&#10094;";

const nextButton = document.createElement("button");

nextButton.className = "lightbox-next";
nextButton.innerHTML = "&#10095;";

lightbox.appendChild(prevButton);
lightbox.appendChild(nextButton);


/* ==========================
   CREATE PHOTO COUNTER
========================== */

const photoCounter = document.createElement("div");

photoCounter.className = "lightbox-counter";

lightbox.appendChild(photoCounter);


/* ==========================
   SHOW PHOTO
========================== */

function showPhoto(index){

    currentPhotoIndex = index;

    const photo = galleryPhotos[currentPhotoIndex];

    lightboxImage.src = photo.src;

    photoCounter.textContent =
        `${currentPhotoIndex + 1} / ${galleryPhotos.length}`;

}


/* ==========================
   OPEN LIGHTBOX
========================== */

galleryPhotos.forEach((photo, index)=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");

        showPhoto(index);

    });

});


/* ==========================
   MORE PHOTOS CARD CLICK
========================== */

const moreGalleryCard =
document.querySelector(".gallery-more-card");

if(moreGalleryCard){

    moreGalleryCard.addEventListener("click",()=>{

        lightbox.classList.add("active");

        showPhoto(5);

    });

}


/* ==========================
   NEXT PHOTO
========================== */

nextButton.addEventListener("click",()=>{

    currentPhotoIndex++;

    if(currentPhotoIndex >= galleryPhotos.length){

        currentPhotoIndex = 0;

    }

    showPhoto(currentPhotoIndex);

});


/* ==========================
   PREVIOUS PHOTO
========================== */

prevButton.addEventListener("click",()=>{

    currentPhotoIndex--;

    if(currentPhotoIndex < 0){

        currentPhotoIndex = galleryPhotos.length - 1;

    }

    showPhoto(currentPhotoIndex);
    

});


/* ==========================
   CLOSE LIGHTBOX
========================== */

closeButton.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});



/* ==========================
   MORE PHOTOS COUNTER
========================== */

const hiddenGalleryPhotos =
document.querySelectorAll(".gallery-hidden");

const morePhotoCount =
document.querySelector(".gallery-more-count");

if(morePhotoCount){

    morePhotoCount.textContent =
        `+${hiddenGalleryPhotos.length} MORE`;

}

/* ==========================
   KEYBOARD NAVIGATION
========================== */


document.addEventListener("keydown",(event)=>{

    if(!lightbox.classList.contains("active")) return;

    if(event.key === "ArrowRight"){

        nextButton.click();

    }

    if(event.key === "ArrowLeft"){

        prevButton.click();

    }

    if(event.key === "Escape"){

        closeButton.click();

    }

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
   WEDDING DETAILS LIGHTBOX
===================================================== */

const detailsPhotos =
document.querySelectorAll(".details-photo");

const detailsLightbox =
document.querySelector(".details-lightbox");

const detailsLightboxImage =
document.querySelector(".details-lightbox-image");

const detailsCloseButton =
document.querySelector(".details-close");

let currentDetailsIndex = 0;


/* ==========================
   CREATE NAVIGATION BUTTONS
========================== */

const detailsPrevButton =
document.createElement("button");

detailsPrevButton.className = "lightbox-prev";
detailsPrevButton.innerHTML = "&#10094;";

const detailsNextButton =
document.createElement("button");

detailsNextButton.className = "lightbox-next";
detailsNextButton.innerHTML = "&#10095;";

detailsLightbox.appendChild(detailsPrevButton);
detailsLightbox.appendChild(detailsNextButton);


/* ==========================
   CREATE PHOTO COUNTER
========================== */

const detailsCounter =
document.createElement("div");

detailsCounter.className = "lightbox-counter";

detailsLightbox.appendChild(detailsCounter);


/* ==========================
   SHOW PHOTO
========================== */

function showDetailsPhoto(index){

    currentDetailsIndex = index;

    const photo =
    detailsPhotos[currentDetailsIndex];

    detailsLightboxImage.src = photo.src;

    detailsCounter.textContent =
        `${currentDetailsIndex + 1} / ${detailsPhotos.length}`;

}


/* ==========================
   OPEN DETAILS LIGHTBOX
========================== */

detailsPhotos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        detailsLightbox.classList.add("active");

        showDetailsPhoto(index);

    });

});


/* ==========================
   NEXT PHOTO
========================== */

detailsNextButton.addEventListener("click",()=>{

    currentDetailsIndex++;

    if(
        currentDetailsIndex >=
        detailsPhotos.length
    ){

        currentDetailsIndex = 0;

    }

    showDetailsPhoto(currentDetailsIndex);

});


/* ==========================
   PREVIOUS PHOTO
========================== */

detailsPrevButton.addEventListener("click",()=>{

    currentDetailsIndex--;

    if(currentDetailsIndex < 0){

        currentDetailsIndex =
            detailsPhotos.length - 1;

    }

    showDetailsPhoto(currentDetailsIndex);

});


/* ==========================
   CLOSE DETAILS LIGHTBOX
========================== */

detailsCloseButton.addEventListener("click",()=>{

    detailsLightbox.classList.remove("active");

});


/* ==========================
   KEYBOARD NAVIGATION
========================== */

document.addEventListener("keydown",(event)=>{

    if(
        !detailsLightbox.classList.contains("active")
    ) return;


    if(event.key === "ArrowRight"){

        detailsNextButton.click();

    }


    if(event.key === "ArrowLeft"){

        detailsPrevButton.click();

    }


    if(event.key === "Escape"){

        detailsCloseButton.click();

    }

});