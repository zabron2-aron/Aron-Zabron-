
$(document).ready(function () {
 $(".fa-bars").click(function(){
   $(".left_sidebar").css("width","22.5%");
   $(".left_sidebar").css("height","90vh");
  });

  $(".fa-user-circle").click(function(){
  $(".welcome_areatext").css("margin-top","10%"); 
  $("#footer-home").css("height","0%");
  
  });

  $(".fa-laptop-house").click(function(){  
    $(".welcome_areatext").css("margin-top","-50vh");
    $("#footer-home").css("height","0%");
   
  
  });
$(".fa-sms").click(function(){
  $("#footer-home").css("height","fit-content");
  $(".left_sidebar").css("height","fit-content");
  
});

});



