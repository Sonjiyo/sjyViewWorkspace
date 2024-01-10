$(window).scroll(
   function(){
      if($(this).scrollTop()>50){
         $('header').addClass('on')
         $('#btn-top').addClass('on')
      } else{
         $('header').removeClass('on')
         $('#btn-top').removeClass('on')
      }
      
   }
);
$('.slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3,
   dots:true,

   responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
