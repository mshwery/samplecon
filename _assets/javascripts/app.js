//= require vendor/jquery
//= require vendor/jquery.sticky
//= require vendor/smart-resize

$("a").click(function(e) {
  var page = this.hash,
      target = $(page),
      h = $('.navigation').outerHeight() - 2;

  if (target.length) {
    e.preventDefault();
    $('html, body').stop().animate({
        'scrollTop': target.offset().top - h
    }, 900, 'swing', function () {
        window.location.hash = page;
    });
  }
});

$(document).ready(function(){
  var hash = window.location.hash,
      currentId = hash.substring(hash.indexOf("#") + 1),
      viewportHeight = $('body').height();

  if (currentId.length) {
    $('html, body').scrollTop(0);
    $('[href='+hash+']').trigger('click');
  }

  var header = $('.navigation');

  setTimeout(function() { 
    header.sticky({
      className: 'fixed',
    });
  }, 500);

  $(window).smartresize(function(){
    var h = header.outerHeight();

    header.parent('.sticky-wrapper').css('min-height', h);
  });
});