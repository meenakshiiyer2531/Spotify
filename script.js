// let audioElement = new Audio('song.mp2');
// audioElement.play();
// let audio = document.getElementById("");
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// // Play audio when the Play button is clicked
// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('previous');
//         masterPlay.classList.add('fa-pause-circle');

//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');

//     }
// })

// Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
//     myProgressBar.value = progress;
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();

//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `song.mp3`;

//         audioElement.currentTime = 0;
//         audioElement.play();

//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     songIndex = 0
//     audioElement.src = `song.mp3`;

//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

// })

// document.getElementById('previous').addEventListener('click', ()=>{

//         songIndex = 0

//     audioElement.src = `song.mp3`;

//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// })

const audio = document.getElementById("myAudio");
const playButton = document.getElementById("masterPlay");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const progressBar = document.getElementById("myprogressbar");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.replace("fa-play-circle", "fa-pause-circle");
  } else {
    audio.pause();
    playButton.classList.replace("fa-pause-circle", "fa-play-circle");
  }
});

previousButton.addEventListener("click", () => {
  // Implement logic for going to the previous track
  audio.currentTime = 0;
  audio.play();
  playButton.classList.replace("fa-play-circle", "fa-pause-circle");
});

nextButton.addEventListener("click", () => {
  // Implement logic for going to the next track
  audio.currentTime = 0;
  audio.play();
  playButton.classList.replace("fa-play-circle", "fa-pause-circle");
});

// Update the progress bar as the audio plays
audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

// Handle user interaction with the progress bar
progressBar.addEventListener("input", () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
