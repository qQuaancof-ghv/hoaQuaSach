$(document).ready(function () {
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1,
            dots: false,
        },
        600:{
            items:2,
            dots: false,
        },
        1000:{
            items:3,
            dots: false,
        }
    }
});
});
