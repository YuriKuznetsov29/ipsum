export function navigation() {
    const homeLink = document.querySelectorAll(".link__home")
    const headerSection = document.querySelector(".header")

    homeLink.forEach((el) => {
        el.addEventListener("click", () => {
            headerSection.scrollIntoView({ behavior: "smooth" })
        })
    })

    const companyLink = document.querySelectorAll(".link__company")
    const jobsSection = document.querySelector(".jobs")

    companyLink.forEach((el) => {
        el.addEventListener("click", () => {
            jobsSection.scrollIntoView({ behavior: "smooth" })
        })
    })

    const blogLink = document.querySelectorAll(".link__blog")
    const commercialSection = document.querySelector(".commercial")

    blogLink.forEach((el) => {
        el.addEventListener("click", () => {
            commercialSection.scrollIntoView({ behavior: "smooth" })
        })
    })

    const menuOpenBtn = document.querySelector(".header__mobile__menu")
    const menuCloseBtn = document.querySelector(".header__nav__close")
    const menu = document.querySelector(".header__mobile")
    const mobileNav = document.querySelector(".header__mobile__navigation")
    const body = document.querySelector("body")

    menuOpenBtn.addEventListener("click", () => {
        menu.classList.remove("header__mobile__disable")
        menu.classList.add("header__mobile__active")
        body.classList.add("scroll__fixed")
    })

    mobileNav.addEventListener("click", () => {
        menu.classList.remove("header__mobile__active")
        menu.classList.add("header__mobile__disable")
        body.classList.remove("scroll__fixed")
    })

    menuCloseBtn.addEventListener("click", () => {
        menu.classList.remove("header__mobile__active")
        menu.classList.add("header__mobile__disable")
        body.classList.remove("scroll__fixed")
    })

    const links = document.querySelectorAll(".link")
    const sections = document.querySelectorAll("[data-section]")

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links.forEach((link) => {
                    if (link.dataset.nav === entry.target.dataset.section) {
                        link.classList.add("link-active")
                    } else {
                        link.classList.remove("link-active")
                    }
                })
            }
        })
    }

    const options = {
        threshold: 0.2,
    }

    const observer = new IntersectionObserver(callback, options)

    sections.forEach((section) => observer.observe(section))
}
