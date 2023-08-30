const ap = new APlayer({
  container: document.getElementById('player'),
  fixed: true,
  autoplay: false, //自动播放
  audio: [{
    name: 'name', //音频名称
    artist: 'artist', //音频艺术家
    url: 'url.mp3', //音频外链
    cover: 'cover.jpg', //音频封面
  }]
});
