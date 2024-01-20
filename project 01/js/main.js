$(document).ready(function(){

  // mainmenu
  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

  // slider-active
    $('.slider-active').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

  // testimonial-active
    $('.testimonial-active').slick({
      infinite: true,
      arrows:false,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

      // brand-active
      $('.brand-active').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });
  



      // counter
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})