$(document).ready(function () {
  var $srcValue = $("#ikon__view img").attr("src");

  var $ikonImg = $("#ikon__view img");

  $("#ikon__color-list .ikon__color-select").on("click", function () {
    var imgPath;
    imgPath = $(this).attr("data-img-path");
    $ikonImg.attr("src", imgPath);
  });

  $(".ikon__type-select, .ikon__color-select").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
