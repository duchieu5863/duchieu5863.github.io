function convertTimeFormat(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }
  
  let song;
  let isPlaying = false;
  
  window.onload = function () {
    const myPlaylist = [
      "src/audio/tiptoe.mp3",
      "src/audio/yeulam.mp3",
      "src/audio/anhlangoailecuaem.mp3",
      "src/audio/doi.mp3",
      "src/audio/lunglay.mp3",
      "src/audio/cahvd.mp3",
      "src/audio/haydeconchiudau.mp3",
      "src/audio/thichthich.mp3",
      "src/audio/idol.mp3",
      "src/audio/caphe.mp3",
      "src/audio/pipo.mp3",
      "src/audio/nuhonbisou.mp3"
    ];
  
    const songNames = [
      "Tip Toe - HYBS",
      "Yêu nắm",
      "Anh là ngoại lệ của em",
      "Đợi - 52hz",
      "Lung lay",
      "Chẳng ai hiểu về Drill",
      "Hãy cho con chịu đau khổ thay em",
      "Thich Thich - Phuong Ly",
      "Idol - YOASOBI",
      "Cà phê - MIN",
      "Pipo Pipo - Serani Poji",
      "Nụ hôn Bisou - Mike"
    ];
  
    const index = Math.floor(Math.random() * myPlaylist.length);
    song = new Audio(myPlaylist[index]);
  
    const songTitle = document.getElementById("song");
    const durationInfo = document.getElementById("duration-info");
    const progressBar = document.getElementById("progress");
    const playBtn = document.getElementById("play-btn");
  
    song.addEventListener("canplay", () => {
      durationInfo.textContent = `00:00 / ${convertTimeFormat(song.duration)}`;
    });
  
    song.addEventListener("timeupdate", () => {
      const current = song.currentTime;
      const total = song.duration;
      durationInfo.textContent = `${convertTimeFormat(current)} / ${convertTimeFormat(total)}`;
      progressBar.value = (current / total) * 100;
    });
  
    progressBar.addEventListener("input", () => {
      song.currentTime = (progressBar.value / 100) * song.duration;
    });
  
    playBtn.addEventListener("click", () => {
      if (!isPlaying) {
        song.play();
        isPlaying = true;
        playBtn.textContent = "⏸";
      } else {
        song.pause();
        isPlaying = false;
        playBtn.textContent = "▶";
      }
    });
  
    songTitle.textContent = songNames[index];
  };
  
