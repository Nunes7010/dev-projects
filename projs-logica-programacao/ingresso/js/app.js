let totalPista = parseInt(document.getElementById('qtd-pista').innerText);
let totalSuperior = parseInt(document.getElementById('qtd-superior').innerText);
let totalInferior = parseInt(document.getElementById('qtd-inferior').innerText);

function comprar () {
    // resgatar o tipo de ingresso e quantidade
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    if (qtd <=0 || qtd == '') {
        alert('Insira um número válido!');
        reset();
        return;
    }
    /* validacaoQtd(qtd); */
    // subtrair do total de determinado tipo de ingresso
    if (tipoIngresso == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso == 'inferior') {
        comprarinferior(qtd);
    } else {
        comprarSuperior(qtd);
    }
    reset();
}
function comprarPista(qtd) {
    if (totalPista == 0) {
        alert('Desculpe, os ingressos da pista já esgotaram...');
        return;
    } else if (totalPista < qtd && totalPista != 0){
        alert('Não há tantos ingressos disponíveis! Reserve menos cadeiras!')
    } else {
        totalPista -= qtd;
        let campoPista = document.getElementById('qtd-pista');
        campoPista.innerHTML = totalPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarinferior(qtd) {
    if (totalInferior == 0) {
        alert('Desculpe, os ingressos das cadeiras inferiores já esgotaram...');
        return;
    } else if (totalInferior < qtd && totalInferior != 0){
        alert('Não há tantos ingressos disponíveis! Reserve menos cadeiras!')
    } else {
        totalInferior -= qtd;
        let campoInferior = document.getElementById('qtd-inferior');
        campoInferior.innerHTML = totalInferior;
        alert('Compra realizada com sucesso!')
    }
}
function comprarSuperior(qtd) {
    if (totalSuperior == 0) {
        alert('Desculpe, os ingressos das cadeiras superiores já esgotaram...');
        return;
    } else if (totalSuperior < qtd && totalSuperior != 0){
        alert('Não há tantos ingressos disponíveis! Reserve menos cadeiras!')
    } else {
        totalSuperior -= qtd;
        let campoSuperior = document.getElementById('qtd-superior');
        campoSuperior.innerHTML = totalSuperior;
        alert('Compra realizada com sucesso!')
    }
}
function reset (qtd) {
    qtd = document.querySelector('#qtd');
    qtd.value = '';
}