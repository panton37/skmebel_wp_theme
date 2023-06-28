import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener("DOMContentLoaded", () => {
    const mainPageSwiper = new Swiper(".main-swiper", {
        modules: [Navigation],
        // Optional parameters
        centeredSlides: true,
        direction: "horizontal",
        loop: true,
        breakpoints: {
            // when window width is <= 1024px
            10: {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false,
                navigation: {
                    enabled: false,
                },
            },
            // when window width is >= 1024
            1024: {
                slidesPerView: 3,
                spaceBetween: 51,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
        },
    });
});