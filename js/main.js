$(document).ready(function(){


    // header sticky 
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });


    // testimonial slider 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText: ['<img src="assets/icon/left_arrow.png" alt="left">', '<img src="assets/icon/right_arrow.png" alt="right"></img>'],
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});


    


    