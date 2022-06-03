let getConsultation = document.querySelector(".start-screen__get-consultation-btn");
let feedbackForm = document.querySelector(".feedback-form");

getConsultation.addEventListener("click", () => {
  feedbackForm.classList.toggle("show");
});

