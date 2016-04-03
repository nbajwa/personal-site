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

        //settings
        var fadeSpeed = 200, fadeTo = 0.5, topDistance = 30;
        var topbarME = function() { $('.block-menu').fadeTo(fadeSpeed,1); }, topbarML = function() { $('.block-menu').fadeTo(fadeSpeed,fadeTo); };
        var inside = false;
        //do
        $(window).scroll(function() {
            position = $(window).scrollTop();
            if(position > topDistance && !inside) {
                //add events
                topbarML();
                $('.block-menu').bind('mouseenter',topbarME);
                $('.block-menu').bind('mouseleave',topbarML);
                inside = true;
            }
            else if (position < topDistance){
                topbarME();
                $('.block-menu').unbind('mouseenter',topbarME);
                $('.block-menu').unbind('mouseleave',topbarML);
                inside = false;
            }
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


