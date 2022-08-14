//change navbar scroll
window.addEventListener("scroll", () => {
    document
        .querySelector("nav")
        .classList.toggle("nav__style", window.scrollY > 10);
});

//hide/show the questions
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        //change icon
        const icons = faq.querySelector(".faq__icon i");
        if (icons.className == "uil uil-plus") {
            icons.className = "uil uil-minus";
        } else {
            icons.className = "uil uil-plus";
        }
    });
});

//nav menu closing and opening
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    menu.style.display = "none";
});
