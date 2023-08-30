const ap = new APlayer({
  container: document.getElementById('player'),
  fixed: true,
  autoplay: false, //自动播放
  audio: [{
    name: '起风了', //音频名称
    artist: '买辣椒也用券', //音频艺术家
    url: 'http://music.163.com/song/media/outer/url?id=1330348068.mp3', //音频外链
    cover: 'https://edu-limu-1.oss-cn-shanghai.aliyuncs.com/songList/songList/%E8%B5%B7%E9%A3%8E%E4%BA%86.png', //音频封面
  }, {
    name: '碎銀幾兩', //音频名称
    artist: '轩东', //音频艺术家
    url: 'http://music.163.com/song/media/outer/url?id=1495845437.mp3', //音频外链
    cover: 'https://edu-limu-1.oss-cn-shanghai.aliyuncs.com/songList/songList/%E7%A2%8E%E9%8A%80%E5%B9%BE%E5%85%A9.jpg', //音频封面
  }, {
    name: '向云端', //音频名称
    artist: '小霞,海洋Bo', //音频艺术家
    url: 'http://music.163.com/song/media/outer/url?id=2049512697.mp3', //音频外链
    cover: 'https://edu-limu-1.oss-cn-shanghai.aliyuncs.com/songList/songList/%E5%90%91%E4%BA%91%E7%AB%AF.png', //音频封面
  },{
    name: '小城夏天', //音频名称
    artist: 'LBI利比', //音频艺术家
    url: 'http://music.163.com/song/media/outer/url?id=1934251776.mp3', //音频外链
    cover: 'https://edu-limu-1.oss-cn-shanghai.aliyuncs.com/songList/songList/%E5%B0%8F%E5%9F%8E%E5%A4%8F%E5%A4%A9.jpg', //音频封面
  }
  ]
});
