$(function() {
	//スライドインのスピード
    var SlideIn = 1200;
    $('.animation').each(function(i){
        $(this).delay(i*(SlideIn)).css({display:'block',opacity:'0',top:'0'}).animate({opacity:'1',top:'30', transition: '2.5s'});
    });
});

