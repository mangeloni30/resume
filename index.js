"use strict";

const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#about-button");
const skillButton = document.querySelector("#skill-button");
const resumeButton = document.querySelector("#resume-button");
const aboutSection = document.querySelector("#about");
const skillSection = document.querySelector("#skill");
const homeSection = document.querySelector("#home");
const resumeSection = document.querySelector("#resume");

const onClickHome = () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
}

const onClickAbout = () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

const onClickServices = () => {
  skillSection.scrollIntoView({ behavior: "smooth" });
}

const onClickResume = () => {
  resumeSection.scrollIntoView({ behavior: "smooth" });
}

homeButton.addEventListener("click", onClickHome);
aboutButton.addEventListener("click", onClickAbout);
skillButton.addEventListener("click", onClickServices);
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
};


const nextSlide = () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

const header = document.querySelector("header");

const callBack = (entries, observer) => {
  const [entry] = entries;
  console.log("entry ", entry);
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const options = {
  root: null,
  threshold: 0
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(homeSection);
