const mobMenuRevealBtn = document.querySelector(".mob-menu-reveal-btn");
const mobMenuReveal = document.querySelector(".mob-menu-reveal");
const closeMobMenu = document.querySelector(".close-mob-menu");

mobMenuRevealBtn.addEventListener("click", () => {
  mobMenuReveal.classList.toggle("hidden");
  mobMenuReveal.classList.toggle("flex");
  document.querySelector("body").classList.toggle("overflow-hidden");
});

closeMobMenu.addEventListener("click", () => {
  mobMenuReveal.classList.toggle("hidden");
  mobMenuReveal.classList.toggle("flex");
  document.querySelector("body").classList.toggle("overflow-hidden");
});
