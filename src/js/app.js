function startTimer(song) {
    var currentTimeDisplay = document.getElementById('current-time');
    var durationDisplay = document.getElementById('duration');

    durationDisplay.textContent = convertTimeFormat(song.duration); // Update duration immediately

    var timer = setInterval(function() {
        if (!song.paused || !song.ended) {
            var currentTime = song.currentTime;
            currentTimeDisplay.innerHTML = convertTimeFormat(currentTime);
        } else {
            clearInterval(timer); // Clear the interval if the song is paused or ended
        }
    }, 1000); // Update every second
}

function convertTimeFormat(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.floor(timeInSeconds % 60);
    var paddedMinutes = minutes.toString().padStart(2, '0');
    var paddedSeconds = seconds.toString().padStart(2, '0');
    return paddedMinutes + ':' + paddedSeconds;
}

var song; // Define the song outside of the window.onload to use in other functions
var isPlaying = false; // Track if the song is playing or not

window.onload = function() {
    var myPlaylist = [
        "src/audio/tiptoe.mp3",
        "src/audio/yeulam.mp3",
        "src/audio/anhlangoailecuaem.mp3",
        "src/audio/doi.mp3"
    ];
    let namee;
    const rd = Math.floor(Math.random() * myPlaylist.length);

    if (rd === 2) namee = "Anh là ngoại lệ của em ";
    else if (rd === 1) namee = "Yêu nắm";
    else if (rd === 3) namee = "Đợi";
    else namee = "Tip Toe";

    var randomSong = myPlaylist[rd];
    song = new Audio(randomSong);
    song.oncanplaythrough = function() { // Make sure to start the timer only when the song is loaded
        startTimer(song);
    }

    var musicPlayer = document.querySelector('.music-player');
    musicPlayer.addEventListener('click', function() {
        if (!isPlaying) {
            song.play();
            isPlaying = true;
        } else {
            song.pause()
            isPlaying = false
        }
    });


    const songTitle = document.getElementById("song");
    songTitle.textContent = namee;
}

