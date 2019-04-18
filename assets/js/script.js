let isPlaying = false;
let bpm = 100;
let interval = 1000 / (bpm / 60);
var timer;

function playSound() {
    var audio = document.getElementById('audio');
    audio.play();
}

function playPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        timer = setInterval(() => playSound(), interval);
        $('#play-button').removeClass('fa fa-play').addClass('fa fa-pause');
    } else {
        clearInterval(timer);
        $('#play-button').removeClass('fa fa-pause').addClass('fa fa-play');
    }
}

function updateBPM() {
    $('#BPM-display').html(`<h1>${bpm} bpm</h1>`);
    console.log(bpm, interval)
    if (isPlaying) {
        timer = setInterval(() => playSound(), interval);
    }
}


// Onclicks...
$('#play-button').on('click', () => {
    playPause();
});

$('#faster-button').on('click', () => {
    bpm += 5;
    interval = 1000 / (bpm / 60);
    updateBPM();
});

$('#slower-button').on('click', () => {
    bpm -= 5;
    interval = 1000 / (bpm / 60);
    updateBPM();
});


// Page load...
updateBPM();