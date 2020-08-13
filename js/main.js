$(document).ready(function () {
  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    //console.log("Клик по кнопке меню");
    $(".menu").toggleClass("menu_visible");
    $(".close").toggleClass("close_visible");
  });

  var menuButton = $(".close");
  menuButton.on("click", function () {
    //console.log("Клик по кнопке меню");
    $(".menu").toggleClass("menu_visible");
    $(".close").toggleClass("close_visible");
  });

  $(document).on("keydown", function (event) {
    if (event.keyCode == 27) $(".menu").toggleClass("menu_visible");
    $(".close").toggleClass("close_visible");
  });

  //Табы
  var tabsItem = $(".trending-category__link");
  var contentItem = $(".trending-card");

  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trending-category__link--active");
    contentItem.removeClass("trending-card--visible");
    $(activeContent).addClass("trending-card--visible");
    $(this).addClass("trending-category__link--active");
    // console.log(activeContent);
  });

  //Слайдер
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    },
    on: {
      init() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      },
    },
  });
});
