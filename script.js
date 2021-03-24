var timer = 120;
var launchTimer;
var music = "zen.mp3";

function setTimer(number){
    timer=number;
    const minutes = Math.floor(number / 60);
    let seconds = number % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    document.getElementById("timer-time").innerHTML = `${minutes}:${seconds}`;
}


function startTimer() {

    document.getElementById("player-music").play();
    document.getElementById("background-video").play();

   launchTimer = window.setInterval(function(){
        if (timer > 0) {
            timer -= 1;
            document.getElementById("play-button").style.display = "none";
            document.getElementById("pause-button").style.display = "block";
        } else {
            document.getElementById("player-music").pause();
            document.getElementById("background-video").pause();
        }

        const minutes = Math.floor(timer / 60);
            let seconds = timer % 60;
            if (seconds < 10) {
                seconds = `0${seconds}`;
              }
            document.getElementById("timer-time").innerHTML = `${minutes}:${seconds}`;
    }, 1000);

}

function stopTimer(){
    document.getElementById("play-button").style.display = "block";
    document.getElementById("play-button").style.marginLeft = "35px";
    document.getElementById("pause-button").style.display = "none";


    window.clearInterval(launchTimer);
    document.getElementById("player-music").pause();
    document.getElementById("background-video").pause();
}

function chooseMusic (musicFile){
    music=musicFile;
    var playerMusic = document.getElementById("player-music");
        playerMusic.pause();
        playerMusic.setAttribute('src', music);
        playerMusic.load();

    document.getElementById("play-button").style.display = "block";
    document.getElementById("play-button").style.marginLeft = "40px";
    document.getElementById("pause-button").style.display = "none";

    window.clearInterval(launchTimer);
    document.getElementById("player-music").pause();
    document.getElementById("background-video").pause();
}