const audioContainer = document.querySelector('#audioContainer');
const playBtn = document.querySelector('.js-playBtn');
const stopBtn = document.querySelector('.js-stopBtn')


function playAudio() {
  audioContainer.volume = 1;
  audioContainer.loop = true;
  audioContainer.play();  
}

function stopAudio() {
  audioContainer.pause();  
}


function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `bgm/bgm.mp3`;
  audioContainer.load();
  playAudio();
}


playBtn.addEventListener('click', loadAudio);
stopBtn.addEventListener('click', stopAudio);