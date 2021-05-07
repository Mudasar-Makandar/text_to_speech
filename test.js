let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
window.speechSynthesis.getVoices().forEach(function (voice) {
    console.log(voice.name, voice.default ? voice.default : '');
});
let voices;
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    console.log(voices)
    speech.voice = voices[3];
    console.log(speech.voice)

};


document.getElementById("play_btn").addEventListener("click", () => {
    speech.text = document.getElementById("input_text").value;
    console.log(speech.text)
    window.speechSynthesis.speak(speech);
});