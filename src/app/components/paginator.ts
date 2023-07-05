import client from 'shared/client';

type ElementsNames = 'main' | 'pagination' | 'spinner' | 'list' | 'emptyMessage';
type Elements<E extends string> = Record<E | ElementsNames, HTMLElement>;

export interface Params {
    page: number;
    per_page: number;
}

export interface Config<P> {
    el: HTMLElement | Element;
    params: P;
}

class Paginator <P, E extends string> {
    elements: Elements<E>;
    defaults: Partial<P> & Partial<Params> = {
        page: 1,
        per_page: 5,
    };
    params: P & Params;
    pending = false;
    action: string = '/';
    hiddenClass: string = 'hidden';

    constructor(conf: Config<P>) {
        this.params = Object.assign(this.defaults, conf.params);
        this.elements = {
            main: conf.el,
            pagination: conf.el.querySelector('my-pagination'),
            spinner: conf.el.querySelector('.loading_spinner'),
            emptyMessage: conf.el.querySelector('.empty-message'),
            list: conf.el.querySelector('.products'),
            prevBtn: conf.el.querySelector('.prev-page-btn'),
            nextBtn: conf.el.querySelector('.next-page-btn'),
        } as Elements<E>;

        this.elements.pagination.addEventListener('changed', async (event: CustomEvent) => {
            const page = event.detail.page;
            await this.setParam('page', page);
        });
    }

    showSpinner() {
        this.elements.spinner.classList.remove(this.hiddenClass);
    }

    hideSpinner() {
        this.elements.spinner.classList.add(this.hiddenClass);
    }

    rerenderPagination(totalPages: number) {
        this.elements.pagination.setAttribute('current-page', '1');
        this.elements.pagination.setAttribute('total-pages', `${totalPages}`);

        if(!totalPages) {
            this.elements.emptyMessage.classList.remove(this.hiddenClass);
        } else {
            this.elements.emptyMessage.classList.add(this.hiddenClass);
        }



    }

    setPending(val: boolean) {
        this.pending = val;
        this.elements.pagination.setAttribute('pending', `${val}`);
    }

    async setParam(key: keyof (P & Params), value: P[keyof (P & Params)]) {
        if (this.params[key] !== value && !this.pending) {
            this.setPending(true);

            if (key !== 'page') {
                this.params.page = 1;
            }

            this.params[key] = value;
            const response = await this.getPage();

            if (key !== 'page') {
                this.rerenderPagination(+response.headers['x-wp-totalpages']);
            }

            this.setPending(false);
        }
    }

    async setParams(queryObject: any) {
        this.setPending(true);
        this.params = Object.assign(queryObject, this.params);
        const response = await this.getPage();
        this.rerenderPagination(+response.headers['x-wp-totalpages']);
        this.setPending(false);
    }

    async getPage() {
        this.showSpinner();

        const response = await client.get(this.action, {
            params: this.params
        });
        console.log(response);
        this.hideSpinner();

        this.elements.list.innerHTML = response.data;
        return response;
    }
}

export default Paginator;





// import client from 'shared/client';

// type ElementsNames = 'main' | 'pagination' | 'spinner' | 'list' | 'emptyMessage';
// type Elements<E extends string> = Record<E | ElementsNames, HTMLElement>;

// export interface Params {
//     page: number;
//     per_page: number;
// }

// export interface Config<P> {
//     el: HTMLElement | Element;
//     params: P;
// }

// class Paginator <P, E extends string> {
//     elements: Elements<E>;
//     defaults: Partial<P> & Partial<Params> = {
//         page: 1,
//         per_page: 5,
//     };
//     params: P & Params;
//     pending = false;
//     action: string = '/';
//     hiddenClass: string = '!hidden';

//     constructor(conf: Config<P>) {
//         this.params = Object.assign(this.defaults, conf.params);
//         this.elements = {
//             main: conf.el,
//             pagination: conf.el.querySelector('my-pagination'),
//             spinner: document.createElement('div'),
//             emptyMessage: conf.el.querySelector('.empty-message'),
//             list: conf.el.querySelector('.products')
//         } as Elements<E>;

//         this.elements.spinner.classList.add('absolute', 'top-0', 'w-full', 'h-full', 'bg-main-900/50', 'flex', 'items-center', 'justify-center', '!hidden');
//         this.elements.spinner.innerHTML = `
//             <svg class="icon-svg !w-12 !h-12 animate-spin !block bg-transparent">
//                 <use href="#icon-spinner"></use>
//             </svg>
//         `;

//         this.elements.list.after(this.elements.spinner);

//         this.elements.pagination.addEventListener('changed', async (event: CustomEvent) => {
//             const page = event.detail.page;
//             await this.setParam('page', page);
//         });
//     }

//     showSpinner() {
//         this.elements.spinner.classList.remove(this.hiddenClass);
//     }

//     hideSpinner() {
//         this.elements.spinner.classList.add(this.hiddenClass);
//     }

//     rerenderPagination(totalPages: number) {
//         this.elements.pagination.setAttribute('current-page', '1');
//         this.elements.pagination.setAttribute('total-pages', `${totalPages}`);

//         if(!totalPages) {
//             this.elements.emptyMessage.classList.remove(this.hiddenClass);
//         } else {
//             this.elements.emptyMessage.classList.add(this.hiddenClass);
//         }
//     }

//     setPending(val: boolean) {
//         this.pending = val;
//         this.elements.pagination.setAttribute('pending', `${val}`);
//     }

//     async setParam(key: keyof (P & Params), value: P[keyof (P & Params)]) {
//         if (this.params[key] !== value && !this.pending) {
//             this.setPending(true);

//             if (key !== 'page') {
//                 this.params.page = 1;
//             }

//             this.params[key] = value;
//             const response = await this.getPage();

//             if (key !== 'page') {
//                 this.rerenderPagination(+response.headers['x-wp-total']);
//             }

//             this.setPending(false);
//         }
//     }

//     async getPage() {
//         this.showSpinner();

//         const response = await client.get(this.action, {
//             params: this.params
//         });
//         console.log(response);
//         this.hideSpinner();

//         this.elements.list.innerHTML = response.data;
//         return response;
//     }
// }

// export default Paginator;