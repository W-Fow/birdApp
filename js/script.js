var audioPlayer = new Audio();
var numBirdSounds = birdSounds.length;
var index=Math.floor(Math.random() * numBirdSounds);

const responseElement = document.getElementById("answer-response");
const inputElement = document.getElementById("guess-input");

inputElement.addEventListener("keypress", function(event) {
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
    var guess = inputElement.value.toLowerCase();
    if (birdSounds[index].acceptedAnswers.includes(guess)){
        responseElement.innerText="Correct, it is a "+birdSounds[index].acceptedAnswers[0];
    }else{
        responseElement.innerText="Incorrect, try again or reveal the answer";
    }
}

function revealAnswer(){
    responseElement.innerText="It was a "+birdSounds[index].acceptedAnswers[0];
}

function next(){
    audioStop();
    responseElement.innerText="";
    inputElement.value="";
    let temp=Math.floor(Math.random() * numBirdSounds);
    while(temp==index){
        temp=Math.floor(Math.random() * numBirdSounds);
    }
    index=temp;
}
