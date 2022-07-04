"use strict"

// Our works slider 
const images = document.querySelectorAll(".our-works__slider-img");
const sliderWrapper = document.querySelector(".our-works__slider-wrapper");
const btnPrev = document.querySelector(".our-works__slider-btn-prev");
const btnNext = document.querySelector(".our-works__slider-btn-next");
let count = 1;
const width = sliderWrapper.offsetWidth;

btnPrev.addEventListener("click", () => {
  sliderWrapper.style.transform = `translate(${-width/3 * (count-2) +"px"})`;
  images[count].classList.remove("center-img");
  count--;
  popUpCount--;
  images[count].classList.add("center-img");
  disabled();
});

btnNext.addEventListener("click", () => {
  sliderWrapper.style.transform = `translate(${-width/3 * count +"px"})`;
  images[count].classList.remove("center-img");
  count++;
  popUpCount++;
  images[count].classList.add("center-img");
  disabled();
});

// Open our works popup-slider 
const centerSlideImg = document.querySelectorAll(".our-works__slider-img");
const popUp = document.querySelector(".our-works__popup");
let popUpCount = 1;
const slides = document.querySelectorAll(".our-works__popup-slide");
const popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
const popUpBtnPrev = document.querySelector(".our-works__popup-slider-btn-prev");
const popUpBtnNext = document.querySelector(".our-works__popup-slider-btn-next");
const popUpWidth = popUpSliderWrapper.offsetWidth;

for (let i = 0; i < centerSlideImg.length; i++) {
  centerSlideImg[i].addEventListener("click", () => {
    if (centerSlideImg[i].classList.contains("center-img")) {
      popUp.style.display="block";
      document.body.style.overflow="hidden";
      popUp.style.background ="#8e8e8dba";
      const slides = document.querySelectorAll(".our-works__popup-slide");
      const popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
      const popUpBtnPrev = document.querySelector(".our-works__popup-slider-btn-prev");
      const popUpBtnNext = document.querySelector(".our-works__popup-slider-btn-next");
      const popUpWidth = popUpSliderWrapper.offsetWidth;
      disabled();
      popUpBtnPrev.addEventListener("click", () => {
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;
        count--;
        popUpCount--;
        disabled();
      });
      popUpBtnNext.addEventListener("click", () => {
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
        count++;
        popUpCount++;
        disabled();
      });
    } else {
      popUp.style.display="";
    }
  });
};

function disabled() {
  count === images.length - 1 ?  btnNext.disabled = true : btnNext.disabled = false; 
  count === 0 ? btnPrev.disabled = true : btnPrev.disabled = false; 

  popUpCount === slides.length ? popUpBtnNext.disabled = true : popUpBtnNext.disabled = false; 
  popUpCount === 1 ? popUpBtnPrev.disabled = true : popUpBtnPrev.disabled = false; 
};

popUp.addEventListener("click", (event) => {
  let target = event.target
  if (target.classList.contains("our-works__popup-slide-img") 
  || target.classList.contains("our-works__content") 
  || target.classList.contains("our-works__popup-slide")
  || target.classList.contains("our-works__popup-slide-text")
  || target.classList.contains("our-works__popup-slider-btn-prev")
  || target.classList.contains("our-works__popup-slider-btn-next")) {
    return;
  }
  popUp.style.display="none";
  document.body.style.overflow="";
  popUp.style.backgroundColor ="";
  popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
  popUpCount = 1;
  count === 0;
})

