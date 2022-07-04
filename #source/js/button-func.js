"use strict"

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

const centerSlideImg = document.querySelectorAll(".our-works__slider-img");
const popUp = document.querySelector(".our-works__popup");

import {disabled} from './slider-func.js';
export let popUpCount = 1;
export const slides = document.querySelectorAll(".our-works__popup-slide");
export const popUpSliderWrapper = document.querySelector(".our-works__popup-slider-wrapper");
export const popUpBtnPrev = document.querySelector(".our-works__popup-slider-btn-prev");
export const popUpBtnNext = document.querySelector(".our-works__popup-slider-btn-next");

for (let i = 0; i < centerSlideImg.length; i++) {
  centerSlideImg[i].addEventListener("click", () => {
    if (centerSlideImg[i].classList.contains("center-img")) {
      // popUp.classList.add("show");
      popUp.style.display="block";
      document.body.style.overflow="hidden";
      popUp.style.background ="#8e8e8dba";
      disabled();
      // let popUpCount = 1;
      const popUpWidth = popUpSliderWrapper.offsetWidth;
      popUpBtnPrev.addEventListener("click", () => {
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * (popUpCount-2) +"px"})`;
        popUpCount--;
        disabled();
        console.log(popUpCount);
      });
      
      popUpBtnNext.addEventListener("click", () => {
        popUpSliderWrapper.style.transform = `translate(${-popUpWidth * popUpCount +"px"})`;
        popUpCount++;
        disabled();
        console.log(popUpCount);
      });
    } else {
      popUp.style.display="";
    }
  });
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
})







