import Player from '@vimeo/player';
import * as _ from 'lodash';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', _.throttle(timeCount, 1000));

function timeCount(currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
