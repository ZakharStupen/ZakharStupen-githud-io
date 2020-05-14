$(document).ready(function(){
    $('.menu').on('click',function(){
    	$('.menu_2').css('right','0');
    	})


    $('.close').on('click',function(){
    	$('.menu_2').css('right','-33.3%');
    	})


    $('.search').on('click',function(){
    	$('.modal').show("slow");
    	})

        $('.close_img').on('click',function(){
    	$('.modal').hide("slow");
    	})




    	$('.search_mobile').on('click',function(){
    	$('.modal_mobile').show("slow");
    	})

        $('.close_img_mobile').on('click',function(){
    	$('.modal_mobile').hide("slow");
    	})





    	$('.menu_mobile').on('click',function(){
    	$('.menu_2_mobile').show("slow");
    	})

        $('.close_mobile_2').on('click',function(){
    	$('.menu_2_mobile').hide("slow");
    	})


    	$("mobile_section_8").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


})