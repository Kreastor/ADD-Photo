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

for (let i = 0; i < centerSlideImg.length; i++) {
  centerSlideImg[i].addEventListener("click", () => {
    if (centerSlideImg[i].classList.contains("center-img")) {
      popUp.style.display="block";
      disabled();
    } else {
      popUp.style.display="";
    }
  });
};

const popupBackground = document.querySelector(".our-works__popup");

// popupBackground.addEventListener("click", () => {
//   popUp.style.display="";
// })







