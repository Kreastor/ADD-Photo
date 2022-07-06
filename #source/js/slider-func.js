"use strict"
// document.body.addEventListener("click", (event) => {
//   let target = event.target;
//   console.log(target);
// })

// Our works slider 
const images = document.querySelectorAll(".our-works__slider-img");
const sliderWrapper = document.querySelector(".our-works__slider-wrapper");
const btnPrev = document.querySelector(".our-works__slider-btn-prev");
const btnNext = document.querySelector(".our-works__slider-btn-next");
const width = sliderWrapper.offsetWidth;

let count = 1;

// Open our works popup-slider 
let centerSlideImg = document.querySelectorAll(".our-works__slider-img");
let popUp = document.querySelector(".our-works__popup");
let slides = document.querySelectorAll(".our-works__popup-slide");
let popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
let popUpWidth = popUpSliderWrapper.offsetWidth; 

let popUpCount = 2;

btnPrev.addEventListener("click", () => {
  let popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
  let popUpWidth = popUpSliderWrapper.offsetWidth; 

  sliderWrapper.style.transform = `translate(${-width/3 * (count-2) +"px"})`;
  images[count].classList.remove("center-img");
  count--;
  images[count].classList.add("center-img");

  popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;                           
  popUpCount--;
  disabled();
});

btnNext.addEventListener("click", () => {
  let popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
  let popUpWidth = popUpSliderWrapper.offsetWidth;

  sliderWrapper.style.transform = `translate(${-width/3 * count +"px"})`;
  images[count].classList.remove("center-img");
  count++;
  images[count].classList.add("center-img");

  popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
  popUpCount++;
  disabled();
});

for (let i = 0; i < centerSlideImg.length; i++) {
  centerSlideImg[i].addEventListener("click", event => {
    let target = event.target;
    if (target.classList.contains("center-img")) {
      let scroll = document.querySelector('.our-works__popup-slider');
      scroll.scrollIntoView({block: "center"});
      document.body.style.overflow="hidden";
      popUp.style.visibility="visible";
      popUp.style.background ="#8e8e8dba";
    } else {
      return;
    }
  })
}

function disabled() {
  count === images.length - 1 ?  btnNext.disabled = true : btnNext.disabled = false; 
  count === 0 ? btnPrev.disabled = true : btnPrev.disabled = false; 
};

popUp.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("our-works__popup-slide-img") 
  || target.classList.contains("our-works__content") 
  || target.classList.contains("our-works__popup-slide")
  || target.classList.contains("our-works__popup-slide-text")
  || target.classList.contains("our-works__popup-slider-btn-prev")
  || target.classList.contains("our-works__popup-slider-btn-next")) {
    return;
  }

  popUp.style.visibility="hidden";
  document.body.style.overflow="";
  popUp.style.backgroundColor ="";
})
