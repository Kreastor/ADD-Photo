"use strict"

// Our works slider 

const images = document.querySelectorAll(".our-works__slider-img");
const sliderWrapper = document.querySelector(".our-works__slider-wrapper");
const btnPrev = document.querySelector(".our-works__slider-btn-prev");
const btnNext = document.querySelector(".our-works__slider-btn-next");
let count = 1;
const width = sliderWrapper.offsetWidth;

export function disabled() {
  count === images.length - 1 ?  btnNext.disabled = true : btnNext.disabled = false; 
  count === 0 ? btnPrev.disabled = true : btnPrev.disabled = false; 

  popUpCount === slides.length ? popUpBtnNext.disabled = true : popUpBtnNext.disabled = false; 
  popUpCount === 1 ? popUpBtnPrev.disabled = true : popUpBtnPrev.disabled = false; 
};

btnPrev.addEventListener("click", () => {
  sliderWrapper.style.transform = `translate(${-width/3 * (count-2) +"px"})`;

  images[count].classList.remove("center-img");
  count--;
  images[count].classList.add("center-img");

  disabled();
});

btnNext.addEventListener("click", () => {
  sliderWrapper.style.transform = `translate(${-width/3 * count +"px"})`;

  images[count].classList.remove("center-img");
  count++;
  images[count].classList.add("center-img");

  disabled();
});


// Our works popUp slider 

const slides = document.querySelectorAll(".our-works__popup-slide");
const popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
const popUpBtnPrev = document.querySelector(".our-works__popup-slider-btn-prev");
const popUpBtnNext = document.querySelector(".our-works__popup-slider-btn-next");
let popUpCount = 1;
const popUpWidth = popUpSliderWrapper.offsetWidth;


popUpBtnPrev.addEventListener("click", () => {
  popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;
  popUpCount--;
  disabled();
});

popUpBtnNext.addEventListener("click", () => {
  popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
  popUpCount++;
  disabled();
});