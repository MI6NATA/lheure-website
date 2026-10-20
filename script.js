const videos = [
    "videos/mg car.mp4",
    "videos/black car.mp4",
    "videos/race track.mp4",
    "videos/close up red car.mp4",
];
let currentVideo = 0;
const videoPlayer = document.getElementById("hero-video");
videoPlayer.addEventListener("ended", function () {
    currentVideo++;
    if (currentVideo >= videos.length) {
        currentVideo = 0;
    }
    videoPlayer.src = videos[currentVideo];
    videoPlayer.play();
});