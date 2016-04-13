$(document).ready(function() {
var stickyNavTop = $('.nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});




var hotItem = document.getElementById('hot1')


$(document).ready(function() {
	$('.team').click(function() {
		for (var i = 0; i < hotItem.length; i++) {
			hotItem[i].className = 'cool';
		};
	});
});
