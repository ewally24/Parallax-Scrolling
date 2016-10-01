$(document).ready(function() {
	$(window).bind('scroll',function(e){
    	parallaxScrolling();
    });
    
});

function parallaxScrolling() {
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top', (0-(scrolled *.75)) + 'px'); // Front layered images you want to move slowest
	$('#parallax-bg2').css('top', (0-(scrolled*.5)) +'px');
	$('#parallax-bg3').css('top', (0-(scrolled*.25)) + 'px');
}