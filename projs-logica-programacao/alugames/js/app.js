let quantidadeJogosAlugados = 1;

function alterarStatus (gameId) {
    let containerPai = document.getElementById(`game-${gameId}`);
    let img = containerPai.querySelector('div');
    let btn = containerPai.querySelector('a');

    if (btn.classList.contains('dashboard__item__button--return')) {
        btn.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        btn.innerHTML = 'Alugar';
        quantidadeJogosAlugados--;
        console.log(`${quantidadeJogosAlugados} jogos estão alugados`);
    } else {
        btn.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        btn.innerHTML = 'Devolver';
        quantidadeJogosAlugados++;
        console.log(`${quantidadeJogosAlugados} jogos estão alugados`);
    }
}