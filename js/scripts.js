$(document).ready(function(){

    $('.pro-cards .card').hover(function(){
        $(this).children('button').css("display", "block");
    }, function(){
        $(this).children('button').css("display", "none");
    })
});