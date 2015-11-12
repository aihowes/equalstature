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
	var topHeight;
	var action;
	var elements;

	 var equalStature = $.fn.equalStature = function(action) {
	 	elements = $(this);
		action = action || 'build';

		if (action === 'build') {
			_apply();
		}

		if (action === 'destroy') {
			_clearHeight($(this));
		}
	};

	var _apply = function() {
		topHeight = 0;
		_clearHeight(elements);
		_calcHeight(elements);
		_applyStyles(elements, topHeight);
	};

	var _clearHeight = function(elements) {
		elements.each(function() {
	        $(this).css('min-height', 0);
	    });
	};

	var _calcHeight = function(elements) {
		elements.each(function(){
			if ($(this).children().length > 0) {
				var childrenHeight = 0;
				$(this).children().each(function(){
				    childrenHeight += $(this).outerHeight(true);
				});
				childrenHeight = childrenHeight + parseInt($(this).css('padding-top'),10) + parseInt($(this).css('padding-bottom'),10);
				topHeight = Math.max(topHeight, childrenHeight);
			} else {
				topHeight = Math.max(topHeight, $(this).outerHeight());
			}
		});
	};

	var _applyStyles = function(elements, height) {
		elements.css({ 'min-height' : height });
	};

})(jQuery);