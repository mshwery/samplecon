/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.1.1
*
* Requires: jQuery 1.2.6+
*/
;( function( $, window ){
  var get_win_size = function (){
    if( window.innerWidth != undefined ){
      return [ window.innerWidth, window.innerHeight ];
    }else{
      var B = document.body;
      var D = document.documentElement;

      return [ Math.max( D.clientWidth, B.clientWidth ), Math.max( D.clientHeight, B.clientHeight )];
    }
  }

  $.fn.center = function( opt ) {
    var $w        = $( window ); // cache gobal
    var scrollTop = $w.scrollTop();

    return this.each( function(){
      var $this = $( this ); // cache $( this )

      // merge user options with default configs
      var configs = $.extend({
        resize        : true
      }, opt );

      var centerize = function(){
        var x = $this.outerWidth();
        var y = Math.min($this.outerHeight(), $('body').outerHeight());

        $this.css({
          'margin-left' : -(x/2),
          'margin-top'  : -(y/2)
        });
      };

      // apply centerization
      centerize();
      if( configs.resize === true ) $w.resize( centerize );
    });
  };
})( jQuery, window );