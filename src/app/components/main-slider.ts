import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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

  const kitchenPageSlider = new Swiper(".slider-4060", {
    modules: [Navigation],
    // Optional parameters
    direction: "horizontal",
    slidesPerView: "auto",
    centeredSlides: false,
    slidesPerGroup: 2,
    spaceBetween: 25,
    loop: false,

    breakpoints: {
      // when window width is <= 1024px
      10: {
        slidesPerView: "auto",
        spaceBetween: 10,
        slidesPerGroup: 1,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 1024
      1024: {
        slidesPerView: "auto",
        centeredSlides: false,
        slidesPerGroup: 2,
        spaceBetween: 25,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });

  const kitchenPageSwiper = new Swiper(".basic-swiper", {
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

  const kitchenPageProductsSwiper = new Swiper(".products-swiper", {
    modules: [Navigation],
    // Optional parameters
    centeredSlides: false,
    direction: "horizontal",
    breakpoints: {
      // when window width is <= 1024px
      10: {
        slidesPerView: 2,
        spaceBetween: 14,
        centeredSlides: false,
        navigation: {
          enabled: false,
        },
      },
      // when window width is >= 1024
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
  });
});
