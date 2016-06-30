$(window).scroll(function(){
   
    console.log($(this).scrollTop);
    
    if($(this).scrollTop()>=1100){
        $('.one').addClass('animate');
        $('.two').addClass('animate');
        $('.three').addClass('animate');
        $('.four').addClass('animate');
        $('.five').addClass('animate');
    }
    
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});