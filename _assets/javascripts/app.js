//= require vendor/jquery
//= require vendor/center
//= require vendor/smart-resize
//= require vendor/jquery.touchclick
//= require vendor/bootstrap-tab
//= require vendor/unslider

function scroll(target, id, dur) {
  $('html, body').stop().animate({
    'scrollTop': target
  }, dur, 'swing', function() {
    if (id) window.location.hash = id;
  })
};

$(document).ready(function() {
  $('[data-toggle="tab"]').on('shown', function(e) {
    window.location.hash = $(e.target).attr("href");
    e.preventDefault();
  });

  var a = (window.location.hash) ? $('[href=' + window.location.hash + ']') : $('[data-toggle="tab"]:first') ;
  if (window.location.hash) {
    a.tab('show');
  }
});

Sidebar = {
  el: $(".sidebar"),
  triggerEl: $(".toggle-sidebar"),
  containerEl: $(".container"),

  init: function() {
    this.render();
    this.bind();
  },

  render: function() {
    if ( $('body').width() < 1140 ) {
      this.el.prependTo($('body')).css('height', window.innerHeight + 60);
    } else {
      $('header .wrapper').append(this.el.removeAttr('style'));
    }
  },

  toggle: function() {
    $('body').toggleClass('show-sidebar'); 
  },

  bind: function() {
    var self = this;
    this.triggerEl.on('click', function() { self.toggle(); });
    $(window).smartresize(function() { self.render(); });
  },

  checkAndHideSidebar: function(e) {
    if ( !$(e.target).closest(this.triggerEl).length && $('body').hasClass('show-sidebar') ) {
      this.toggle();
    }
  }
};

function toggleFixedHeader(e) {
  var header = $('header');

  scrollPos = $(window).scrollTop();

  if (scrollPos > 0) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
};

$(document).ready(function() {

  Sidebar.init();

  /* PREVENT SCROLLING WHILE SIDENAV OPEN */
  
  $('.container').bind('touchmove',function(e){
    if($('body').hasClass('show-sidebar')){
      e.preventDefault();
    };
  });

  $(window).scroll(function() {
    toggleFixedHeader();
  });
  

  /* MODAL STUFF */

  var card = $('<div/>').addClass('card');
  var bg = $('<div/>').addClass('card-bg');
  var close = $('<a/>').addClass('close').text('×');
  var cardContainer = $('<div/>').addClass('modal').append(bg).append(card);

  $('body').append(cardContainer);

  $('.person').on('click', function(e) {
    e.preventDefault();

    var modal = $('.modal');

    modal.find('.card').html( $(this).html() ).prepend(close);
    modal.show().find('.card').center();
    modal.addClass('show').animate({'opacity': 1}, 300);
  });

  $('.modal').on('click', '.card-bg, .close', function(e) {
    e.preventDefault();
    $('.modal').animate({'opacity': 0}, 300, function() { $(this).toggleClass('show').hide(); });
  });
});