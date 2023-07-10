import Paginator from "./paginator";

class Catalog extends Paginator {
  action = "/wp/v2/custom_kitchen";

  constructor(conf) {
    super(conf);

    this.elements.productsSection =
      this.elements.main.querySelector(".products-block");
    this.elements.filterSection =
      this.elements.main.querySelector(".filter-block");
    this.elements.prices = this.elements.main.querySelector(".prices");
    this.elements.sizes = this.elements.main.querySelector(".sizes");
    this.elements.styles = this.elements.main.querySelector(".styles");
    this.elements.material = this.elements.main.querySelector(".material");
    this.elements.colors = this.elements.main.querySelector(".colors");

    this.elements.filterForm = this.elements.main.querySelector(".filter-form");
    this.elements.filterInputs =
      this.elements.filterForm.querySelectorAll("input");
    this.elements.filterReset =
      this.elements.filterForm.querySelector(".reset-filter");
    this.elements.termsContainers =
      this.elements.filterForm.querySelectorAll(".terms-container");

    this.elements.sort = this.elements.main.querySelector(".mob-sort-options");
    this.elements.mobSortBtn =
      this.elements.main.querySelector(".mob-sort-btn");
    this.elements.mobToggleFilters = document.querySelector(".show-filter-btn");
    this.elements.closeFilterBtn = document.querySelector(".close-filter-btn");
    this.elements.showMoreProductsBtn =
      document.querySelector(".mob-show-more-btn");

    this.#setHandlers();

    this.itemsOnPage = 2;
  }

  // Add price range filter inputs listeners
  #listenPrice(priceFrom: HTMLElement, priceTo: HTMLElement): void {
    ["change", "keydown"].forEach((evt) => {
      priceFrom.addEventListener(evt, (e) => {
        if (evt === "keydown" && e.keyCode === 13) {
          this.setParam("price_from", priceFrom.value);
        }
      });
      priceTo.addEventListener(evt, (e) => {
        if (evt === "keydown" && e.keyCode === 13) {
          this.setParam("price_to", priceTo.value);
        }
      });
    });
  }

  #listenCheckboxes(
    boxes: HTMLElement,
    checkboxName: string,
    filterName: string
  ) {
    boxes.querySelectorAll(checkboxName).forEach((box) => {
      box.addEventListener("change", async () => {
        const checkedArr: Array<number> = [];
        let val = "";
        boxes.querySelectorAll(checkboxName).forEach((checkBox) => {
          checkBox.checked === true
            ? checkedArr.push(checkBox.dataset.id)
            : checkedArr.slice(checkedArr.indexOf(checkBox.dataset.id), 1);
        });
        checkedArr.length ? (val = checkedArr.join(",")) : null;

        await this.setParam(filterName, val);
      });
    });
  }

  #listenSort() {
    let query = {};
    this.elements.sort.querySelectorAll(".sort-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        if (btn.dataset.type === "popularity") {
        }
        if (btn.dataset.type === "cheap") {
          query = Object.assign(query, {
            meta_key: "kitchen_price",
            order: "ASC",
          });
          await this.setParams(query);
        }
        if (btn.dataset.type === "expensive") {
          query = Object.assign(query, {
            meta_key: "kitchen_price",
            order: "DESC",
          });
          await this.setParams(query);
        }
        if (btn.dataset.type === "sale") {
          query = Object.assign(query, {
            meta_key: "kitchen_sale",
            order: "DESC",
          });
          await this.setParams(query);
        }
        this.elements.sort.classList.add("hidden");
      });
    });
  }

  #listenReset() {
    this.elements.filterReset.addEventListener("click", async () => {
      this.elements.filterInputs.forEach((input) => {
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
                  data-is_shown="0">
                <span class="">Показать больше</span>
                <svg class="transition-transform ease-in-out duration-300" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-primary-hover-100 group-hover:fill-white transition-transform" d="M0.199219 1.69999L1.59922 0.299988L6.19922 4.89999L10.7992 0.299988L12.1992 1.69999L6.19922 7.69999L0.199219 1.69999Z" fill="#737D8C"/>
                </svg>
            </button>`;
        container.appendChild(templateTermsBtn.content);

        const showTermsBtn = container.querySelector(
          `.show-more-terms-btn-${index}`
        );
        showTermsBtn.addEventListener("click", () => {
          if (showTermsBtn.dataset.is_shown === "0") {
            showTermsBtn.dataset.is_shown = "1";
            showTermsBtn.querySelector("span").innerText = "Показать меньше";
            showTermsBtn.querySelector("svg").classList.add("rotate-180");
            Array.from(container.children).forEach((input) => {
              input.classList.contains("hidden") && input.tagName === "LABEL"
                ? input.classList.remove("hidden")
                : null;
            });
          } else {
            showTermsBtn.dataset.is_shown = "0";
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

  // Load more products on mobile
  async #loadMoreMobile() {
    this.itemsOnPage = 2;
    let pages = await super.getPostsInfo();
    this.elements.showMoreProductsBtn.addEventListener("click", async (e) => {
      this.itemsOnPage += 2;
      if (this.itemsOnPage >= pages - 1) {
        this.elements.showMoreProductsBtn.disabled = true;
      }
      await this.setParam("per_page", this.itemsOnPage);
    });
  }

  #toggleSortBtnMobile() {
    this.elements.mobSortBtn.addEventListener("click", () => {
      this.elements.sort.classList.toggle("hidden");
    });
  }

  #toggleFiltersBtnMobile() {
    [this.elements.mobToggleFilters, this.elements.closeFilterBtn].forEach(
      (item) => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          this.elements.filterSection.classList.toggle("hidden");
          this.elements.productsSection.classList.toggle("hidden");
          this.elements.mobSortBtn.classList.toggle("hidden");
        });
      }
    );
  }

  #setHandlers() {
    this.#listenCheckboxes(this.elements.styles, ".style-checkbox", "style");
    this.#listenCheckboxes(this.elements.sizes, ".size-checkbox", "size");
    this.#listenCheckboxes(
      this.elements.material,
      ".material-checkbox",
      "material"
    );
    this.#listenCheckboxes(this.elements.colors, ".color-checkbox", "color");
    this.#listenPrice(
      this.elements.prices.querySelector(".from-price"),
      this.elements.prices.querySelector(".to-price")
    );
    this.#listenSort();
    this.#listenReset();
    this.#hideTerms();
    this.#loadMoreMobile();
    this.#toggleSortBtnMobile();
    this.#toggleFiltersBtnMobile();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".catalog_main");

  if (el) {
    new Catalog({
      el,
      params: {
        per_page: 2,
      },
    });
  }
});

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
