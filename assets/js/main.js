$(function () {
  ("use strict");

  // navigasi mobile
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
    $(".navbar-collapse").toggleClass("show");
    $(".navbar-nav .nav-item a").removeClass("text-putih");
    $(".navbar-nav .nav-item a").addClass("text-black");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  // setting fixed navbar
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navigation").removeClass("fixed");
      $(".navigation").removeClass("bg-white");
      $(".navigation").removeClass("sija");
      $(".navigation").removeClass("shadow-lg");
    } else {
      $(".navigation").addClass("fixed");
      $(".navigation").addClass("bg-white");
      $(".navigation").addClass("shadow-lg");
      $(".sija").removeClass("sija-putih");
      $(".sija").addClass("juduls-gradient");
    }

    if (scroll > 1) {
      $(".navbar-nav .nav-item a").removeClass("text-putih");
      $(".navbar-nav .nav-item a").addClass("text-black");
    }

    if (scroll == 0) {
      $(".navbar-nav .nav-item a").addClass("text-putih");
      $(".navbar-nav .nav-item a").removeClass("text-black");
      $(".sija").removeClass("sija-gradient");
      $(".sija").addClass("sija-putih");
    }
  });

  // menu active
  var scrollLink = $(".page-scroll");
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 90;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();

    if (scroll == 0) {
      $(".nav-item").removeClass("active");
    }
  });
});
