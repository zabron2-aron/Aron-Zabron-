
$(document).ready(function () {
 $(".fa-bars").click(function(){
   $(".left_sidebar").css("width","25%").css("height","50%").$(".left_sidemenu_list").css("top","15%");
 
  });

  $(".fa-user-circle").click(function(){
  $(".welcome_areatext").css("margin-top","10%"); 
  $("#footer-home").css("height","0%");
  
  });

  $(".fa-laptop-house").click(function(){  
    $(".welcome_areatext").css("margin-top","-40vh");
    $("#footer-home").css("height","0%");
   
  
  });
$(".fa-sms").click(function(){
  $("#footer-home").css("height","fit-content");
 /* $(".left_sidebar").css("height","fit-content");*/
  
});

});



