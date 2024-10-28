document.addEventListener("DOMContentLoaded", () => {

  const playButton = document.querySelector('.showreel__play img');
  // const backButton = document.getElementById('back-btn');
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

    // backButton.style.display = 'block'; 
    videoFull.style.display = 'block';
    videoFull.style.zIndex = '2';

    setTimeout(() => {
        videoFull.play();
    }, 100);
  });

  // backButton.addEventListener('click', () => {
  //   videoPrev.style.visibility = 'visible';
  //   playButton.style.visibility = 'visible';
  //   header.style.visibility = 'visible';
  //   text.style.visibility = 'visible';
  //   mask.style.visibility = 'visible';

  //   backButton.style.display = 'none'; 
  //   videoFull.style.display = 'none';
  //   videoFull.pause();
  // });

  videoFull.addEventListener('pause', () => {
      if (!document.fullscreenElement) {
          videoPrev.style.visibility = 'visible';
          playButton.style.visibility = 'visible';
          header.style.visibility = 'visible';
          text.style.visibility = 'visible';
          mask.style.visibility = 'visible';

          // backButton.style.display = 'none'; 
          videoFull.style.display = 'none';
          videoFull.pause();
      }
  });

});