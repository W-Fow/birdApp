var audioPlayer = new Audio();
var index=Math.floor(Math.random() * birdSounds.length);
function playBirdSound() {
    audioPlayer.src = (birdSounds[index].soundFile);
    audioPlayer.play();
}

function audioStop() {
    audioPlayer.pause();
    audioPlayer.currentTime=0;
}

function guess(){
    audioStop();
    var inputElement = document.getElementById("guess-input");
    var guess = inputElement.value;
    var responseElement = document.getElementById("answer-response");
    if (guess == birdSounds[index].acceptedAnswers[0]){
        responseElement.value="Correct";
    }else{
        responseElement.value="Incorrect, it was a "+birdSounds[index].acceptedAnswers[0];
    }
}

function next(){
    var responseElement = document.getElementById("answer-response");
    responseElement.value="";
    var inputElement = document.getElementById("guess-input");
    inputElement.value="";
    index=Math.floor(Math.random() * birdSounds.length);
}