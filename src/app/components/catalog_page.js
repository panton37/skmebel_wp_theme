import axios from "axios";

const productsContainer = document.querySelector('.products');

const loadingSpinner = document.querySelector('.loading_spinner');

const resetFilter = document.querySelector('.reset-filter');
const filterForm = document.querySelector('.filter-form');

const priceFrom = document.querySelector('.prices .from-price');
const priceTo = document.querySelector('.prices .to-price');

const mobSortBtn = document.querySelector('.mob-sort-btn');
const mobSortOptions = document.querySelector('.mob-sort-options');
const cheapFirstBtn = document.querySelector('.cheap-first');
const expensiveFirstBtn = document.querySelector('.expensive-first');
const saleFirstBtn = document.querySelector('.sale-first');

const showFilterBtn = document.querySelector('.show-filter-btn');
const closeFilterBtn = document.querySelector('.close-filter-btn');
const filter = document.querySelector('.filter-block');
const products = document.querySelector('.products-block');

// Toggle sorting options on mobile
mobSortBtn.addEventListener('click', (e) => {
    mobSortOptions.classList.toggle('hidden');
});

// Toggle filters on mobile
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

// Reset filters
resetFilter.addEventListener('click', (e) => {
   const inputs = filterForm.querySelectorAll('input');
   inputs.forEach(input => {
      input.type === 'number' ? input.value = '' : input.checked = false;
   });
   reqParams = {};
   getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
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
// Send request only on Enter key hit
['change', 'keydown'].forEach( evt => {
    priceFrom.addEventListener(evt, (e) => {
        if(evt === 'keydown' && e.keyCode === 13) {
            reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
            getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
        }
    });
    priceTo.addEventListener(evt, (e) => {
        if(evt === 'keydown' && e.keyCode === 13) {
            reqParams = Object.assign(reqParams, getPriceRange(priceFrom, priceTo));
            getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
        }
    });
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

// Add kitchen material checkboxes listeners
const materialCheckboxes = document.querySelectorAll('.material-checkbox');
materialCheckboxes.forEach(materialBox => {
    materialBox.addEventListener('change', (e) => {
        const checkedMaterial = [];
        materialCheckboxes.forEach(checkBox => {
            checkBox.checked === true ?
                checkedMaterial.push(checkBox.dataset.id) :
                checkedMaterial.slice(checkedMaterial.indexOf(checkBox.dataset.id),1);
        });
        if(checkedMaterial.length > 0) {
            reqParams.material = checkedMaterial.join(',')
        } else {
            if(reqParams.material) { delete reqParams.material; }
        }
        getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
    })
});

// Add kitchen color checkboxes listeners
const colorCheckboxes = document.querySelectorAll('.color-checkbox');
colorCheckboxes.forEach(colorBox => {
    colorBox.addEventListener('change', (e) => {
        const checkedColor = [];
        colorCheckboxes.forEach(checkBox => {
            checkBox.checked === true ?
                checkedColor.push(checkBox.dataset.id) :
                checkedColor.slice(checkedColor.indexOf(checkBox.dataset.id),1);
        });
        if(checkedColor.length > 0) {
            reqParams.color = checkedColor.join(',')
        } else {
            if(reqParams.color) { delete reqParams.color; }
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

    if(mobSortBtn.classList.contains('flex')) {
        mobSortBtn.querySelector('.sort-btn-text').textContent = cheapFirstBtn.textContent;
        mobSortOptions.classList.toggle('hidden');
    }

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});
// Expensive first
expensiveFirstBtn.addEventListener('click', (e) => {
    const orderByReq = {
        order: 'DESC',
        meta_key: 'kitchen_price',
    };
    reqParams = Object.assign(reqParams, orderByReq);

    if(mobSortBtn.classList.contains('flex')) {
        mobSortBtn.querySelector('.sort-btn-text').textContent = expensiveFirstBtn.textContent;
        mobSortOptions.classList.toggle('hidden');
    }

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});
// Order by sale size
saleFirstBtn.addEventListener('click', (e) => {
    const orderByReq = {
        order: 'DESC',
        meta_key: 'kitchen_sale',
    };
    reqParams = Object.assign(reqParams, orderByReq);

    if(mobSortBtn.classList.contains('flex')) {
        mobSortBtn.querySelector('.sort-btn-text').textContent = saleFirstBtn.textContent;
        mobSortOptions.classList.toggle('hidden');
    }

    getFilteredPosts('http://skmebel/wp-json/wp/v2/custom_kitchen');
});

