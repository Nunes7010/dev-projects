let listaAmigos = [];
let listaEmbaralhada = [];
let listaNumeros = [];
let novoAmigo = document.getElementById('nome-amigo');
let campoListaAmigos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');
let texto = document.querySelector('.form__label');
let textoOriginal = 'Digite o nome de um amigo'; // Salva o texto original

function adicionar () {
    if (novoAmigo.value == '') {
        mensagemCampoVazio();
        return;
    }
    // resgatar o valor do input "nome do amigo"
    novoAmigo = document.getElementById('nome-amigo');
    // adicionar input em uma lista
    listaAmigos.push(novoAmigo.value);
    mensagemSucesso();
    // exibir a lista na área "amigos incluidos"
    campoListaAmigos = document.getElementById('lista-amigos');
    campoListaAmigos.innerText = listaAmigos.join(', ');
    novoAmigo.value = '';
}
function sortear () {
    listaSorteio.innerText = '';
    listaEmbaralhada = [];
    listaNumeros = [];

    // se houver apenas um elemento incluido, adicione mais;
    if (listaAmigos.length < 3) {
        mensagemErroAmigos();
        return;
    }
    // resgatar elementos da lista separados por ','
    // embaralhar os elementos e colocar em uma nova lista
    listaEmbaralhada = embaralharLista();
    // incluir os resultados, em que cada um pegou seu sucessor
    for (i = 0; i < listaEmbaralhada.length; i++) {
        let amigo1 = listaEmbaralhada[i];
        let amigo2 = listaEmbaralhada[(i + 1) % listaEmbaralhada.length];
        let sorteio = [(`${amigo1} --> ${amigo2}`)];
        listaSorteio.innerHTML += `<p>${sorteio}</p>`;
    }
    mensagemSorteio();
}
function reiniciar () {
    listaAmigos = [];
    listaEmbaralhada = [];
    listaNumeros = [];
    campoListaAmigos.innerText = '';
    novoAmigo.value = ''

    // lista embaralhada
    listaSorteio.innerText = '';
    texto.innerText = textoOriginal;
}
function embaralharLista () {
    // resgatar valor de um elemento aleatório pelo índice e adicionar ele à nova lista
    for (i = 0; i < listaAmigos.length; i++) {
        if (listaNumeros.length == listaAmigos.length) {
            break;
        } else {
        let randomNum = randomNumberGenerator();
        // resgatar elemento da lista pelo índice com o número aleatório
        let elementoLista = listaAmigos[randomNum];
        // salvar o "elemento" em uma nova lista
        listaEmbaralhada.push(elementoLista);
        }
    }
    return listaEmbaralhada;
}
function randomNumberGenerator () {
    // número aleatório entre 0 e o limite da lista
    let randomNum = Math.floor(Math.random() * listaAmigos.length || 0 );
    
    // número aleatório não se repete //
    // verifica se tem na lista: (sim) sorteia outro/ (não) add listaNumeros
    if (listaNumeros.includes(randomNum)) {
        return randomNumberGenerator();
    } else {
        listaNumeros.push(randomNum);
        return randomNum;
    }
}

// MENSAGENS
function mensagemSucesso () {
    texto.innerText = "Incluído com sucesso! ✅"; // Altera para a mensagem

    setTimeout(() => {
        texto.innerText = textoOriginal; // Volta ao original após 2 segundos
    }, 2000);
}
function mensagemCampoVazio () {
    texto.innerText = "Preencha o campo! 😣"; // Altera para a mensagem

    setTimeout(() => {
        texto.innerText = textoOriginal; // Volta ao original após 2 segundos
    }, 2000);
}
function mensagemSorteio () {
    texto.innerText = "Sorteio realizado! 🥳"; // Altera para a mensagem

    setTimeout(() => {
        texto.innerText = textoOriginal; // Volta ao original após 2 segundos
    }, 2000);
}
function mensagemErroAmigos () {
    texto.innerText = "Por Favor, inclua mais amigos! 😄"; // Altera para a mensagem

    setTimeout(() => {
        texto.innerText = textoOriginal; // Volta ao original após 2 segundos
    }, 2000);
}