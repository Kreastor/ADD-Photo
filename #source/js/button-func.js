"use strict"

const getConsultation = document.querySelector(".start-screen__get-consultation-btn");
const feedbackForm = document.querySelector(".feedback-form");


getConsultation.addEventListener("click", () => {
  let scroll = document.querySelector(".start-screen");
  scroll.scrollIntoView({block: "center", behavior: "smooth"});
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

// -----------------------------------------------------studio-decoration---------------------------------------------- 

const videoСontainer = document.querySelector(".studio-decoration__video-container");
videoСontainer.addEventListener("click", (event) => {
  let video = document.querySelector(".studio-decoration__video");
  video.style.visibility ="visible";
  videoСontainer.style.visibility ="hidden";
})







