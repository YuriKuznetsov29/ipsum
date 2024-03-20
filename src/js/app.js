import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper/bundle";

const companiesSlider = new Swiper(".companies__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".companies__slider__button-next",
        prevEl: ".companies__slider__button-prev",
    },
});

const companiesSliderContainer = document.querySelector(".companies__slider");

companiesSliderContainer.addEventListener("mouseover", () => {
    companiesSlider.autoplay.stop();
});

companiesSliderContainer.addEventListener("mouseout", () => {
    companiesSlider.autoplay.start();
});

const newsSlider = new Swiper(".news__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".news__slider__button-next",
        prevEl: ".news__slider__button-prev",
    },
});

const newsSliderContainer = document.querySelector(".news__slider");

newsSliderContainer.addEventListener("mouseover", () => {
    newsSlider.autoplay.stop();
});

newsSliderContainer.addEventListener("mouseout", () => {
    newsSlider.autoplay.start();
});

const aboutSlider = new Swiper(".about__slider", {
    slidesPerView: 1,
    // spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".about__slider__button-next",
        prevEl: ".about__slider__button-prev",
    },
});

const aboutSliderContainer = document.querySelector(".about__slider");

aboutSliderContainer.addEventListener("mouseover", () => {
    aboutSlider.autoplay.stop();
});

aboutSliderContainer.addEventListener("mouseout", () => {
    aboutSlider.autoplay.start();
});

flsFunctions.isWebp();
