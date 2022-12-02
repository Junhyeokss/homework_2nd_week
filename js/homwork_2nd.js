$(function () {
  $(".mainSlide").on("init reInt afterChange", function (s, e, c) {
    var _this = $(".mainSlide .slick-current");
    _this.addClass("on").siblings().removeClass("on");
  });

  $(".mainSlide").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    fade: true,
  });

  new daum.roughmap.Lander({
    timestamp: "1669872221917",
    key: "2ctb6",
    //mapWidth: "640",
    mapHeight: "200",
  }).render();

  $(".main_pro_slide").slick({
    slidesToShow: 4,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 1500,
  });
});
