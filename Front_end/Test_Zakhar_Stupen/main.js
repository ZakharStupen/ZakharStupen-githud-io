$(document).ready(function(){
    $('body, html').animate({
        scrollTop: top
    }, 1000);




   $('#right_first').on('click',function(){
       $('.gallery').css('left','-371px');
   });


   $('#right_second').on('click',function(){
    $('.gallery').css('left','-371px');
});



$('#right_third').on('click',function(){
    $('.gallery').css('left','-371px');
});
   
   

   $('#left_first').on('click',function(){
    $('.gallery').css('left','0px');
});


$('#left_second').on('click',function(){
    $('.gallery').css('left','0px');
});



$('#left_third').on('click',function(){
    $('.gallery').css('left','0px');
});

$('.check').find('li').on('click',function(){
    if ($(this).css('opacity' == '0.2'){
    $(this).css('list-style-image','url(images/check_2.svg)');
    $(this).css('opacity','1');
    else{
        $(this).css('list-style-image','url(images/check.svg)');
    $(this).css('opacity','0.2');
    }
    }
});

});


