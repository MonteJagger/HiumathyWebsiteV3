$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	});

	// Nav bar
	$('.nav-home').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.main').offset().top
		}, 1000);
	});

	$('.nav-about').on('click', function(){
		$('html, body').animate({
			scrollTop: $(".supporting").offset().top
		}, 1000);
	});

	$('.nav-port').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.portfolio').offset().top
		}, 1000);
	});

	$('.nav-contact').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.logo_box').offset().top
		}, 1000);
	});

	// mobile nav
	$('.mnav-home').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.main').offset().top
		}, 1000);

		$('.hamburger-icon').toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	});

	$('.mnav-about').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.supporting').offset().top
		}, 1000);

		$('.hamburger-icon').toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	});

	$('.mnav-port').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.portfolio').offset().top
		}, 1000);

		$('.hamburger-icon').toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	});

	$('.mnav-contact').on('click', function(){
		$('html, body').animate({
			scrollTop: $('.logo_box').offset().top
		}, 1000);

		$('.hamburger-icon').toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	});
});
