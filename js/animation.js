$(function(){
      $(".div1").fadeIn();
      $(".div2").fadeIn(2000);
      $(".div3").fadeIn(3000); 
      $(".web2").fadeIn(2000);

      
      $(".web2").hover(function(){
            $(this).css("background-color","#fc4242");
            }, function(){
            $(this).css("background-color", "#0009");
          });
});