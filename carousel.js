
$(document).ready(function(){

  $('#previous_frame').on("click",function(){
    var $last = $('.frames li:last-child')
    $('.frames').prepend($last)
    $last.css({left:'-33%'})
    $last.animate({left:'0%'})
  });
 
  $('#next_frame').on("click",function(){
    var $first = $('.frames li:first-child');
    $('.frames').append($first)
    $first.css({right:'80%'})
    $first.animate({right:'0%'})
  });

});