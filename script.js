console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio('AHP.mp3');
let masterPlay = document.getElementById('master-Play');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    { songName: "Aarambh Hai Prachand", filePath: "song/AHP.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aarambh Hai Prachand", filePath: "song/AHP.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aarambh Hai Prachand", filePath: "song/AHP.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aarambh Hai Prachand", filePath: "song/AHP.mp3", coverPath: "covers/1.jpg" },
    { songName: "Aarambh Hai Prachand", filePath: "song/AHP.mp3", coverPath: "covers/1.jpg" },
]

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity = 0;
    }
})

// Listen To events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})