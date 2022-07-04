"use strict"
// Consultation btn block
const getConsultation = document.querySelector(".start-screen__get-consultation-btn");
const feedbackForm = document.querySelector(".feedback-form");


getConsultation.addEventListener("click", () => {
  feedbackForm.classList.toggle("show");
  if (applicationFeedback.classList.contains("show")) {
    applicationFeedback.classList.remove("show");
  }
});

const sendForm = document.querySelector(".feedback-form__input-btn");
const applicationFeedback = document.querySelector(".application-feedback")

sendForm.addEventListener("click", () => {
  feedbackForm.classList.remove("show");
  applicationFeedback.classList.add("show");
})

const closeBtn = document.getElementsByClassName("feedback-form__close-btn");

for(let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
      feedbackForm.classList.remove("show");
      if (applicationFeedback.classList.contains("show")) {
        applicationFeedback.classList.remove("show");
      }
  });
};

// Our works slider 

function disabledBTN() {
  count === images.length - 1 ?  btnNext.disabled = true : btnNext.disabled = false; 
  count === 0 ? btnPrev.disabled = true : btnPrev.disabled = false; 

  popUpCount === slides.length ? popUpBtnNext.disabled = true : popUpBtnNext.disabled = false; 
  popUpCount === 1 ? popUpBtnPrev.disabled = true : popUpBtnPrev.disabled = false; 
};


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
  images[count].classList.add("center-img");

  disabledBTN();
});

btnNext.addEventListener("click", () => {
  sliderWrapper.style.transform = `translate(${-width/3 * count +"px"})`;

  images[count].classList.remove("center-img");
  count++;
  images[count].classList.add("center-img");

  disabledBTN();
});

// open popUp
const centerSlideImg = document.querySelectorAll(".our-works__slider-img");
const popUp = document.querySelector(".our-works__popup");

const slides = document.querySelectorAll(".our-works__popup-slide");
const popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
const popUpBtnPrev = document.querySelector(".our-works__popup-slider-btn-prev");
const popUpBtnNext = document.querySelector(".our-works__popup-slider-btn-next");
let popUpCount = 1;
const popUpWidth = popUpSliderWrapper.offsetWidth;

for (let i = 0; i < centerSlideImg.length; i++) {
  centerSlideImg[i].addEventListener("click", () => {
    if (centerSlideImg[i].classList.contains("center-img")) {
      popUp.classList.add("show");
      // popUp.style.display="block";
      document.body.style.overflow="hidden";
      popUp.style.background ="#8e8e8dba";
      disabledBTN();
      popUpBtnPrev.addEventListener("click", () => {
        console.log(popUpSliderWrapper.style.transform);
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;
        console.log(popUpSliderWrapper.style.transform);
        popUpCount--;
        console.log(popUpCount);
        disabledBTN();
      });
      popUpBtnNext.addEventListener("click", () => {
        console.log(popUpSliderWrapper.style.transform );
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
        popUpCount++;
        disabledBTN();
        console.log(popUpCount);
      });
    } else {
      popUp.style.display="";
    }
  });
};

// PopUp slider 


  // popUpBtnPrev.addEventListener("click", () => {
  //   popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;
  //   popUpCount--;
  //   disabledBTN();
  // });
  
  // popUpBtnNext.addEventListener("click", () => {
  //   popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
  //   popUpCount++;
  //   disabledBTN();
  // });


// close popUp

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
})







