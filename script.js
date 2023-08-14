const defaultSongBox =      document.getElementById("defaultSongBox");
const audioElement =       new Audio("songlist/08.mp3");
const audioSource =        document.getElementById("audioSource");
const songListContainer =  document.getElementById("songlistbox");
const lyricsContainer =    document.getElementsByClassName("lyricsContainer");
const songList = [
  { title: "song13", src: "songlist/08.mp3" },
  { title: "song12", src: "songlist/08.mp3" },
  { title: "song11", src: "songlist/08.mp3" },
  { title: "song10", src: "songlist/08.mp3" },
  { title: "song9", src: "songlist/09.mp3" },
  { title: "song8", src: "songlist/08.mp3" },
  { title: "song7", src: "songlist/07.mp3" },
  { title: "song6", src: "songlist/06.mp3" },
  { title: "song5", src: "songlist/05.mp3" },
  { title: "song4", src: "songlist/04.mp3" },
  { title: "song3", src: "songlist/03.mp3" },
  { title: "song2", src: "songlist/02.mp3" },
  { title: "song1", src: "songlist/01.mp3" },
];
function createSongBox(song) {
  const newSongBox = document.createElement("div");
  newSongBox.className = "songbox";
  newSongBox.innerHTML = `<p>${song.title}</p2>`;
  let x = 0;

  newSongBox.addEventListener("click", async () => {
    const songName = document.getElementById("songName");
    const imageboxtext = document.getElementById("imageboxtext");
    songName.innerHTML = song.title;
    audioElement.src = song.src;

    // // Load lyrics from the text file and display in the lyrics container
    // const lyricsResponse = await fetch(song.lyricsPath);
    // const lyricsText = await lyricsResponse.text();
    // imageboxtext.innerHTML = lyricsText.replace(/\n/g, "<br>");

    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.load();
      audioElement.currentTime = x;
      audioElement.play();
    } else {
      audioElement.load();
      audioElement.play();
      x = audioElement.currentTime;
    }
  });

  songListContainer.insertBefore(newSongBox, defaultSongBox.nextSibling);
}

function addDefaultSongContent() {
  // const defaultSong = {
  //   title: "song 0 ",
  //   src: "songlist/09.mp3",
  // };
  // defaultSongBox.innerHTML = `${defaultSong.title}`;
  defaultSongBox.innerHTML = songList[0].title;

  defaultSongBox.addEventListener("click", () => {
    audioElement.src = songList[0].src;
    // songName.innerHTML = "Raaz aankhen teri";
    songName.src = songList[0].title;
    // imageboxtext.innerHTML = defaultSong.lyrics.replace(/\n/g, "<br>"); // Replace newline characters with line breaks

    audioElement.load();
    audioElement.play();
  });
}

function addSongBoxes(songList) {
  addDefaultSongContent();
  songList.forEach((song) => {
    createSongBox(song);
  });
}

addSongBoxes(songList);
let playsongImage = document.getElementById("playbutton");

function changeImage(image) {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    image.src = "pause.png";
    playsongImage.src = "pause.png";
  } else {
    audioElement.pause();
    image.src = "play.png";
    playsongImage.src = "play.png"; // Update playsong image
  }
}500;

const forwardbutton = document.getElementById("forward");
const backwardbutton = document.getElementById("backward");
const playbutton = document.getElementById("playbutton");
let progressbar = document.getElementById("progressbar");
let isSeeking = false;

function updateProgressBar() {
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressbar.value = progress;
}
// Event listener to continuously update the progress bar during audio playback
audioElement.addEventListener("timeupdate", () => {
  if (!isSeeking) {
    updateProgressBar();
  }
});
// Event listener to handle seeking when the progress bar is interacted with
progressbar.addEventListener("input", () => {
  isSeeking = true;
  const seekTime = (progressbar.value / 100) * audioElement.duration;
  audioElement.currentTime = seekTime;
});
// Event listener to handle seeking completion
progressbar.addEventListener("mouseup", () => {
  isSeeking = false;
  updateProgressBar(); // Update progress bar once seeking is completed
});
let x = 0;
function backseek() {
  x = audioElement.currentTime - 10;
  audioElement.currentTime = x;
  updateProgressBar();
}
function forwardseek() {
  let y = 0;
  y = audioElement.currentTime + 10;
  audioElement.currentTime = y;
  updateProgressBar();
}
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
let songduration = document.getElementById("songduration");
function duration() {
  currentduration.innerHTML = formatTime(audioElement.currentTime);
  songduration.innerHTML = formatTime(audioElement.duration);
}
const durationUpdate = setInterval(duration, 500);

const volumeSlider = document.getElementById("volumeSlider");

function adjustVolume(change) {
  const newVolume = audioElement.volume + change / 100;
  audioElement.volume = Math.min(1, Math.max(0, newVolume));
  volumeSlider.value = audioElement.volume * 100; // Update the volume slider value
}
// Event listener to handle volume adjustment when the volume slider is interacted with
volumeSlider.addEventListener("input", () => {
  const newVolume = volumeSlider.value / 100;
  audioElement.volume = newVolume;
  if (volumeSlider.value > 0) {
    mutebutton.src = "unmute2.png";
  } else {
    mutebutton.src = "mute.jpg";
  }
});
// mute unmute button
let mutebutton = document.getElementById("mutebutton");
let y = 0.5;
mutebutton.addEventListener("click", () => {
  if (volumeSlider.value > 0) {
    audioElement.volume = 0;
    volumeSlider.value = 0;
    mutebutton.src = "mute.jpg";
  } else {
    volumeSlider.value = 50;
    audioElement.volume = 0.5;
    mutebutton.src = "unmute2.png";
  }
});
// const audioPlayer = document.getElementById('audioPlayer');
const nextButton = document.getElementById('nextButton');

// const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // List of song URLs
let currentSongIndex = 0;

nextButton.addEventListener("click", ()=> {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    audioElement.src = songList[currentSongIndex].src;
    audioElement.play();
    changeImage(nextButton);
    songName.innerHTML = songList[currentSongIndex].title;

});