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
// const productsSwiper = new Swiper(".products-slider", {
//   slidesPerView: 5,
//   spaceBetween: 20,
//   loop: true,

//   navigation: {
//     nextEl: ".products-next",
//     prevEl: ".products-prev",
//   },
// });

const productsSwiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: ".products-next",
    prevEl: ".products-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 5,
    },
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

// Responsiveness
const menuToggle = document.querySelector(".menu-toggle");
const navbarList = document.querySelector(".navbar-list");

menuToggle.addEventListener("click", () => {
  navbarList.classList.toggle("active");

  menuToggle.innerHTML = navbarList.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
