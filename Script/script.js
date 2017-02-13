$(document).ready(function(){
	$('.hamburger-icon').on('click',function(){
		$(this).toggleClass('open');
	});


	$('.hamburger-icon').on('click', function(){
		$('.mobile-nav').toggleClass('open');
	});
});
