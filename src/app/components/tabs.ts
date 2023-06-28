const tabsContainer: HTMLElement = document.querySelector('.tabs');
const tabImgs = document.querySelectorAll(".tabs .tabs-img");
const tabInfos = document.querySelectorAll(".tabs .tabs-info");
const tabHeaders = document.querySelectorAll(".tabs .tabs-header");

const tabs = () => {
   const breakpoint = tabsContainer.dataset.breakpoint;
   tabInfos.forEach((info, index) => {
      info.addEventListener("click", (e) => {
         e.preventDefault();
         tabImgs.forEach((img, i) => {
            if(img.classList.contains(`${breakpoint}:z-show`)) {
               img.classList.remove(`${breakpoint}:z-show`);
               img.classList.add(`${breakpoint}:z-hide`);
            }
            if(i === index) {
               img.classList.remove(`${breakpoint}:z-hide`);
               img.classList.add(`${breakpoint}:z-show`);
            }
         });
         tabHeaders.forEach((header, n) => {
            if(header.classList.contains(`${breakpoint}:z-active`)) {
               header.classList.remove(`${breakpoint}:z-active`)
            }
            if(n === index) {
               header.classList.add(`${breakpoint}:z-active`);
            }
         })
      });
   });
}

document.addEventListener("DOMContentLoaded", () => {
   tabs();
});