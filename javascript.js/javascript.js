const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}


function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}


function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();

const slider23 = document.querySelector('.slider2');
const prevButton2 = document.querySelector('.prev-button2');
const nextButton2 = document.querySelector('.next-button2');
const slides2 = Array.from(slider23.querySelectorAll('.to'));
const slideCount2 = slides2.length;
let slideIndex2 = 0;


prevButton2.addEventListener('click', showPreviousSlide2);
nextButton2.addEventListener('click', showNextSlide2);


function showPreviousSlide2() {
  slideIndex2 = (slideIndex2 - 1 + slideCount2) % slideCount2;
  updateSlider2();
}


function showNextSlide2() {
  slideIndex2 = (slideIndex2 + 1) % slideCount2;
  updateSlider2();
}


function updateSlider2() {
  slides2.forEach((slide, index) => {
    if (index === slideIndex2) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}


updateSlider();


