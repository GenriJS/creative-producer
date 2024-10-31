document.addEventListener("DOMContentLoaded", () => {

  const playButton = document.querySelector('.showreel__play img');
  const videoPrev = document.getElementById('showreel-prev');
  const videoFull = document.getElementById('showreel-full');
  const header = document.querySelector('.showreel__header');
  const text = document.querySelector('.showreel__text');
  const mask = document.querySelector('.showreel__video-mask');



  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (!isMobile()) {
    videoFull.setAttribute('controls', 'controls');
  }

  playButton.addEventListener('click', () => {
    videoPrev.style.visibility = 'hidden';
    playButton.style.visibility = 'hidden';
    header.style.visibility = 'hidden';
    text.style.visibility = 'hidden';
    mask.style.visibility = 'hidden';

    videoFull.style.display = 'block';
    videoFull.style.zIndex = '2';

    setTimeout(() => {
        videoFull.play();
    }, 100);
  });

  let pauseTimeout;

  function isDesktop() {
      return window.innerWidth > 768;
  }

  videoFull.addEventListener('pause', () => {
      if (isDesktop()) {
          pauseTimeout = setTimeout(() => {
              if (!document.fullscreenElement) {
                  videoPrev.style.visibility = 'visible';
                  playButton.style.visibility = 'visible';
                  header.style.visibility = 'visible';
                  text.style.visibility = 'visible';
                  mask.style.visibility = 'visible';

                  videoFull.style.display = 'none';
                  videoFull.pause();
              }
          }, 1000);
      }
  });

  videoFull.addEventListener('play', () => {
      clearTimeout(pauseTimeout); 
  });

  videoFull.addEventListener('pause', () => {
    if (!isDesktop()) {
      if (!document.fullscreenElement) {
          videoPrev.style.visibility = 'visible';
          playButton.style.visibility = 'visible';
          header.style.visibility = 'visible';
          text.style.visibility = 'visible';
          mask.style.visibility = 'visible';

          videoFull.style.display = 'none';
          videoFull.pause();
      }
    }
});

});