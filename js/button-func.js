"use strict"
// navigation

function navigation(classSelector) {
  const target = document.querySelector(classSelector);
  target.scrollIntoView({block: "start", behavior: "smooth"});
};

// start-screen

const getFeedbackForm  = document.querySelectorAll(".get-feedback-form");
const feedbackForm = document.querySelectorAll(".feedback-form");
const sendForm = document.querySelectorAll(".feedback-form__input-btn");
const applicationFeedback = document.querySelectorAll(".application-feedback");
const closeFeedbackBtn = document.querySelectorAll(".feedback-form__close-btn");
const closeApplicationBTN = document.querySelectorAll(".application-feedback__close-btn");

for (let i = 0; i < getFeedbackForm.length; i++) {
  getFeedbackForm[i].addEventListener("click", () => {
    if (i === 0) {
      let targetScroll = document.querySelector(".start-screen");
      targetScroll.scrollIntoView({block: "center", behavior: "smooth"});
    } else if (i === 1) {
      let targetScroll = document.querySelector(".gift-certificate__certificate-box");
      targetScroll.scrollIntoView({block: "center", behavior: "smooth"});
    }
    
    feedbackForm[i].classList.toggle("show");
    if (applicationFeedback[i].classList.contains("show")) {
      applicationFeedback[i].classList.remove("show");
    }

    closeFeedbackBtn[i].addEventListener("click", (event) => {
      feedbackForm[i].classList.remove("show");
      applicationFeedback[i].classList.remove("show");
    })

    closeApplicationBTN[i].addEventListener("click", () => {
      feedbackForm[i].classList.remove("show");
      if (applicationFeedback[i].classList.contains("show")) {
        applicationFeedback[i].classList.remove("show");
      }
    });
  });
}

for (let i = 0; i < sendForm.length; i++) {
  sendForm[i].addEventListener("click", () => {
    if (sendForm[i].dataset.src == "justSend") {
      applicationFeedback[3].classList.add("show");

      closeApplicationBTN[3].addEventListener("click", () => {
        applicationFeedback[3].classList.remove("show");
      })
    } else {
      feedbackForm[i].classList.remove("show");
      applicationFeedback[i].classList.add("show");
    }
  })
}

const addReviews = document.querySelector(".reviews__add-review-btn");
addReviews.onclick = function() {
  const target = document.querySelector(".reviews__header");
  target.scrollIntoView({block: "start", behavior: "smooth"});

  const reviewsFeedbackForm = document.querySelector(".reviews-feedback");
  reviewsFeedbackForm.style.display = "block";
  
  const closeBTN = document.querySelector(".reviews-feedback__close-btn");
  closeBTN.onclick = () => {
    reviewsFeedbackForm.style.display = "";
  }

  const reviewsApplication = document.querySelector(".reviews-feedback__reviews-application-feedback");

  const sendFormBTN = document.querySelector(".reviews-feedback__input-btn");
  sendFormBTN.onclick = () => {
    reviewsFeedbackForm.style.display = "";
    reviewsApplication.classList.add("show");

    target.scrollIntoView({block: "start", behavior: "smooth"});

    const reviewsApplicationCloseBtn = document.querySelector(".reviews-feedback__application-feedback-close-btn");
    reviewsApplicationCloseBtn.onclick = () => {
      reviewsApplication.classList.remove("show");
      
    }
  }
}

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

const btnBox = document.querySelectorAll(".article__show-fulltext-box");
let open = false;

