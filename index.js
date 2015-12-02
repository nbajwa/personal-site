$(document).ready(function() {
    
   $("#arrow").on('click', function(event) {
      console.log("I reached here!");

   $('html, body').animate({
    scrollTop: $("#about-me").offset().top
}, 1200);

  
});

    $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    // Scroll to inline links
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });






});


