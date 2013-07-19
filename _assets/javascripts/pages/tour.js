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