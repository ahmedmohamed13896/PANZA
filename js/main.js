$(document).ready(function(){
    $(window).scroll(function(){
        var navbar=$(".navbar-inverse");
        if($(window).scrollTop()>54.9653)
        {
          $(".navbar-inverse").css("background-color","rgba(0,0,0,0.8)");
        }
        else{
          $(".navbar-inverse").css("background-color","rgba(200,200,200,0.3)");
        }

    });
    $(".navbar-toggle").click(function(){
        $(".navbar-inverse").css("background-color","rgba(0,0,0,0.8)");
    });
    
});
