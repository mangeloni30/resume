"use strict";

const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");
const servicesButton = document.querySelector("#services-button");
const resumeButton = document.querySelector("#resume-button");
const aboutSection = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const homeSection = document.querySelector("#home");
const resumeSection = document.querySelector("#resume");

const onClickHome = () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
}

const onClickAbout = () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

const onClickServices = () => {
  servicesSection.scrollIntoView({ behavior: "smooth" });
}

const onClickResume = () => {
  resumeSection.scrollIntoView({ behavior: "smooth" });
}

homeButton.addEventListener("click", onClickHome);
aboutButton.addEventListener("click", onClickAbout);
servicesButton.addEventListener("click", onClickServices);
resumeButton.addEventListener("click", onClickResume);


let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * index}%)`
});

setTimeout(() => {
  slides.forEach((slide, index) => {
    slide.style.transition = "transform 1s";
  });
}, 1000);

const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

const goToSlide = (slideParam) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideParam)}%)`
  })
}


const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
}

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
}

btnRight.addEventListener("click", nextSlide)
btnLeft.addEventListener("click", prevSlide)
