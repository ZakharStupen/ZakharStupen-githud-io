var btn_prev = document.querySelector('#prev_mob');

var btn_next = document.querySelector('#next_mob');

var next = document.querySelector('#next');


var prev = document.querySelector('#prev');

var slider = document.querySelectorAll('.slider')





var images = document.querySelectorAll('.center_gall_mob div')


var i = 0;


btn_prev.onclick = function () {
	images[i].style.display = "none";
   i--;
   if(i < 0){
   	 i=images.length - 1;
   } 
   images[i].style.display = "block";

}



btn_next.onclick = function() {
   images[i].style.display = "none";
   i++;
   if(i >= images.length){
   	 i=0;
   } 
   images[i].style.display = "block";
}



prev.onclick = function () {
	slider[i].style.display = "none";
   i--;
   if(i < 0){
   	 i=slider.length - 1;
   } 
   slider[i].style.display = "flex";

}



next.onclick = function() {
   slider[i].style.display = "none";
   i++;
   if(i >= slider.length){
   	 i=0;
   } 
   slider[i].style.display = "flex";
}



$(document).ready(function() {
   $('#next').click(function() {
     $('#num').html(+$('#num').html()+1);
   });
 });




