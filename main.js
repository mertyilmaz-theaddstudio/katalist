$.easing.smoothmove = function (x, t, b, c, d) {
return -c *(t/=d)*(t-2) + b;
 }; 


$(".slogan-container").bind('mousemove', function(e){

 $(this).animate({
   'background-position-x': e.pageX / 9,
   'background-position-y': e.pageY / 9 
 }, {queue:false,duration:200,easing:'smoothmove'});

});    
 
