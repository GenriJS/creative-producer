document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('.nav__element');

  anchorLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
              history.replaceState(null, null, window.location.href.split('#')[0]);
          }
      });
  });
});