for (let i = 0; i < btnBox.length; i++) {
  btnBox[i].addEventListener("click", (event) => {
    let textSection = document.querySelectorAll(".article");
    let text = document.querySelectorAll(".article__text");
    let showTextBTN = document.querySelectorAll(".article__show-fulltext-btn");
    let imgBtn = document.querySelectorAll(".article__show-fulltext-img");

    if (!open) {
      textSection[i].style.cssText = `height: 100%;
                                  overflow: visible;`
      text[i].style.cssText = `height: auto;
                            white-space: normal;
                            overflow: visible;`                  
      showTextBTN[i].innerHTML = "Скрыть";
      btnBox[i].style.cssText = `transform: translate( 0, -12px)`;
      imgBtn[i].style.cssText = `transform: translateY(7px) rotate(180deg);`;
      return open = true;
    } else {
      textSection[i].style.cssText = `height: "";
                                  overflow: "";`
      text[i].style.cssText = `height: "";
                            white-space: "";
                            overflow: "";`                  
      showTextBTN[i].innerHTML = "Подробнее";
      btnBox[i].style.cssText = `transform:  ""`;
      imgBtn[i].style.cssText = `transform:  ""`;
      return open = false;
    }
  })
}
// Determine the cost of service

let spanHelp = document.querySelectorAll(".help");
let spanVisagiste = document.querySelectorAll(".visagiste");
let spanRetouch = document.querySelectorAll(".retouch");

for (let i = 0; i < spanHelp.length; i++) {
  spanHelp[i].addEventListener("click", event => {
    let currentCard = spanHelp[i].closest(".photoshoot-cost__price-card-container");
    let price = +currentCard.childNodes[3].innerHTML;
    spanHelp[i].classList.toggle("active");
  })
}

for (let i = 0; i < spanVisagiste.length; i++) {
  spanVisagiste[i].addEventListener("click", event => {
    let currentCard = spanVisagiste[i].closest(".photoshoot-cost__price-card-container");
    let price = +currentCard.childNodes[3].innerHTML;
    spanVisagiste[i].classList.toggle("active");
    if (!spanVisagiste[i].classList.contains("active")) {
      currentCard.childNodes[3].innerHTML = price - 2000; 
    } else {
      currentCard.childNodes[3].innerHTML = price + 2000; 
    }
  })
}

const countRetouchForm = document.querySelector(".count-retouch");
const inputInner = document.querySelector(".count-retouch__input");
const saveValueBTN = document.querySelector(".count-retouch__save-count-btn");
const closeForm = document.querySelector(".count-retouch__close-btn");

function inputValidationKey(key) {
  return (key >= '0' && key <= '9') || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace'|| key == 'Escape'
}

for (let i = 0; i < spanRetouch.length; i++) {
  spanRetouch[i].addEventListener("click", event => {
    let retouchPrice = 0;
    let currentCard = spanRetouch[i].closest(".photoshoot-cost__price-card-container");
    let price = +currentCard.childNodes[3].innerHTML;

    if (!spanRetouch[i].classList.contains("active")) {
      countRetouchForm.style.visibility = "visible"; 
      closeForm.addEventListener("click", () => {
        countRetouchForm.style.visibility = "";
      })

      countRetouchForm.addEventListener("keydown", (event) => {
        if (event.code == 'Escape') {
          countRetouchForm.style.visibility = "";
        }
      })

      saveValueBTN.addEventListener("click", () => {
        this.retouchPrice = inputInner.value * 250;
        currentCard.childNodes[3].innerHTML = price + this.retouchPrice; 
        countRetouchForm.style.visibility = "";
        spanRetouch[i].innerHTML = `Дополнительная ретушь <br> фото — ${inputInner.value} шт. / ${this.retouchPrice} ₽`
        spanRetouch[i].classList.add("active");
      })
    } else {
      currentCard.childNodes[3].innerHTML = price - this.retouchPrice; 
      retouchPrice = 0;
      countRetouchForm.style.visibility = "";
      spanRetouch[i].classList.remove("active");
      spanRetouch[i].innerHTML = `Дополнительная ретушь <br> фото — 1 шт. / 250 ₽`;
      // return spanRetouch[i].innerHTML = `Дополнительная ретушь <br> фото — 1 шт. / 250 ₽`
      
    }
    return spanRetouch[i];
  })
}





