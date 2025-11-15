document.addEventListener("DOMContentLoaded", () => {
  try {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof Element) {
          const animation = entry.target.dataset.animate;
          entry.target.classList.add("animate__animated", `animate__${animation}`);
          observer.unobserve(entry.target);
        }
    })
  }, {
    root: null,
    threshold: 0.1,
  })

  animatedElements.forEach(el => {
    observer.observe(el);
  })    
  } catch (error) {
    console.log(`Ошибка с анимациями: ${error}`);
  }
});

const btnOpenBurgerMenu = document.querySelector(".solid_menu")
const btnCloseBurgerMenu = document.querySelector(".icon-close-burger-menu")
const burgerMenu = document.querySelector(".burger-menu")
const btnCloseModal = document.querySelector('button.icon-close-box.icon-close-box-styles')
const btnModal = document.querySelector(".hero-content__button")
const modalOverlay = document.querySelector(".modal-overlay")

btnOpenBurgerMenu.addEventListener("click", (event) => {
  burgerMenu.classList.add("is-open")
})

btnCloseBurgerMenu.addEventListener("click", (event) => {
  burgerMenu.classList.remove("is-open")
})

btnModal.addEventListener("click", (event) => {
  modalOverlay.classList.add("is-open")
})

btnCloseModal.addEventListener("click", (event) => {
  console.log("hello")
  modalOverlay.classList.remove("is-open")
})
