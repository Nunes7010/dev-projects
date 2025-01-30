let palavra = prompt('Verifique se a palavra digitada é um palídromo:');

function palindromo (palavra) {
    let reversed = palavra.split('').reverse('').join('');
    if (reversed === palavra) {
        alert(`A palavra ${palavra} é um palíndromo!`)
    } else {
        alert(`A palavra ${palavra} não é um palíndromo...`)
    }
}

palindromo(palavra);
