/* =========================
   APPLE STYLE SCROLL REVEAL
========================= */


const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},

{

threshold:0.15

}

);



document.querySelectorAll(".reveal").forEach(section => {

observer.observe(section);

});








/* =========================
   HERO PARALLAX EFFECT
========================= */


const heroImage = document.querySelector(".hero-image");


window.addEventListener("scroll", () => {


if(!heroImage) return;


let scroll = window.scrollY;


heroImage.style.transform =

`translateY(${scroll * 0.15}px) scale(1.12)`;


});








/* =========================
   SMOOTH IMAGE LOADING
========================= */


const images = document.querySelectorAll("img");


images.forEach(image => {


image.addEventListener("load", () => {

image.classList.add("loaded");

});

   const cursor = document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});


});
