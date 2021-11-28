"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {


  });

})(jQuery);

  // Choose Section and  MagnificPopup
    // init Isotope
    var $grid = $(".food_filter_row").isotope({
      filter: '.Pasta'
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
let visibilityIds = ['#counters_1', '#counters_2', '#counters_3'];
let counterClass = '.counter';
let defaultSpeed = 3000;


// ScrollToUp
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("scroll_active", window.scrollY > 500);


})

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}




// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});
$(window).on('load', function () {
  AOS.refresh();
});










