import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');


const options = {
  width: 640,
  loop: true
};


const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '720p',
  width: 640,
});


const CURRENT_TIME_KEY = 'videoplayer-current-time';
const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);
