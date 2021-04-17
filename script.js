// MUSIC PLAYER

const musicBox = document.querySelector(".music-box");
const songCover = document.querySelector("#song-cover");
const musicText = document.querySelector(".music-text");
const songTitle = document.querySelector("#song-title");
const audio = document.querySelector("#audio");
const progressBar = document.querySelector(".progress-bar");
const progressBarContainer = document.querySelector(".progress-bar-container");
const previousButton = document.querySelector("#previous");
const playPauseButton = document.querySelector("#play-pause");
const nextButton = document.querySelector("#next");

const songTitles = ["Energy", "Creativeminds", "Sunny", "Tomorrow"];

// 0 is the first song index in songTitles array
let songIndex = 0;

// Initial song loading
loadSong(songTitles[songIndex]);

// Updating song info
function loadSong(song) {
  songTitle.innerText = song;
  audio.src = `/audio/${song}.mp3`;
  songCover.src = `/img/${song}.jpg`;
}

function playSong() {
  musicBox.classList.add("playing");
  playPauseButton.style.background =
    "url(/img/pause-solid.svg) no-repeat center";
  audio.play();
}

function pauseSong() {
  musicBox.classList.remove("playing");
  playPauseButton.style.background =
    "url(/img/play-solid.svg) no-repeat center";
  audio.pause();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 0;
  }
  loadSong(songTitles[songIndex]);
  playSong();
}

// There are 4 songs but it's an array so last song has index = 3;
const numberOfSongs = songTitles.length - 1;

function nextSong() {
  songIndex++;
  if (songIndex > numberOfSongs) {
    songIndex = numberOfSongs;
  }
  loadSong(songTitles[songIndex]);
  playSong();
}

// using HTML audio properties to update song progress bar
function updateProgressBar(updatingProgress) {
  const { duration, currentTime } = updatingProgress.srcElement;
  const progressPercentage = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

function changeProgress(changingProgress) {
  const progressBarWidth = this.clientWidth;
  // Checking the exact place of click on progress bar
  const clickPosition = changingProgress.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickPosition / progressBarWidth) * duration;
}

// Changing between playing and pausing when clicking play button
playPauseButton.addEventListener("click", () => {
  const songIsPlaying = musicBox.classList.contains("playing");

  if (songIsPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Changing songs
previousButton.addEventListener("click", () => {
  previousSong();
});

nextButton.addEventListener("click", () => {
  nextSong();
});

// Progress bar
audio.addEventListener("timeupdate", updateProgressBar);
progressBarContainer.addEventListener("click", changeProgress);

// Playing next song when the current one ends
audio.addEventListener("ended", nextSong);

// THEMES
const menuButton = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const themeOne = document.querySelector(".theme-1");
const themeTwo = document.querySelector(".theme-2");
const themeThree = document.querySelector(".theme-3");
const root = document.documentElement;

// Displaying menu
menuButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
  menuButton.classList.toggle("rotated");
});

// Changing themes
themeOne.addEventListener("click", () => {
  root.style.setProperty("--color1", "#355C7D");
  root.style.setProperty("--color2", "#C06C84");
  root.style.setProperty("--color3", "#C06C84");
  root.style.setProperty("--color4", "#242738");
  root.style.setProperty("--color5", "#213546");
  root.style.setProperty("--color6", "#C06C84");
  root.style.setProperty("--color7", "#fff");
  root.style.setProperty("--color8", "#00000040");
  root.style.setProperty("--color9", "#C06C84");
});

themeTwo.addEventListener("click", () => {
  root.style.setProperty("--color1", "#bad7f2");
  root.style.setProperty("--color2", "#f2bac9");
  root.style.setProperty("--color3", "#ebdce8");
  root.style.setProperty("--color4", "#ffffff66");
  root.style.setProperty("--color5", "#f2bac966");
  root.style.setProperty("--color6", "#fff");
  root.style.setProperty("--color7", "#000");
  root.style.setProperty("--color8", "#00000040");
  root.style.setProperty("--color8", "#bad7f2");
});

themeThree.addEventListener("click", () => {
  root.style.setProperty("--color1", "#00DBDE");
  root.style.setProperty("--color2", "#FC00FF");
  root.style.setProperty("--color3", "#5de6e9be");
  root.style.setProperty("--color4", "#e286e6b0");
  root.style.setProperty("--color5", "#d252d4a8");
  root.style.setProperty("--color6", "#fff");
  root.style.setProperty("--color7", "#000");
  root.style.setProperty("--color8", "#00000040");
  root.style.setProperty("--color8", "#00DBDE");
});
