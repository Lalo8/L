$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgb(255,200,54)",
        "box-shadow": "0 0 2px"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });
});