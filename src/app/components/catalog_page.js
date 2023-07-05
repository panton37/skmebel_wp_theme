import Paginator from "./paginator";

class Catalog extends Paginator {
  action = '/wp/v2/custom_kitchen';

  constructor(conf) {
    super(conf);

    this.elements.prices = this.elements.main.querySelector('.prices');
    this.elements.sizes = this.elements.main.querySelector('.sizes');
    this.elements.styles = this.elements.main.querySelector('.styles');
    this.elements.material = this.elements.main.querySelector('.material');
    this.elements.colors = this.elements.main.querySelector('.colors');

    this.elements.filterForm = this.elements.main.querySelector('.filter-form');
    this.elements.filterInputs = this.elements.filterForm.querySelectorAll('input');
    this.elements.filterReset = this.elements.filterForm.querySelector('.reset-filter');
    this.elements.termsContainers = this.elements.filterForm.querySelectorAll(".terms-container");

    this.elements.sort = this.elements.main.querySelector('.mob-sort-options');

    this.#setHandlers();
  }



  // Add price range filter inputs listeners
  #listenPrice(priceFrom, priceTo) {
    ["change", "keydown"].forEach(evt => {
      priceFrom.addEventListener(evt, e => {
        if (evt === "keydown" && e.keyCode === 13) {
          this.setParam('price_from', priceFrom.value);
        }
      });
      priceTo.addEventListener(evt, (e) => {
        if (evt === "keydown" && e.keyCode === 13) {
          this.setParam('price_to', priceTo.value);
        }
      });
    });
  }

  #listenCheckboxes(boxes, checkboxName, filterName) {
    boxes.querySelectorAll(checkboxName).forEach(box => {
      box.addEventListener('change', async () => {
        const checkedArr = [];
        let val = '';
        boxes.querySelectorAll(checkboxName).forEach((checkBox) => {
          checkBox.checked === true
            ? checkedArr.push(checkBox.dataset.id)
            : checkedArr.slice(checkedArr.indexOf(checkBox.dataset.id), 1);
        });
        checkedArr.length ? val = checkedArr.join(",") : null;
  
        await this.setParam(filterName, val);
      });
    })
  }

  #listenSort() {
    let query = {};
    this.elements.sort.querySelectorAll('.sort-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if(btn.dataset.type === 'popularity') {}
        if(btn.dataset.type === 'cheap') {
          query = Object.assign(query, {meta_key: 'kitchen_price', order: 'ASC'});
          await this.setParams(query);
        }
        if(btn.dataset.type === 'expensive') {
          query = Object.assign(query, {meta_key: 'kitchen_price', order: 'DESC'});
          await this.setParams(query);
        }
        if(btn.dataset.type === 'sale') {
          query = Object.assign(query, {meta_key: 'kitchen_sale', order: 'DESC'});
          await this.setParams(query);
        }
      });
    });
  }

  #listenReset() {
    this.elements.filterReset.addEventListener('click', async () => {
      this.elements.filterInputs.forEach(input => {
        input.type === "number" ? (input.value = "") : (input.checked = false); 
      });
      await this.setParams({});
    });
  }

  #hideTerms() {
    this.elements.termsContainers.forEach((container, index) => {
      if (container.children.length > 4) {
            const templateTermsBtn = document.createElement("template");
            templateTermsBtn.innerHTML = `
            <button class="show-more-terms-btn-${index} group flex w-full mt-6 items-center justify-center space-x-4 primary-btn py-5
                  text-primary-hover-100 bg-transparent mb-8 border-2 border-primary-hover-50"
                  data-isshown="0">
                <span class="">Показать больше</span>
                <svg class="transition-transform ease-in-out duration-300" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-primary-hover-100 group-hover:fill-white transition-transform" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
                </svg>
            </button>`;
        container.appendChild(templateTermsBtn.content);

        const showTermsBtn = document.querySelector(`.show-more-terms-btn-${index}`);
        showTermsBtn.addEventListener("click", () => {

          if (showTermsBtn.dataset.isshown === "0") {
            showTermsBtn.dataset.isshown = "1";
            showTermsBtn.querySelector("span").innerText = "Показать меньше";
            showTermsBtn.querySelector("svg").classList.add("rotate-180");
            Array.from(container.children).forEach((input) => {
              input.classList.contains("hidden") && input.tagName === "LABEL"
                ? input.classList.remove("hidden")
                : null;
            });
          } else {
            showTermsBtn.dataset.isshown = "0";
            showTermsBtn.querySelector("span").innerText = "Показать больше";
            showTermsBtn.querySelector("svg").classList.remove("rotate-180");
            Array.from(container.children).forEach((input, index) => {
              if (index > 4) {
                !input.classList.contains("hidden") && input.tagName === "LABEL"
                  ? input.classList.add("hidden")
                  : null;
              }
            });
          }
        });
    
        Array.from(container.children).forEach((input, index) => {
          index > 4 && input.tagName === "LABEL"
            ? input.classList.add("hidden")
            : null;
        });
      }
    });
  }

  #setHandlers() {
    this.#listenCheckboxes(this.elements.styles, '.style-checkbox', 'style');
    this.#listenCheckboxes(this.elements.sizes, '.size-checkbox', 'size');
    this.#listenCheckboxes(this.elements.material, '.material-checkbox', 'material');
    this.#listenCheckboxes(this.elements.colors, '.color-checkbox', 'color');
    this.#listenPrice(
      this.elements.prices.querySelector('.from-price'),
      this.elements.prices.querySelector('.to-price'),
    );
    this.#listenSort();
    this.#listenReset();
    this.#hideTerms();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.catalog_main');

  if (el) {
    new Catalog({
      el,
      params: {
        per_page: 3
      }
    });
  }
});




