const swiper = new Swiper(".hero-slider", {
  loop: true,

  speed: 1000,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// You must add that code in order the other products to be visable
const productsSwiper = new Swiper(".products-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".products-next",
    prevEl: ".products-prev",
  },
});

const testimonialsSwiper = new Swiper(".testimonials-slider", {
  loop: true,

  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});
