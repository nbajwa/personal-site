$(document).ready(function() {
    
   $("#arrow").on('click', function(event) {
      console.log("I reached here!");

   $('html, body').animate({
    scrollTop: $("#about-me").offset().top
}, 1000);

  
});

});
