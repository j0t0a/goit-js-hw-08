import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storageItemTitle = "videoplayer-current-time"

const seconds = localStorage.getItem(storageItemTitle)

player.setCurrentTime(seconds).then(function(seconds) {
}).catch(function(error) {
  switch (error.name) {
    case 'RangeError':
      break;

    default:
      break;
  }
});


player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});

function onTimeUpdate(time){
  localStorage.setItem(storageItemTitle, time.seconds)
}

player.on('timeupdate', onTimeUpdate);