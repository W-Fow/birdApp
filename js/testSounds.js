var audioPlayer = new Audio();
var index=Math.floor(Math.random() * birdSounds.length);

function populateDropdown() {
    var dropdown = document.getElementById("birdSoundsDropdown");
    birdSounds.forEach(function(sound) {
        var option = document.createElement("option");
        option.text = sound.soundFile;
        dropdown.add(option);
    });
}

function playBirdSound() {
    var dropdown = document.getElementById("birdSoundsDropdown");
    var selectedValue = dropdown.value;
    audioPlayer.src = (selectedValue);
    audioPlayer.play();
}

function audioStop() {
    audioPlayer.pause();
    audioPlayer.currentTime=0;
}
