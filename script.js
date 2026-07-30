/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:.15
});


document.querySelectorAll(".reveal")
.forEach(section=>{
observer.observe(section);
});





/* =========================
   SCROLL PROGRESS
========================= */

const progress =
document.querySelector(".scroll-progress");


window.addEventListener("scroll",()=>{

if(!progress) return;


const scrollTop =
document.documentElement.scrollTop;


const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;


progress.style.width =
(scrollTop / height) * 100 + "%";


});





/* =========================
   HERO PARALLAX
========================= */


const heroImage =
document.querySelector(".hero-image");


window.addEventListener("scroll",()=>{


if(!heroImage) return;


heroImage.style.transform =
`translateY(${window.scrollY * .12}px) scale(1.05)`;


});





/* =========================
   CURSOR GLOW
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
   TYPING EFFECT
========================= */


const typingElements =
document.querySelectorAll(".typing");


const typingObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const element =
entry.target;


const text =
element.textContent;


element.textContent="";


let i=0;


function type(){

if(i < text.length){

element.textContent += text[i];

i++;

setTimeout(type,60);

}

}


type();


typingObserver.unobserve(element);


}


});


},{
threshold:.8
});



typingElements.forEach(element=>{

typingObserver.observe(element);

});
