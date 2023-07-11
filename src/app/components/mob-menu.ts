const mobMenuRevealBtn = document.querySelector(".mob-menu-reveal-btn");
const mobMenuReveal = document.querySelector(".mob-menu-reveal");

mobMenuRevealBtn.addEventListener("click", () => {
  mobMenuReveal.classList.toggle("hidden");
  mobMenuReveal.classList.toggle("flex");
  document.querySelector("body").classList.toggle("overflow-hidden");
});
