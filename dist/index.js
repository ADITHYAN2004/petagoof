const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
nav.classList.toggle("openSearch");
nav.classList.remove("openNav");
if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
}
searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
nav.classList.add("openNav");
nav.classList.remove("openSearch");
searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
nav.classList.remove("openNav");
});


const slidesContainer = document.querySelector('.slides-container');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % 2;
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds


const backbtn=document.querySelector("#back_btn");
const frontbtn=document.querySelector("#front_btn");

const scroll=document.querySelector(".recom_img");

frontbtn.addEventListener("click",()=>{
  scroll.style.scrollBehavior="smooth"
  console.log("ko")
  scroll.scrollLeft+=320;
});
backbtn.addEventListener("click",()=>{
  scroll.style.scrollBehavior="smooth"
  console.log("ko")
  scroll.scrollLeft-=320;
});