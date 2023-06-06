$(document).ready(function() {
    $(".product-header").children('span').addClass('isOpen');
    $(".product-header").siblings().addClass('isOpen');
    $(".product-header").click(function() {
       $(this).children('span').toggleClass('isOpen');
       $(this).siblings().toggleClass('isOpen');
    })
});