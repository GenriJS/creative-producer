function prevVolume(videoID, volumeRatio) {
        const video = document.getElementById(videoID);
        video.volume = volumeRatio;
}

prevVolume('showreel-full', 0.5);
prevVolume('case-video-1', 0.5);
prevVolume('case-video-2', 1);
prevVolume('case-video-3', 1);