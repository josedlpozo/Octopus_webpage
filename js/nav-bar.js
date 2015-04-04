/**
 * Created by josedlpozo on 30/3/15.
 */
$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - $(window).height*0.25;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });
});