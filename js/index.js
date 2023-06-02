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

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});

// Ẩn hiện Menu
const cloneMobile = document.getElementById("clone-mobile");
const bgBox = document.querySelector(".box-bg-menu");
const textLink = document.querySelectorAll(".mobile-items");

const menuTogger = function () {
  cloneMobile.classList.add("active");
  bgBox.style.display = "block";
};

bgBox.onclick = function () {
  cloneMobile.classList.remove("active");
  bgBox.style.display = "none";
};

for (let i = 0; i < textLink.length; i++) {
  const menuItems = textLink[i];

  menuItems.onclick = function () {
    cloneMobile.classList.remove("active");
    bgBox.style.display = "none";
  };
}
