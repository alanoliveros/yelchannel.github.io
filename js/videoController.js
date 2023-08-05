const video = document.getElementById('myVideo');

// Click event listener
video.addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Spacebar event listener
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) { // Space key
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});

// Click event listener for the play button
/*playButton.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        togglePlayPause();
        playButton.innerText = 'Pause Music';
    } else {
        video.muted = true;
        togglePlayPause();
        playButton.innerText = 'Play Music';
    }
});*/



var btn = document.getElementById("myBtn");

//declare unmute icon variable
var unmuteIcon = '<i class="fas fa-volume-mute"></i>'

//declare mute icon variable
var muteIcon = '<i class="fas fa-volume-up"></i>'

function myFunction() {
    // toggle the muted property of the video element
    video.muted = !video.muted;

    // if the video is muted, set the btn.innerHTML to unmuteIcon
    // otherwise, set it to the muteIcon
    if (video.muted) {
        btn.innerHTML = unmuteIcon;
    } else {
        btn.innerHTML = muteIcon;
    }
}