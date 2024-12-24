// Selecteer alle video's
const video1 = document.getElementById("video1");
const bartVideo = document.getElementById("bartVideo");
const video2 = document.getElementById("video2");

// Helperfunctie om naar de volgende video te gaan
function playNextVideo(currentVideo, nextVideo) {
    currentVideo.classList.add("hidden"); // Verberg huidige video
    nextVideo.classList.remove("hidden"); // Toon volgende video
    nextVideo.play(); // Start de volgende video automatisch
}

// Eventlisteners voor het einde van elke video
video1.addEventListener("ended", () => playNextVideo(video1, bartVideo));
bartVideo.addEventListener("ended", () => playNextVideo(bartVideo, video2));

function playNextVideo(currentVideo, nextVideo) {
    currentVideo.classList.add("hidden");
    nextVideo.classList.remove("hidden");
    if (nextVideo.requestFullscreen) {
        nextVideo.requestFullscreen();
    }
    nextVideo.play();
}