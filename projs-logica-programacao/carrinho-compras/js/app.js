let qntd;
let carrinho = document.getElementById('lista-produtos');
limpar();

function adicionar () {
    /* let listaProdutos = document.querySelectorAll('.carrinho__produtos__produto'); // resgata os 'selects' e joga numa lista */

    // puxa as informações dos inputs
    qntd = document.getElementById('quantidade');

    // qntd vazio
    if (qntd.value == '') {
        alert("Informe a quantidade desejada!");
        return;
    }
    let prod = document.getElementById('produto').value;
    let info_prod = prod.trim().split('-');
    let prodValue = parseInt(prod.trim().split('R$')[1]);
    let prodTotalUnitario = qntd.value * prodValue;


    carrinho.innerHTML += `<section class="carrinho__produtos__produto"> <span class="texto-azul">${qntd.value}x</span> ${info_prod[0]} <span class="texto-azul">R$${prodTotalUnitario}</span></section>`;
    // adiciona a quantidade e item ao carrinho
    /* for (p = 0; p < listaProdutos.length; p++) {
        let produto = listaProdutos[p];
        let textoCompleto = produto.textContent.trim();
        let partesTexto = textoCompleto.split(' ');
        let nomeProduto = partesTexto.slice(1, partesTexto.length - 1).join(' ');
        let quantidadeProduto = produto.querySelectorAll('.texto-azul')[0];

        if (nomeProduto.trim() === info_prod[0].trim()) {
            let quantidade = parseInt(quantidadeProduto.replace('x', ''));
            let novoMultiplicando = qntd + quantidade;
            produto.querySelectorAll('.texto-azul')[0].innerHTML = `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${novoMultiplicando}x</span> ${info_prod[0]} <span class="texto-azul">${info_prod[1]}</span>
            </section>`;
        } else {
            
        }
    }
 */
  total()
}
function total() {
    let listaProdutos = document.querySelectorAll('.carrinho__produtos__produto'); // resgata os 'selects' e joga numa lista
    let total = 0;

    for (i = 0; i < listaProdutos.length; i++) {
        let produto = listaProdutos[i]; // para cada i, produto vai receber o produtoI referente a ele
        let quantidadeProduto = produto.querySelectorAll('.texto-azul')[0].innerText; // resgata a quantidade de produtos
        let valorProduto = produto.querySelectorAll('.texto-azul')[1].innerText; // resgata o valor com R$

        let quantidade = parseInt(quantidadeProduto.replace('x', ''));
        let valor = parseInt(valorProduto.replace('R$', ''));

        total += valor;
    }

    valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = `R$${total}`;
}
function limpar () {
    let qntd = document.getElementById('quantidade');
    qntd.value = '';
    carrinho.innerHTML = '';
    total();
}