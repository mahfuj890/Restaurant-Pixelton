"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {});
})(jQuery);
//Sticky Navbar
let headerWrapper = document.querySelector(".header_wrapper");
window.addEventListener("scroll", () => {
  headerWrapper.classList.toggle("navbar-fixed", scrollY > 0);
});
var prevScrollpos = window.pageYOffset;
console.log("prev", prevScrollpos);
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log("next", currentScrollPos);
  if (prevScrollpos > currentScrollPos) {
    headerWrapper.style.top = "0";
  } else {
    headerWrapper.style.top = "-7rem";
  }
  prevScrollpos = currentScrollPos;
};

//Hamburger Icon
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".header_wrapper");
let mobileToggleIcon = document.querySelector(".mobile_toggle_icon");

mobileToggleIcon.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.add("hamburger_active");
  navMenu.classList.add("navbar_active");
}
hamburger.addEventListener("click", () => {
  hideMobileMenu();
});

let navbarOverlay = document.querySelector(".overlay_navbar");
navbarOverlay.addEventListener("click", () => {
  hideMobileMenu();
});

function hideMobileMenu() {
  navMenu.classList.remove("navbar_active");
  hamburger.classList.remove("hamburger_active");
}
//Hero Slider
var swiper = new Swiper(".hero_slider_wrapper .swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 5000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Choose Section and  MagnificPopup
// init Isotope
var $grid = $(".food_filter_row").isotope({
  filter: ".Pasta",
});
// filter items on button click
$(".fillter_item_list").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({
    filter: filterValue,
  });
});
// filter items on button active class
$(".fillter_item_list").on("click", "li", function () {
  $(this).addClass("food_active").siblings().removeClass("food_active");
});

//Counter
let visibilityIds = ["#counters_1", "#counters_2", "#counters_3"];
let counterClass = ".counter";
let defaultSpeed = 3000;

// ScrollToUp
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("scroll_active", window.scrollY > 500);
});

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});
$(window).on("load", function () {
  AOS.refresh();
});
