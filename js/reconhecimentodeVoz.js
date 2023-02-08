const elementoChute = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';

recognition.start();
//Evento de fala

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteTela(chute);
    verificaSeChuteValido(chute);
}

function exibeChuteTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', ()=> {
    recognition.start
})