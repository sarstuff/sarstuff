$(function() {

    $('#nav ul li a').click(function(){
        $('html, body').animate({
            scrollTop: $("#"+$(this).data('link')).offset().top
        }, 1000);
    });

});
