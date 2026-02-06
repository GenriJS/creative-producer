function prevVolume(videoID, volumeRatio) {
        const video = document.getElementById(videoID);
        video.volume = volumeRatio;
}

prevVolume('showreel-full', 0.4);
prevVolume('case-video-1', 0.3);
prevVolume('case-video-2', 1);
prevVolume('case-video-7', 1);
prevVolume('case-video-8', 0.4);