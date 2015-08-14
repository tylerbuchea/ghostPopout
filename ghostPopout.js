(function() {
	'use strict';
	var throttle = function(type, name, obj) {
		obj = obj || window;
		var running = false;
		var func = function() {
			if (running) { return; }
			running = true;
			obj.requestAnimationFrame(function() {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};
	throttle ('scroll', 'optimizedScroll');
})();

$(document).ready(function() {
	var popoutWrapper = $('<div id="popoutWrapper"><div id="popoutExit">X</div></div>');

	var popoutContent = $('.read-next-story').first().clone();

	$('body').append( popoutWrapper );
	popoutWrapper.append( popoutContent );

	function scrollListener(ev) {
	  var scrollPos = $(window).scrollTop();
	  var footerPos = $('.post-footer').offset().top;
		if ( scrollPos > footerPos ) {
			popoutWrapper.addClass('active');
		}
	}

	$('#popoutExit').on('click', function() {
		popoutWrapper.removeClass('active');
		window.removeEventListener('optimizedScroll', scrollListener);
	});

	window.addEventListener('optimizedScroll', scrollListener);

});