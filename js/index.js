$(document).ready(function () {

  // owlCarousel
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
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

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true, 
    margin: 20, 
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true, 
    dots: false,
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 2 
      },
      1000: {
        items: 3 
      },
      1400: {
        items: 4
      }
    }
  });
  
})