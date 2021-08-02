$(document).ready(function(){
	$('.hamburger-icon').on('click', toggleMenu );
	
	// mobile nav
	$('.mnav-home').on('click', toggleMenu );

	$('.mnav-about').on('click', toggleMenu );

	$('.mnav-port').on('click', toggleMenu );

	$('.mnav-contact').on('click', toggleMenu );

	function toggleMenu() {
		$('.hamburger-icon').toggleClass('open');
		$('.mobile-nav').toggleClass('open');
		$('.mobile-nav li').toggleClass('open');
	}
});
