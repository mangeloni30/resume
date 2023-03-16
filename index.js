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
