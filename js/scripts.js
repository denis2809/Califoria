$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: false,
		nav: false,
		dots: false,
		// autoplay: true,
		// autoplayTimeout: 3000,
		margin: 0,
		nav: true,
		navText: ['', ' '],
		responsive: {
			0: {
				items: 1
			},
		}
	});
});