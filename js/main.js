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

  //Слайдер c рекомендациями
  var mySwiper = new Swiper(".testimonial-container", {
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

  //Слайдер с историями
  var slider = new Swiper(".story-container", {
    // Optional parameters
    direction: "horizontal",
    updateOnWindowResize: true,
    loop: true,
    initialSlide: 1,
    spaceBetween: 18,
    slidesPerView: 2,
    slidesPerGroup: 2,
    breakpoints: {
      // when window width is >= 320px
      320: {
        // direction: "vertical",
        spaceBetween: 24,
        // autoHeight: true,
      },
      768: {
        direction: "horizontal",
        spaceBetween: 24,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".story-button__next",
      prevEl: ".story-button__prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  //Обработка новостной рассылки
  $(".mail-newsletter").validate({
    errorClass: "error",
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Email must be in the format name@domain.com",
      },
    },
  });
});