// // Show more taxonomies
// const termsContainers = document.querySelectorAll(".terms-container");
// termsContainers.forEach((container, index) => {
//   if (container.children.length > 4) {
//     const templateTermsBtn = document.createElement("template");
//     templateTermsBtn.innerHTML = `<button class="show-more-terms-btn-${index} group flex w-full mt-6 items-center justify-center space-x-4 primary-btn py-5
//                    text-primary-hover-100 bg-transparent mb-8 border-2 border-primary-hover-50"
//                    data-isshown="0">
//             <span class="">Показать больше</span>
//             <svg class="transition-transform ease-in-out duration-300" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path class="fill-primary-hover-100 group-hover:fill-white transition-transform" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
//             </svg>
//         </button>`;
//     container.appendChild(templateTermsBtn.content);

//     const showTermsBtn = document.querySelector(
//       `.show-more-terms-btn-${index}`
//     );
//     showTermsBtn.addEventListener("click", () => {
//       if (showTermsBtn.dataset.isshown === "0") {
//         showTermsBtn.dataset.isshown = "1";
//         showTermsBtn.querySelector("span").innerText = "Показать меньше";
//         showTermsBtn.querySelector("svg").classList.add("rotate-180");
//         Array.from(container.children).forEach((input) => {
//           input.classList.contains("hidden") && input.tagName === "LABEL"
//             ? input.classList.remove("hidden")
//             : null;
//         });
//       } else {
//         showTermsBtn.dataset.isshown = "0";
//         showTermsBtn.querySelector("span").innerText = "Показать больше";
//         showTermsBtn.querySelector("svg").classList.remove("rotate-180");
//         Array.from(container.children).forEach((input, index) => {
//           if (index > 4) {
//             !input.classList.contains("hidden") && input.tagName === "LABEL"
//               ? input.classList.add("hidden")
//               : null;
//           }
//         });
//       }
//     });

//     Array.from(container.children).forEach((input, index) => {
//       index > 4 && input.tagName === "LABEL"
//         ? input.classList.add("hidden")
//         : null;
//     });
//   }
// });







const productsContainer = document.querySelector(".products");

const loadingSpinner = document.querySelector(".loading_spinner");

const resetFilter = document.querySelector(".reset-filter");
const filterForm = document.querySelector(".filter-form");

const priceFrom = document.querySelector(".prices .from-price");
const priceTo = document.querySelector(".prices .to-price");

const mobSortBtn = document.querySelector(".mob-sort-btn");
const mobSortOptions = document.querySelector(".mob-sort-options");
const cheapFirstBtn = document.querySelector(".cheap-first");
const expensiveFirstBtn = document.querySelector(".expensive-first");
const saleFirstBtn = document.querySelector(".sale-first");

