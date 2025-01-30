let contador = 1;
let numerosSorteados = [];
let qnt = document.getElementById('quantidade');
let de = document.getElementById('de');
let ate = document.getElementById('ate');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let botaoSortear = document.getElementById('btn-sortear');


function sortear() {
    let quantidade = qnt.value;
    contador = 1;
    numerosSorteados = [];

    if (quantidade == '' || de.value == '' || ate.value == '') {
        alert('Todos os campos devem estar preenchidos');
        return reset();
    }

    // definido valor contador; condição; complemento {função};
    while (contador <= quantidade) {
        newRandomNumber(quantidade);
        contador++;
    }

    /* document.getElementById('btn-reiniciar').removeAttribute('disabled'); */
    texto('#resultado', `Os números sorteados são: ${numerosSorteados.join(', ')}.`);
    // alterarStatusBotao();
    botaoReiniciar.classList.remove('container__botao-desabilitado');
    botaoReiniciar.classList.add('container__botao');
}
function newRandomNumber (quantidade) {
    let from = parseInt(de.value);
    let to = parseInt(ate.value);

    validacaoNumeros(from, to, quantidade);

    let numeroSorteado = parseInt(Math.random() * to + 1);
    if (numeroSorteado < from) {
        return newRandomNumber();
    }   else {
        if (numerosSorteados.includes(numeroSorteado)) {
            return newRandomNumber();
        } else {
            numerosSorteados.push(numeroSorteado); // numeroSorteado incluído na lista
        }
    }
}
function texto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function reset() {
    numerosSorteados = [];
    qnt.value = '';
    de.value = '';
    ate.value = '';

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
    } else {
        alterarStatusBotao();
    }
    /* document.getElementById('btn-reiniciar').setAttribute('disabled', true); */
    texto('#resultado', 'Números sorteados:  nenhum até agora.');
}
function alterarStatusBotao () {
    // verifica a classe
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function validacaoNumeros(min, max, quantidade) {
    if (min > max) {
        alert("'Do número' deve ser menor do que 'Até o número'.")
        reset();
    } else {
        let calc = (max - min) + 1;
        if (calc < quantidade) {
            alert("A quantidade de números pedida é muito alta.")
            reset();
        } else {
            return;
        }
    }
}

/* OUTRA LÓGICA

function sortear() {
    let qnt = document.getElementById('qnt');
    let de = document.getElementById('de');
    let ate = document.getElementById('ate');

    let sorteados = [];
    let numero;
    
    for (let i = 0; i <= quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    
    let resultado = documet.getElementById('resultado');
    resultado.innerHTML = `<label class="texto_paragrafo">Números sorteados ${sorteados}!`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao () {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    
    // verifica a classe
    if (botaoReiniciar.classList.contains(container_botao-desabilitado)) {
        botaoReiniciar.classList.remove(container_botao-desabilitado);
        botaoReiniciar.classList.add(container_botao);
    }
}
*/