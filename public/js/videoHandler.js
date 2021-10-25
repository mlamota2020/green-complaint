var video1 = document.getElementById('video1');

Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
   studio.video.Reporter.attach('my_video', video1);
});
    
var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');
var muteBtn = document.getElementById('mute-btn');
var unmuteBtn = document.getElementById('unmute-btn');
var stopBtn = document.getElementById('stop-btn');
var replayBtn = document.getElementById('replay-btn');

playBtn.addEventListener('click', pausePlayHandler, false);
pauseBtn.addEventListener('click', pausePlayHandler, false);
muteBtn.addEventListener('click', muteUnmuteHandler, false);
unmuteBtn.addEventListener('click', muteUnmuteHandler, false);
stopBtn.addEventListener('click', stopHandler, false);
replayBtn.addEventListener('click', replayHandler, false);

function pausePlayHandler(e) {
   if (video1.paused) {
       video1.play();
       pauseBtn.style.display = 'flex';
       playBtn.style.display = 'none';
   } else {
       video1.pause();
       pauseBtn.style.display = 'none';
       playBtn.style.display = 'flex';
   }
}

function muteUnmuteHandler(e) {
   if (video1.volume == 0.0) {
       video1.volume = 1.0;
       muteBtn.style.display = 'none';
       unmuteBtn.style.display = 'flex';
   } else {
       video1.volume = 0.0;
       muteBtn.style.display = 'flex';
       unmuteBtn.style.display = 'none';
   }
}

function stopHandler(e) {
   video1.currentTime = 0;
   video1.pause();
}

function replayHandler(e) {
   video1.currentTime = 0;
   video1.play();
}