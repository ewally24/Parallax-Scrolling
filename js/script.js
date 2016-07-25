$(document).ready(function() {
	$(window).bind('scroll',function(e){
    	parallaxScrolling();
    });
    
});

function parallaxScrolling() {
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top', (0-(scrolled *.25)) + 'px');
}