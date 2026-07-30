/* =========================
   SCROLL REVEAL
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
  threshold: 0.15
});


document.querySelectorAll(".reveal").forEach(section => {
  observer.observe(section);
});





/* =========================
   SCROLL PROGRESS
========================= */

const progress = document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {

  if(!progress) return;


  const scrollTop = document.documentElement.scrollTop;

  const height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;


  const percentage =
  (scrollTop / height) * 100;


  progress.style.width =
  percentage + "%";

});







/* =========================
   HERO IMAGE MOVEMENT
========================= */

const heroImage =
document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

  if(!heroImage) return;


  const scroll =
  window.scrollY;


  heroImage.style.transform =
  `translateY(${scroll * 0.08}px) scale(1.08)`;

});







/* =========================
   IMAGE LOADING
========================= */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("load", () => {

    image.classList.add("loaded");

  });

});







/* =========================
   CURSOR GLOW
========================= */

const cursor =
document.querySelector(".cursor-glow");


document.addEventListener("mousemove", (e) => {

  if(!cursor) return;


  cursor.style.left =
  e.clientX + "px";


  cursor.style.top =
  e.clientY + "px";

});







/* =========================
   TYPEWRITER EFFECT
========================= */

const typingElements =
document.querySelectorAll(".typing");


const typingObserver =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {


if(entry.isIntersecting){


const element =
entry.target;


const text =
element.textContent.trim();


element.textContent = "";


let index = 0;



function type(){

if(index < text.length){

element.textContent +=
text[index];

index++;

setTimeout(type, 65);

}

}


type();


typingObserver.unobserve(element);


}


});


},
{
threshold:0.5
});


typingElements.forEach(element => {

typingObserver.observe(element);

});
