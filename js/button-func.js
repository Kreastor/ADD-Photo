"use strict"
// start-screen

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
const applicationFeedback = document.querySelector(".application-feedback");

sendForm.addEventListener("click", () => {
  feedbackForm.classList.remove("show");
  applicationFeedback.classList.add("show");
})

const closeFeedbackBtn = document.querySelector(".feedback-form__close-btn")

closeFeedbackBtn.addEventListener("click", (event) => {
  feedbackForm.classList.remove("show");
  applicationFeedback.classList.remove("show");
})


const closeApplicationBTN = document.querySelector(".application-feedback__close-btn");

closeApplicationBTN.addEventListener("click", () => {
    feedbackForm.classList.remove("show");
    if (applicationFeedback.classList.contains("show")) {
      applicationFeedback.classList.remove("show");
    }
});

// our-location-form

const chooseLocationBTN = document.querySelector(".our-location__choose-location-btn");
const form = document.querySelector(".form-section");

chooseLocationBTN.addEventListener("click", (event) => {
  let scroll = document.querySelector(".our-location");
  scroll.scrollIntoView({block: "center", behavior: "smooth"});
  form.style.display = "block";
  if (applicationFeedback2.classList.contains("show")) {
    applicationFeedback2.classList.remove("show");
  }
})

const closeLocationForm = document.querySelector(".form-section__close-btn");

closeLocationForm.addEventListener("click", (event) => {
  form.style.display = "";
})

const sendLocationForm = document.querySelector(".form-section__input-btn");
const applicationFeedback2 = document.querySelector(".application-feedback2");

sendLocationForm.addEventListener("click", (event) => {
  form.style.display = "";
  applicationFeedback2.classList.add("show");
})

const closeApplicationBTN2 = document.querySelector(".application-feedback2__close-btn");

closeApplicationBTN2.addEventListener("click", () => {
  form.style.display = "";
  if (applicationFeedback2.classList.contains("show")) {
    applicationFeedback2.classList.remove("show");
  }
});

// studio-decoration

const videoСontainer = document.querySelector(".studio-decoration__video-container");
videoСontainer.addEventListener("click", (event) => {
  let video = document.querySelector(".studio-decoration__video");
  video.style.visibility ="visible";
  videoСontainer.style.visibility ="hidden";
})

// show text

const btnBox = document.querySelector(".article__show-fulltext-box");
let open = false;


btnBox.addEventListener("click", (event) => {
  let textSection = document.querySelector(".article");
  let text = document.querySelector(".article__text");
  let showTextBTN = document.querySelector(".article__show-fulltext-btn");
  let imgBtn = document.querySelector(".article__show-fulltext-img");

  if (!open) {
    textSection.style.cssText = `height: 1480px;
                                overflow: visible;`
    text.style.cssText = `height: auto;
                          white-space: normal;
                          overflow: visible;`                  
    showTextBTN.innerHTML = "Скрыть";
    btnBox.style.cssText = `transform: translate( 0, -12px)`;
    imgBtn.style.cssText = `transform: translateY(7px) rotate(180deg);`;
    return open = true;
  } else {
    textSection.style.cssText = `height: "";
                                overflow: "";`
    text.style.cssText = `height: "";
                          white-space: "";
                          overflow: "";`                  
    showTextBTN.innerHTML = "Подробнее";
    btnBox.style.cssText = `transform:  ""`;
    imgBtn.style.cssText = `transform:  ""`;
    return open = false;
  }
})

// Determine the cost of service

let span = document.querySelectorAll(".photoshoot-cost__additional-service-item");

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", event => {
    let currentCard = span[i].closest(".photoshoot-cost__price-card-container");
    let price = +currentCard.childNodes[3].innerHTML;
    if (span[i].dataset.src == "help") {
      span[i].classList.toggle("active");
    } else if (span[i].dataset.src == "visagiste") {
      span[i].classList.toggle("active");
      if (!span[i].classList.contains("active")) {
        currentCard.childNodes[3].innerHTML = price - 2000; 
      } else {
        currentCard.childNodes[3].innerHTML = price + 2000; 
      }
    } else if (span[i].dataset.src == "retouch") {
      let retouchPrice = 0;
      console.log(retouchPrice);
      span[i].classList.toggle("active");
      if (span[i].classList.contains("active")) {
        let countPhoto = +prompt("Введите количество фото для ретуши");
        let costAddPhoto = countPhoto * 250;
        this.retouchPrice = costAddPhoto;
        currentCard.childNodes[3].innerHTML = price + costAddPhoto; 
      } else {
        currentCard.childNodes[3].innerHTML = price - this.retouchPrice; 
        this.retouchPrice = 0;
      }
    }
  })
}

