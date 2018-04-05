/*
 * Maintain / Keep scroll position after post-back / postback / refresh. Just include plugin (no need for cookies)
 * 
 * Author: Evalds Urtans
 * Website: http://www.evalds.lv
 */

(function($){
	window.onbeforeunload = function(e){		
        window.name += ' [' + $(window).scrollTop().toString() + '[' + $(window).scrollLeft().toString();
	};
	
	$.maintainscroll = function() {
		if(window.name.indexOf('[') > 0)
		{
			var parts = window.name.split('[');			
			window.name = $.trim(parts[0]);
			window.scrollTo(parseInt(parts[parts.length - 1]), parseInt(parts[parts.length - 2]));
		}		
	};	
	$.maintainscroll();
})(jQuery);
