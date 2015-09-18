/**
 * EqualStature v1.0.0 - Equal Natural Heights
 * http://alexhowes.co.uk
 *
 * Equal (adj) - having the same mathematical value
 * Stature (noun) - a person's natural height
 *  ~ EqualStature matches the height of elements using the tallest (natural) height
 * 
 * Copyright 2015, Alex Howes - @aihowes - http://alexhowes.co.uk
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
(function($) {

	$.fn.equalStature =  function(action) {
		var $this = $(this);

		action = action || 'build';

		if (action === 'build') {
			$this.css({ 
				'min-height' : Math.max.apply(Math, $this.map(function() { 
					var childrenHeight = 0;
					$(this).children().each(function(){
					    childrenHeight += $(this).outerHeight(true);
					});

					return childrenHeight + parseInt($(this).css('padding-top'),10) + parseInt($(this).css('padding-bottom'),10);
				})) 
			});
		}

		if (action === 'destroy') {
			$this.css({ 'min-height' : 0})
		}
	}

})(jQuery);