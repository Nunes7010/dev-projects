let numerosIdos = [];
let numLimite = parseInt(prompt('Qual o número limite para sorteio?'));
let numerosSorteados = [];
let secretNumber = randomNumber();
let tries = 1;
let field = document.querySelector('input');

/* let chute = chute() */ // input com a função do chute. O parâmetro entrará aqui...

function texto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    // acessibilidade da fala através da ferramenta responsive voice. (o que, 'idioma', {velocidade}) 
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2})
}
function initialText () {
    texto('h1', 'Random Secret Number Game');
    texto('p', `Digite um número entre 1 e ${numLimite}`);
}
initialText();

function randomNumber () {
    numeroAleatorio = parseInt(Math.random() * numLimite + 1);
    if (numerosSorteados.includes(numeroAleatorio)) {
        qntElementosLista = numerosSorteados.length;
        if (qntElementosLista == numLimite) {
            numerosSorteados = [];
        }
        return randomNumber();
    } else {
        numerosSorteados.push(numeroAleatorio);
        console.log(numerosSorteados);
        return numeroAleatorio;
    }
}
function verificarChute () {
    let chute = document.querySelector('input').value; // entra no documento relacionado, seleciona o input e pega o valor inserido dentro

    if (chute == secretNumber) {
        texto('h1', 'Parabéns!');
        let tryWord = tries > 1 ? 'tentativas' : 'tentativa';
        texto('p', `Você acertou o número em ${tries} ${tryWord}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if (chute < secretNumber) {
        texto('p',`O número secreto é maior que ${chute}`);
        tries++;
        cleanField();
    } else {
        texto('p',`O número secreto é menor que ${chute}`);
        tries++;
        cleanField();
    }
}
function cleanField () {
    field.value = '';
}

function resetGame () {
    secretNumber = randomNumber();
    cleanField()
    initialText()
    tries = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
