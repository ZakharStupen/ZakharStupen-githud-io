$(document).ready(function(){
    $('.plus').on('click',function(){
    	$('.checkbox').css('display','block');
    	$(this).hide();
    	$('.angle-up').show();
    })

    $('.angle-up').on('click',function(){
    	$('.checkbox').hide();
    	$(this).hide();
    	$('.plus').show();
    })

    $('.plus1').on('click',function(){
    	$('.checkbox1').css('display','block');
    	$(this).hide();
    	$('.angle-up1').show();
    })

    $('.angle-up1').on('click',function(){
    	$('.checkbox1').hide();
    	$(this).hide();
    	$('.plus1').show();
    })


    	 $('.plus2').on('click',function(){
    	$('.checkbox2').css('display','block');
    	$(this).hide();
    	$('.angle-up2').show();
    })

    $('.angle-up2').on('click',function(){
    	$('.checkbox2').hide();
    	$(this).hide();
    	$('.plus2').show();
    })

        $('.plus3').on('click',function(){
    	$('.checkbox3').css('display','block');
    	$(this).hide();
    	$('.angle-up3').show();
    })

    $('.angle-up3').on('click',function(){
    	$('.checkbox3').hide();
    	$(this).hide();
    	$('.plus3').show();
    })



     $('.plus4').on('click',function(){
    	$('.checkbox4').css('display','block');
    	$(this).hide();
    	$('.angle-up4').show();
    })

    $('.angle-up4').on('click',function(){
    	$('.checkbox4').hide();
    	$(this).hide();
    	$('.plus4').show();
    })


     $('.color1').on('click',function(){
        $('.button1').show();
        $('.pink').css('display','inline-block');
        $('.white').hide();
        $('.green').hide();
      
    })    
      
         $('.button').on('click',function(){
        $('.button1').hide();
        $('.pink').css('display','inline-block');
        $('.white').hide();
        $('.green').hide();
      
    })  

       $('.color2').on('click',function(){
        $('.button2').show();
        $('.pink').hide();
        $('.white').css('display','inline-block');
        $('.green').hide();
      
    })    
      
         $('.button').on('click',function(){
        $('.button2').hide();
        $('.pink').hide();
        $('.white').css('display','inline-block');
        $('.green').hide();
      
    })    


       $('.color3').on('click',function(){
        $('.button3').show();
        $('.pink').hide();
        $('.white').hide();
        $('.green').css('display','inline-block');
      
      
    })    
      
         $('.button').on('click',function(){
        $('.button3').hide();
        $('.pink').hide();
        $('.white').hide();
        $('.green').css('display','inline-block');
      
    })     


//кнопки с размером


 $('.li_zs').on('click',function(){
        $(this).css('color','#455FA0');
      
    }) 


//кнопки добавления в корзину
   $('.knopka_left').on('click',function(){
        $(this).css('background','#455FA0');
        $(this).css('color','white');
        $('.knopka_right').css('background','white')
        $('.knopka_right').css('color','black')

      
    }) 


   $('.knopka_right').on('click',function(){
        $(this).css('background','#455FA0');
        $(this).css('color','white');
        $('.knopka_left').css('background','white')
        $('.knopka_left').css('color','black')

      
    })




   //выезжающие меню
   $('.gamburger').on('click',function(){
        $(this).hide();
        $('.krest').show();
        $('.menu').css('left','368px');
        
      })


     $('.krest').on('click',function(){
        $(this).hide();
        $('.gamburger').show();
        $('.menu').css('left','-200px');
        
      })

    //последние кнопки в карточке товара

      $('.first_button').on('click',function(){
        $(this).css('border-bottom-color','#455FA0',);
        $(this).css('border-bottom-style','solid');
        $(this).css('border-bottom-width','2px');
        $(this).css('font-weight','500');
        $('.last_button_zs').css('font-weight','normal');
        $('.last_button_zs').css('border','none');
        $('.last_text1').show();
        $('.last_text2').hide();

        })


        $('.last_button_zs').on('click',function(){
        $(this).css('border-bottom-color','#455FA0',);
        $(this).css('border-bottom-style','solid');
        $(this).css('border-bottom-width','2px');
        $(this).css('font-weight','500');
        $('.first_button').css('font-weight','normal');
        $('.first_button').css('border','none');
        $('.last_text1').hide();
        $('.last_text2').show();
        })



//карусель от слик
        $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});


//карусель для карты товара 

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});




//модальное окно

 $('.men_modal').on('click',function(){
        $('.modal').show();
        });


 $('.close_modal').on('click',function(){
        $('.modal').hide();
        });


 $('.modal').on('click',function(){
        $('.this').hide();
        });








//карусель для главной страницы



    })

 