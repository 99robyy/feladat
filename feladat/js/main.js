$("#main-link a").click(function() {
    $('html, body').animate({
        scrollTop: $( $(this).attr("href")).offset().top
    },1000);
});

$("#color-title1 a").click(function(){
   $('html, body').animate({
       scrollTop: $( $(this).attr('href')).offset().top
   },1000);
});

window.addEventListener("scroll", function() {
    var navBar = document.querySelector('nav');
    var windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
})


AOS.init();


$(document).ready(function() {

    $("#tabs .dots .dot:not(:first)").addClass("inactive");
    $('.second-wrapper').hide();
    $('.second-wrapper:first').show();
    
    $("#tabs .dots .menu").click(function(){
      var t = $(this).attr("id");
      var dot = $(this).closest(".dots").find(".dot");

      // $(".second-wrapper").effect("slide", {
      //   direction: 'right',
      // }, 'slow');

      if(dot.hasClass("inactive")){
        $(".dot").addClass("inactive");
        dot.removeClass("inactive");
        
        $(".second-wrapper").hide();
        $("#" + t + "C").show().effect("slide", {
          direction: 'left',
        }, 'slow');
      }
    })
  });


