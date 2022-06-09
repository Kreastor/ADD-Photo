const images = document.querySelectorAll(".our-works__slider-img");
const sliderWrapper = document.querySelector(".our-works__slider-wrapper");
const btnPrev = document.querySelector(".our-works__slider-btn-prev");
const btnNext = document.querySelector(".our-works__slider-btn-next");
let count = 1;
const width = sliderWrapper.offsetWidth;

function disabled() {
  if (count === images.length - 1) {
    btnNext.disabled = true; 
  } else {
    btnNext.disabled = false; 
  }
  
  if (count === 0) {
    btnPrev.disabled = true;
  } else {
    btnPrev.disabled = false;
  }
};

btnPrev.addEventListener("click", () => {


  sliderWrapper.style.transform = `translate(${-width/3 * (count-2) +"px"})`;
  console.log(sliderWrapper.style.transform);

  images[count].classList.remove("center-img");
  count--;
  images[count].classList.add("center-img");

  disabled();
})

btnNext.addEventListener("click", () => {

  sliderWrapper.style.transform = `translate(${-width/3 * count +"px"})`;
  console.log(sliderWrapper.style.transform);

  images[count].classList.remove("center-img");
  count++;
  images[count].classList.add("center-img");

  disabled();
})
