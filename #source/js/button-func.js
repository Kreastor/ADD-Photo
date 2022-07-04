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









