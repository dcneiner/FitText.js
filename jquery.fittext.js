/*global jQuery */
/*!	
* FitText.js 1.0
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){
	
  $.fn.fitText = function( kompressor, options ) {
  
    return this.each(function(i, el){
      var $this = $(this);                     // store the object
      var compressor = (kompressor || 1) * 10; // set the compressor
        
      options = $.extend( {}, $.fn.fitText.defaults, options );

      // Parse options once for use in the resizer
      options.maxFontSize = parseFloat(options.maxFontSize);
      options.minFontSize = parseFloat(options.minFontSize);
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        el.style.fontSize = Math.max(Math.min($this.width() / compressor, options.maxFontSize), options.minFontSize ) + "px";
      };

      // Call once to set.
      resizer();
				
      // Call on resize. Opera debounces their resize by default. 
      $(window).resize(resizer);
      	
    });

  };

  $.fn.fitText.defaults = {
    minFontSize : Number.NEGATIVE_INFINITY,
    maxFontSize : Number.POSITIVE_INFINITY
  };

})( jQuery );