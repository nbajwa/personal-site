$(document).ready(function() {
    
   $("#arrow").on('click', function(event) {
      console.log("I reached here!");

   $('html, body').animate({
    scrollTop: $("#about-me").offset().top
}, 1200);

  
});


    var colors = ['#4744AE', '#800F80', '#F5A503', '#3AA1BF'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];

    $('.color-word').css('color', random_color);







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


