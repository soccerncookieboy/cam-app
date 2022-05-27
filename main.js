var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("texxtbox").innerHTML = "";
    recognition.start();
}