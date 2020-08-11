$(document).ready(function () {
  var menuButton = $(".shape__button");
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
});
