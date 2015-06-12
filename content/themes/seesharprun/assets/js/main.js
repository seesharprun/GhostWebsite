
(function($) {

	$(document).ready( function() {

		// init scrollspy
		$('body').scrollspy({ target: '#main-nav' });
		
		// init scroll-to effect navigation, adjust the scroll speed in milliseconds			
		$('#main-nav').localScroll(1000);
		$('#header').localScroll(1000);
        
	});

})(jQuery);