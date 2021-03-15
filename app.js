const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;
let slidePosition = 0;

const previousBtn = document.querySelector(".button-previous");
const nextBtn = document.querySelector(".button-next");

const hideAllSlides = () => {
    for(let slide of slides){
        slide.classList.remove("visible");
        slide.classList.add("hidden");
    }
}

const displaySlide = () => {
    slides[slidePosition].classList.add("visible");
}

const moveToNextSlide = () => {
    hideAllSlides();
    if(slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    displaySlide();
}

const moveToPrevSlide = () => {
    hideAllSlides();

    if(slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
   displaySlide();
}

previousBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

