$(document).ready(function() {
    $('.nav__element').on('click', function(event) {
      event.preventDefault();
      
      const targetId = $(this).attr('href');
      const targetElement = $(targetId);
  
      if (targetElement.length) {
        $('html, body').animate({
          scrollTop: targetElement.offset().top
        }, 1000);
      }
    });
  });