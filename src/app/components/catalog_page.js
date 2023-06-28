import axios from "axios";

const productsContainer = document.querySelector('.products');

const loadingSpinner = document.querySelector('.loading_spinner');

const resetFilter = document.querySelector('.reset-filter');

const priceFrom = document.querySelector('.prices .from-price');
const priceTo = document.querySelector('.prices .to-price');

const cheapFirstBtn = document.querySelector('.cheap-first');
const expensiveFirstBtn = document.querySelector('.expensive-first');
const saleFirstBtn = document.querySelector('.sale-first');

const showFilterBtn = document.querySelector('.show-filter-btn');
const closeFilterBtn = document.querySelector('.close-filter-btn');
const filter = document.querySelector('.filter-block');
const products = document.querySelector('.products-block');


showFilterBtn.addEventListener('click', (e) => {
   e.preventDefault();
   filter.classList.toggle('hidden');
   products.classList.toggle('hidden');
});
closeFilterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filter.classList.toggle('hidden');
    products.classList.toggle('hidden');
});

// Request object
let reqParams = {}

// Get and render filtered posts to posts container
const getFilteredPosts = (url) => {

    loadingSpinner.classList.toggle('hidden');

    axios.get(url, {
        params: reqParams,
    })
        .then(response => {
            loadingSpinner.classList.toggle('hidden');
            console.log(response);
            if(response.data) {
                productsContainer.innerHTML = response.data;
            } else {
                productsContainer.innerHTML =
                    `<p>Таких кухонь нет...</p>`;
            }
        });
}

// Add price filter inputs listeners
const getPriceRange = (fromInput, toInput) => {
  return {
      price_from: !fromInput.value ? 0 : +fromInput.value,
      price_to: !toInput.value ? 999999999 : +toInput.value,
  }
};
priceFrom.addEventListener('change', (e) => {
    e.preventDefault();
    reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});
priceTo.addEventListener('change', (e) => {
    e.preventDefault();
    reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});

// Add kitchen style checkboxes listeners
const styleCheckboxes = document.querySelectorAll('.style-checkbox');
styleCheckboxes.forEach(box => {
    box.addEventListener('change', (e) => {
        const checked = [];
        styleCheckboxes.forEach(checkbox => {
            checkbox.checked === true ?
                checked.push(checkbox.dataset.id) :
                checked.slice(checked.indexOf(checkbox.dataset.id),1);
        });
        reqParams.category = checked.join(',');
        if(checked.length > 0) {
            reqParams.category = checked.join(',')
        } else {
            if(reqParams.category) { delete reqParams.category; }
        }
        getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
    })
})

// Add kitchen size checkboxes listeners
const sizeCheckboxes = document.querySelectorAll('.size-checkbox');
sizeCheckboxes.forEach(sizeBox => {
    sizeBox.addEventListener('change', (e) => {
        const checkedSize = [];
        sizeCheckboxes.forEach(checkBox => {
            checkBox.checked === true ?
                checkedSize.push(checkBox.dataset.id) :
                checkedSize.slice(checkedSize.indexOf(checkBox.dataset.id),1);
        });
        if(checkedSize.length > 0) {
            reqParams.size = checkedSize.join(',')
        } else {
            if(reqParams.size) { delete reqParams.size; }
        }
        getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
    })
});

// SORTING KITCHENS
// Cheap first
cheapFirstBtn.addEventListener('click', (e) => {
    const orderByReq = {
        order: 'ASC',
        meta_key: 'kitchen_price',
    };
    reqParams = Object.assign(reqParams, orderByReq);

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});
// Expensive first
expensiveFirstBtn.addEventListener('click', (e) => {
    const orderByReq = {
        order: 'DESC',
        meta_key: 'kitchen_price',
    };
    reqParams = Object.assign(reqParams, orderByReq);

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});
// Order by sale size
saleFirstBtn.addEventListener('click', (e) => {
    const orderByReq = {
        order: 'ASC',
        meta_key: 'kitchen_sale',
    };
    reqParams = Object.assign(reqParams, orderByReq);

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});