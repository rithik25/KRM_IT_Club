 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok12').offset().top }, 'slow');
      return false;
    });
  });