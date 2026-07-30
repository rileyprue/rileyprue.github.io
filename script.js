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
   SCROLL PROGRESS BAR
========================= */


const progress =
document.querySelector(".scroll-progress");


window.addEventListener("scroll",()=>{


if(!progress) return;


let scrollTop =
document.documentElement.scrollTop;


let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


let progressWidth =
(scrollTop / height) * 100;


progress.style.width =
progressWidth + "%";


});







/* =========================
   HERO PARALLAX EFFECT
========================= */


const heroImage =
document.querySelector(".hero-image");


window.addEventListener("scroll",()=>{


if(!heroImage) return;


let scroll =
window.scrollY;


heroImage.style.transform =

`translateY(${scroll * 0.15}px) scale(1.12)`;


});








/* =========================
   SMOOTH IMAGE LOADING
========================= */


const images =
document.querySelectorAll("img");


images.forEach(image=>{


image.addEventListener("load",()=>{


image.classList.add("loaded");


});


});








/* =========================
   CURSOR GLOW EFFECT
========================= */


const cursor =
document.querySelector(".cursor-glow");


document.addEventListener("mousemove",(e)=>{


if(!cursor) return;


cursor.style.left =
e.clientX + "px";


cursor.style.top =
e.clientY + "px";


});








/* =========================
   TERMINAL TYPING EFFECT
========================= */


const typingElements =
document.querySelectorAll(".typing");



const typingObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const element =
entry.target;


const text =
element.textContent.trim();



element.textContent = "";



let index = 0;



function typeText(){


if(index < text.length){


element.textContent +=
text.charAt(index);


index++;


setTimeout(typeText,70);


}


}



typeText();



typingObserver.unobserve(element);


}


});


},

{

threshold:0.7

}

);



typingElements.forEach(element=>{


typingObserver.observe(element);


});








/* =========================
   CARD TILT EFFECT
========================= */


const cards =
document.querySelectorAll(
".gallery-card, .future-card"
);



cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
((y / rect.height) - 0.5) * -8;


const rotateY =
((x / rect.width) - 0.5) * 8;



card.style.transform =

`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});




card.addEventListener("mouseleave",()=>{


card.style.transform = "";

});


});
