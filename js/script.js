$(document).ready(function() {
  // Ẩn hiện Menu

  $(".menu-toggle").click(function() {
    $("#clone-mobile").addClass('active');
    $(".box-bg-menu").css('display', 'block');
  }); 

  $(".box-bg-menu").click(function() {
    $("#clone-mobile").removeClass('active');
    $(".box-bg-menu").css('display', 'none');
  })

});