const showFilterBtn = document.querySelector(".show-filter-btn");
const closeFilterBtn = document.querySelector(".close-filter-btn");
const filter = document.querySelector(".filter-block");
const products = document.querySelector(".products-block");

const pagination = document.querySelector('.pagination');

const activeBtnClass =
  "page-btn hover:bg-primary-hover-50 ease-in-out duration-300 transition-colors bg-primary-hover-50 rounded-2xl text-[18px] text-primary-hover-100 cursor-pointer font-medium px-8 py-4 border-2 border-primary-hover-50";
const inactiveBtnClass =
  "page-btn hover:bg-primary-hover-50 ease-in-out duration-300 transition-colors rounded-2xl text-[18px] text-primary-hover-100 cursor-pointer font-medium px-8 py-4 border-2 border-primary-hover-50";

const prevBtnClasses =
  "prev-page-btn disabled:text-primary-black-45 disabled:hover:opacity-100 disabled:cursor-default hover:opacity-80 ease-in-out duration-300 transition-opacity text-[18px] text-primary-hover-100 cursor-pointer font-medium px-8 py-4";
const nextBtnClasses =
  "next-page-btn disabled:text-primary-black-45 disabled:hover:opacity-100 disabled:cursor-default hover:opacity-80 ease-in-out duration-300 transition-opacity text-[18px] text-primary-hover-100 cursor-pointer font-medium px-8 py-4";

  let pageNumber = 1;
  let showAll = false;

  let productsPerPage = 2;
// For load more products button on mobile
let pagesCounter = 2;

// Request object
let reqParams = {
  per_page: productsPerPage,
  page: 1,
};
let postsCounter;

// Render pagination
// const renderPagination = (postsNumber) => {
//   const pagesNumber = Math.trunc(postsNumber / 2);
//   let allPagesBtns = [];

//   !pageNumber ? (pageNumber = 1) : null;

//   if(+pagesNumber >= 3) {
//     if (showAll === false) {
//       if (+pageNumber === 1) {
//         for (let i = 1; i <= 3; i++) {
//           allPagesBtns.push(`<div class="page-btn" data-id="${i}">${i}</div>`);
//         }
//       } else {
//         if (+pageNumber >= pagesNumber - 1) {
//           for (let i = pagesNumber - 2; i <= pagesNumber; i++) {
//             allPagesBtns.push(
//               `<div class="page-btn" data-id="${i}">${i}</div>`
//             );
//           }
//         } else {
//           for (let i = 1; i <= pagesNumber; i++) {
//             if (i >= +pageNumber - 1 && i <= +pageNumber + 1) {
//               allPagesBtns.push(
//                 `<div class="page-btn" data-id="${i}">${i}</div>`
//               );
//             }
//           }
//         }
//       }
//     } else {
//       for (let i = 1; i <= pagesNumber; i++) {
//         allPagesBtns.push(`<div class="page-btn" data-id="${i}">${i}</div>`);
//       }
//     }
//   } else {
//     for (let i = 1; i <= pagesNumber; i++) {
//       allPagesBtns.push(`<div class="page-btn" data-id="${i}">${i}</div>`);
//     }
//   }

//   // Append last page button
//   if (pagesNumber > 4 && pageNumber <= pagesNumber - 2 && showAll != true) {
//     allPagesBtns.push(
//       `<div class="page-btn" data-id="${pagesNumber}">${pagesNumber}</div>`
//     );
//   }

//   // Insert str... page button
//   if(pagesNumber > 4) {
//     allPagesBtns.push(`<div data-type="all">Стр...</div>`);
//   }

//   let html = allPagesBtns.join(" ");

//   pagination.innerHTML = html;

