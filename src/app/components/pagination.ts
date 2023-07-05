// import './index.scss';

type PaginationElementsNames = 'main' | 'wrapper' | 'prevBtn' | 'nextBtn' | 'bulletsWrapper' | 'inactiveBullet' | 'activeBullet';
type PaginationElements = Record<PaginationElementsNames, HTMLElement | SVGSVGElement>;
type PaginationClasses = Record<PaginationElementsNames, string[]>;

class Pagination extends HTMLElement {
    static get observedAttributes() {
        return [
            'total-pages',
            'current-page',
            'showed-pages',
            'pending',
            'show-all'
        ];
    }

    attributeChangedCallback(name: string, oldValue, newValue) {
        if (name === 'total-pages' && oldValue) {
            if (!(+newValue)) {
                this.classList.add('hidden');
            } else {
                this.classList.remove('hidden');
            }
        }
        this.renderBullets();
    }

    get totalPages() {
        return +this.getAttribute('total-pages');
    }

    get currentPage() {
        return +(this.getAttribute('current-page') || 1);
    }

    get showedPages() {
        return +(this.getAttribute('showed-pages') || 1);
    }

    get pending() {
        const val = JSON.parse(this.getAttribute('pending'));

        if (typeof val !== 'boolean') return false;
        return val;
    }

    get showAll() {
        return Boolean(this.getAttribute('show-all'));
    }

    set showAll(val: boolean) {
        this.setAttribute('show-all', `${val}`)
    }

    set currentPage(val: number) {
        this.setAttribute('current-page', `${val}`);
    }

    #elements: PaginationElements = {} as PaginationElements;
    #classes: PaginationClasses = {
        main: ['pagination', 'w-full', 'flex', 'justify-end', 'relative', 'my-12'],
        wrapper: ['pagination-wrapper', 'flex', 'items-center', 'justify-center', 'gap-x-10', 'mx-auto'],
        prevBtn: ['prev-page-btn', 'disabled:text-primary-black-45', 'disabled:hover:opacity-100', 'disabled:cursor-default', 
        'hover:opacity-80', 'ease-in-out', 'duration-300', 'transition-opacity', 'text-[18px]', 'text-primary-hover-100', 'cursor-pointer', 
        'font-medium', 'px-8', 'py-4', 'pagination-prev'],
        nextBtn: ['next-page-btn', 'disabled:text-primary-black-45', 'disabled:hover:opacity-100', 'disabled:cursor-default', 
        'hover:opacity-80', 'ease-in-out', 'duration-300', 'transition-opacity', 'text-[18px]', 'text-primary-hover-100',
        'cursor-pointer', 'font-medium', 'px-8', 'py-4', 'pagination-prev'],
        bulletsWrapper: ['pagination', 'hidden', 'xl:flex', 'flex-row', 'items-center', 'gap-x-2'],
        inactiveBullet: ['page-btn', 'hover:bg-primary-hover-50', 'ease-in-out', 'duration-300', 'transition-colors', 
        'rounded-2xl', 'text-[18px]', 'text-primary-hover-100', 'cursor-pointer', 'font-medium', 'px-8', 'py-4', 
        'border-2', 'border-primary-hover-50'],
        activeBullet: ['page-btn', 'hover:bg-primary-hover-50', 'ease-in-out', 'duration-300', 'transition-colors', 'bg-primary-hover-50',
        'rounded-2xl', 'text-[18px]', 'text-primary-hover-100', 'cursor-pointer', 'font-medium', 'px-8', 'py-4', 
        'border-2', 'border-primary-hover-50'],
    };

    constructor() {
        super();

        this.renderBaseTemplate();
        this.renderBullets();
        this.renderControls();
    }

    renderBaseTemplate() {
        this.#elements.main = document.createElement('div');
        this.#elements.main.classList.add(...this.#classes['main']);

        this.#elements.wrapper = document.createElement('div');
        this.#elements.wrapper.classList.add(...this.#classes['wrapper']);

        this.#elements.prevBtn = document.createElement('button');
        this.#elements.prevBtn.classList.add(...this.#classes['prevBtn']);
        this.#elements.prevBtn.innerText = "Назад";
        this.#elements.prevBtn.addEventListener('click', () => this.changePage(this.currentPage - 1));

        this.#elements.nextBtn = document.createElement('button');
        this.#elements.nextBtn.classList.add(...this.#classes['nextBtn']);
        this.#elements.nextBtn.innerText = "Далее";
        this.#elements.nextBtn.addEventListener('click', () => this.changePage(this.currentPage + 1));

        this.#elements.bulletsWrapper = document.createElement('div');
        this.#elements.bulletsWrapper.classList.add(...this.#classes['bulletsWrapper']);

        this.#elements.wrapper.append(this.#elements.prevBtn, this.#elements.bulletsWrapper, this.#elements.nextBtn);
        this.#elements.main.append(this.#elements.wrapper);

        this.append(this.#elements.main);
    }

    renderControls() {
        this.currentPage === 1 ?
            (this.#elements.prevBtn as HTMLButtonElement).disabled = true : 
            (this.#elements.prevBtn as HTMLButtonElement).disabled = false;
        this.currentPage === this.totalPages ?
            (this.#elements.nextBtn as HTMLButtonElement).disabled = true :
            (this.#elements.nextBtn as HTMLButtonElement).disabled = false;
    }

    createBullet(num: number, active = false) {
        const bullet = document.createElement('span');
        bullet.innerHTML = `${!num ? '...' : num}`;

        bullet.classList.add(...this.#classes.inactiveBullet);
        if (active) bullet.classList.add(...this.#classes.activeBullet);

        bullet.addEventListener('click', () => this.changePage(num));

        this.#elements.bulletsWrapper.append(bullet);
    }

    renderBullets() {
        this.#elements.bulletsWrapper.innerHTML = '';
        
        if(this.showAll === true) {
            console.log(`${this.showAll} - render all`);
                
            for (let i = 1; i <= this.totalPages; i++) {
                this.createBullet(i, i === this.currentPage);
            }    
        } else {
            console.log(`${this.showAll} - render 3`);

            const min = Math.max(1, this.currentPage - (Number(this.currentPage===this.totalPages) + this.showedPages));
            const max = Math.min(this.totalPages, this.currentPage + this.showedPages + Math.max(0, min - this.currentPage + this.showedPages));

            for (let i = min; i <= max; i++) {
                this.createBullet(i, i === this.currentPage);
            }
        }

        // Insert show all page buttons button
        if(this.totalPages > 3) {
            const bullet = document.createElement('span');
            bullet.innerHTML = 'Стр...';
            bullet.classList.add(...this.#classes.inactiveBullet);
            bullet.addEventListener('click', () => {
                this.showAll = !this.showAll;
                console.log(this.showAll);
            });
            this.#elements.bulletsWrapper.append(bullet);
        }

        // Insert last page button
        if(this.showAll === false) {
            if(this.totalPages > 3 && this.currentPage < this.totalPages  - 1) {
                this.createBullet(+this.totalPages);
            }
        }

        this.renderControls();
    }

    changePage(num: number) {
        if (num < 1 || num > this.totalPages || this.pending) return;

        this.dispatchEvent(new CustomEvent('changed', {
            detail: {
                page: num
            }
        }));

        this.currentPage = num;
    }
}

customElements.define('my-pagination', Pagination);