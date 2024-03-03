var audioPlayer = new Audio();
var index=Math.floor(Math.random() * birdSounds.length);

document.getElementById("guess-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        guess(); 
    }
});

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
    var guess = inputElement.value.toLowerCase();
    var responseElement = document.getElementById("answer-response");
    if (birdSounds[index].acceptedAnswers.includes(guess)){
        responseElement.innerText="Correct, it is a "+birdSounds[index].acceptedAnswers[0];
    }else{
        responseElement.innerText="Incorrect, it is a "+birdSounds[index].acceptedAnswers[0];
    }
}

function next(){
    var responseElement = document.getElementById("answer-response");
    responseElement.innerText="";
    var inputElement = document.getElementById("guess-input");
    inputElement.value="";
    index=Math.floor(Math.random() * birdSounds.length);
}