//   // Pasting prev & next buttons
//   if (showAll === false) {
//     const prev = document.createElement("template");
//     const next = document.createElement("template");
//     prev.innerHTML = '<button class="prev-page-btn">Назад</button>';
//     next.innerHTML = '<button class="next-page-btn">Далее</button>';
//     pagination.prepend(prev.content);
//     pagination.append(next.content);
//     const prevBtnEl = pagination.querySelector(".prev-page-btn");
//     const nextBtnEl = pagination.querySelector(".next-page-btn");
//     setBtnClasses(prevBtnEl, prevBtnClasses);
//     setBtnClasses(nextBtnEl, nextBtnClasses);
//     nextBtnEl.addEventListener("click", () => {
//       pageNumber = +pageNumber + 1;
//       doRequest();
//     });
//     prevBtnEl.addEventListener("click", () => {
//       pageNumber = +pageNumber - 1;
//       doRequest();
//     });
//     if (+pageNumber === 1) {
//       prevBtnEl.disabled = true;
//     }
//     if (+pageNumber === pagesNumber) {
//       nextBtnEl.disabled = true;
//     }
//   }
//   // end

//   // Adding classes
//   const btns = pagination.querySelectorAll(".page-btn");
//   btns.forEach((btn) => {
//     setBtnClasses(btn, inactiveBtnClass);
//   });
//   if(pagination.querySelector("[data-type='all']")) {
//     setBtnClasses(
//       pagination.querySelector("[data-type='all']"),
//       inactiveBtnClass
//     );
//   }

//   // Set classes to current page button
//   const currentPageBtn = pagination.querySelector(`[data-id="${pageNumber}"]`);
//   setBtnClasses(currentPageBtn, activeBtnClass);

//   setListeners();
// }
// // end pag

// // Toggle sorting options on mobile
// mobSortBtn.addEventListener("click", (e) => {
//   mobSortOptions.classList.toggle("hidden");
// });

// // Toggle filters on mobile
// showFilterBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   filter.classList.toggle("hidden");
//   products.classList.toggle("hidden");
// });
// closeFilterBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   filter.classList.toggle("hidden");
//   products.classList.toggle("hidden");
// });



// // Get and render filtered posts to posts container
// const getFilteredPosts = (url) => {
//   loadingSpinner.classList.toggle("hidden");

//   axios
//     .get(url, {
//       params: reqParams,
//     })
//     .then((response) => {
//       loadingSpinner.classList.toggle("hidden");
//       console.log(response);
//       if (response.data) {
//         postsCounter = response.headers["x-wp-total"];
//         productsContainer.innerHTML = response.data;
//         renderPagination(postsCounter);
//       } else {
//         productsContainer.innerHTML = `<p>Таких кухонь нет...</p>`;
//       }
//     });
// };

// // Add price range filter inputs listeners
// const getPriceRange = (fromInput, toInput) => {
//   return {
//     price_from: !fromInput.value ? 0 : +fromInput.value,
//     price_to: !toInput.value ? 999999999 : +toInput.value,
//   };
// };
// // Send request only on Enter key hit
// ["change", "keydown"].forEach((evt) => {
//   priceFrom.addEventListener(evt, (e) => {
//     if (evt === "keydown" && e.keyCode === 13) {
//       reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
//       getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
//     }
//   });
//   priceTo.addEventListener(evt, (e) => {
//     if (evt === "keydown" && e.keyCode === 13) {
//       reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
//       getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
//     }
//   });
// });

// // SORTING KITCHENS
// // Cheap first
// cheapFirstBtn.addEventListener("click", (e) => {
//   const orderByReq = {
//     order: "ASC",
//     meta_key: "kitchen_price",
//   };
//   reqParams = Object.assign(reqParams, orderByReq);

//   if (mobSortBtn.classList.contains("flex")) {
//     mobSortBtn.querySelector(".sort-btn-text").textContent =
//       cheapFirstBtn.textContent;
//     mobSortOptions.classList.toggle("hidden");
//   }

//   getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
// });
// // Expensive first
// expensiveFirstBtn.addEventListener("click", (e) => {
//   const orderByReq = {
//     order: "DESC",
//     meta_key: "kitchen_price",
//   };
//   reqParams = Object.assign(reqParams, orderByReq);

//   if (mobSortBtn.classList.contains("flex")) {
//     mobSortBtn.querySelector(".sort-btn-text").textContent =
//       expensiveFirstBtn.textContent;
//     mobSortOptions.classList.toggle("hidden");
//   }

//   getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
// });
// // Order by sale size
// saleFirstBtn.addEventListener("click", (e) => {
//   const orderByReq = {
//     order: "DESC",
//     meta_key: "kitchen_sale",
//   };
//   reqParams = Object.assign(reqParams, orderByReq);

