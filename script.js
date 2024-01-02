var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    430: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    940: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // Optional parameters

  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
