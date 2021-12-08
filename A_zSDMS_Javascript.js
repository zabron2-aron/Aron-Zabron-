
$(document).ready(function () {
$(".fa-bars").click(function(){
});
$(".fa-user-circle").click(function(){
$(".welcome_areatext").css("margin-top","40%"); 
$("#footer-home").css("height","0%");
});
$(".fa-laptop-house").click(function(){  
$(".welcome_areatext").css("margin-top","-40vh");
$("#footer-home").css("height","0%");
});
$(".fa-sms").click(function(){
$("#footer-home").css("height","fit-content");
});
});



