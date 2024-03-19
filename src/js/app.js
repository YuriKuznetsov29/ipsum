import * as flsFunctions from "./modules/functions.js"
import Swiper from "swiper/bundle"

const swiper = new Swiper(".companies__slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})

const element = document.querySelector(".companies__slider")

element.addEventListener("mouseover", () => {
    swiper.autoplay.stop()
})

element.addEventListener("mouseout", () => {
    swiper.autoplay.start()
})

flsFunctions.isWebp()
