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
  count2 === images2.length - 1 ?  btnNext2.disabled = true : btnNext2.disabled = false; 
  count2 === 0 ? btnPrev2.disabled = true : btnPrev2.disabled = false; 
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


// Our location slider 
const images2 = document.querySelectorAll(".our-location__slider-img");
const sliderWrapper2 = document.querySelector(".our-location__slider-wrapper");
const btnPrev2 = document.querySelector(".our-location__slider-btn-prev");
const btnNext2 = document.querySelector(".our-location__slider-btn-next");
const width2 = 420;

let count2 = 1;

// Open our location popup-slider 
let slideImg2 = document.querySelectorAll(".our-location__slider-img");
let popUp2 = document.querySelector(".our-location__popup");
let slides2 = document.querySelectorAll(".our-location__popup-slide");
let popUpSliderWrapper2 = document.querySelector(".our-location__popup-slider-wrapper");
let popUpWidth2 = popUpSliderWrapper.offsetWidth; 

let popUpCount2 = 2;

btnPrev2.addEventListener("click", () => {
  let popUpSliderWrapper2 = document.querySelector(".our-location__popup-slider-wrapper");
  let popUpWidth2 = popUpSliderWrapper2.offsetWidth; 

  sliderWrapper2.style.transform = `translate(${-width2 * (count2-2) +"px"})`;
  count2--;
  popUpSliderWrapper2.style.transform = `translate(${-popUpWidth2 * (popUpCount2-2) +"px"})`;                           
  popUpCount2--;

  disabled();
});

btnNext2.addEventListener("click", () => {
  let popUpSliderWrapper2 = document.querySelector(".our-location__popup-slider-wrapper");
  let popUpWidth2 = popUpSliderWrapper2.offsetWidth;

  sliderWrapper2.style.transform = `translate(${-width2 * count2 +"px"})`;
  count2++;
  popUpSliderWrapper2.style.transform = `translate(${-popUpWidth2 * popUpCount2 +"px"})`;
  popUpCount2++;

  disabled();
});

for (let i = 0; i < slideImg2.length; i++) {
  slideImg2[i].addEventListener("click", event => {
      document.querySelector(".studio-decoration__header").style.opacity = "0";
      if (i < count2) {
        sliderWrapper2.style.transform = `translate(${-width2 * (count2-2) +"px"})`;
        count2--;
        popUpSliderWrapper2.style.transform = `translate(${-popUpWidth2 * (popUpCount2-2) +"px"})`;                           
        popUpCount2--;
      } else if (i > count2) {
        sliderWrapper2.style.transform = `translate(${-width2 * count2 +"px"})`;
        count2++;
        popUpSliderWrapper2.style.transform = `translate(${-popUpWidth2 * popUpCount2 +"px"})`;
        popUpCount2++;
      }

      let scroll2 = document.querySelector('.our-location__popup-slider');
      scroll2.scrollIntoView({block: "center"});
      document.body.style.overflow="hidden";
      popUp2.style.visibility="visible";
  })
}

popUp2.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("our-location__popup-slide-img") 
  || target.classList.contains("our-location__content") 
  || target.classList.contains("our-location__popup-slide")
  || target.classList.contains("our-location__popup-slide-text")
  || target.classList.contains("our-location__popup-slider-btn-prev")
  || target.classList.contains("our-location__popup-slider-btn-next")) {
    return;
  }
  document.querySelector(".studio-decoration__header").style.opacity = "";
  popUp2.style.visibility="hidden";
  document.body.style.overflow="";
})
