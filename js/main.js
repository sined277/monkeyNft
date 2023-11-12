const burgerButton = document.querySelector(".menu-btn")
const burgerList = document.querySelector(".navigation-header")

burgerButton.addEventListener("click", () => {
    burgerList.classList.toggle("_active")
    burgerButton.classList.toggle("_active")
})