//   if (mobSortBtn.classList.contains("flex")) {
//     mobSortBtn.querySelector(".sort-btn-text").textContent =
//       saleFirstBtn.textContent;
//     mobSortOptions.classList.toggle("hidden");
//   }

//   getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
// });

// // Show more taxonomies
// const termsContainers = document.querySelectorAll(".terms-container");
// termsContainers.forEach((container, index) => {
//   if (container.children.length > 4) {
//     const templateTermsBtn = document.createElement("template");
//     templateTermsBtn.innerHTML = `<button class="show-more-terms-btn-${index} group flex w-full mt-6 items-center justify-center space-x-4 primary-btn py-5
//                    text-primary-hover-100 bg-transparent mb-8 border-2 border-primary-hover-50"
//                    data-isshown="0">
//             <span class="">Показать больше</span>
//             <svg class="transition-transform ease-in-out duration-300" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path class="fill-primary-hover-100 group-hover:fill-white transition-transform" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
//             </svg>
//         </button>`;
//     container.appendChild(templateTermsBtn.content);

//     const showTermsBtn = document.querySelector(
//       `.show-more-terms-btn-${index}`
//     );
//     showTermsBtn.addEventListener("click", () => {
//       if (showTermsBtn.dataset.isshown === "0") {
//         showTermsBtn.dataset.isshown = "1";
//         showTermsBtn.querySelector("span").innerText = "Показать меньше";
//         showTermsBtn.querySelector("svg").classList.add("rotate-180");
//         Array.from(container.children).forEach((input) => {
//           input.classList.contains("hidden") && input.tagName === "LABEL"
//             ? input.classList.remove("hidden")
//             : null;
//         });
//       } else {
//         showTermsBtn.dataset.isshown = "0";
//         showTermsBtn.querySelector("span").innerText = "Показать больше";
//         showTermsBtn.querySelector("svg").classList.remove("rotate-180");
//         Array.from(container.children).forEach((input, index) => {
//           if (index > 4) {
//             !input.classList.contains("hidden") && input.tagName === "LABEL"
//               ? input.classList.add("hidden")
//               : null;
//           }
//         });
//       }
//     });

//     Array.from(container.children).forEach((input, index) => {
//       index > 4 && input.tagName === "LABEL"
//         ? input.classList.add("hidden")
//         : null;
//     });
//   }
// });

// // Load more products on mobile
// const mobShowMoreBtn = document.querySelector(".mob-show-more-btn");
// mobShowMoreBtn.addEventListener("click", (e) => {
//   pagesCounter += productsPerPage;

//   const numberOfPages = {
//     per_page: pagesCounter,
//   };
//   reqParams = Object.assign(reqParams, numberOfPages);

//   loadingSpinner.classList.toggle("hidden");

//   axios
//     .get("http://skmebel/wp-json/wp/v2/custom_kitchen", {
//       params: reqParams,
//     })
//     .then((response) => {
//       loadingSpinner.classList.toggle("hidden");
//       if (response.data) {
//         productsContainer.innerHTML = response.data;

//         let postsNumber = response.headers["x-wp-total"];

//         if (pagesCounter >= postsNumber) {
//           mobShowMoreBtn.disabled = true;
//         }
//       } else {
//         productsContainer.innerHTML = `<p>Таких кухонь нет...</p>`;
//       }
//     });
// });

// // Pagination
// const doRequest = () => {
//   const currentPageReq = { page: pageNumber ? pageNumber : 1 };

//   reqParams = Object.assign(reqParams, currentPageReq);

//   getFilteredPosts("http://skmebel/wp-json/wp/v2/custom_kitchen");
// }

// const setListeners = () => {
//   const btns = pagination.querySelectorAll(".page-btn");
//   btns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       pageNumber = btn.dataset.id;
//       doRequest();
//     });
//   });
//   if(pagination.querySelector("[data-type='all']")) {
//     pagination.querySelector("[data-type='all']").addEventListener("click", () => {
//       showAll === false ? (showAll = true) : (showAll = false);
//       doRequest();
//     });
//   }
// }

// const setBtnClasses = (el, style) => {
//   el.className = "";
//   style.split(" ").forEach((class_name) => {
//     el.classList.add(class_name);
//   });
// }

