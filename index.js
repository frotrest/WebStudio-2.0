const btnOpenBurgerMenu = document.querySelector(".solid_menu")
const btnCloseBurgerMenu = document.querySelector(".icon-close-burger-menu")
const burgerMenu = document.querySelector(".burger-menu")
const btnCloseModal = document.querySelector(".icon-close-box")

btnOpenBurgerMenu.addEventListener("click", (event) => {
  burgerMenu.classList.add("is-open")
})
btnCloseBurgerMenu.addEventListener("click", (event) => {
  burgerMenu.classList.remove("is-open")
})
