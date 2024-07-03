const SOMA = (num_a, num_b) => {
    let soma = num_a + num_b;

    return soma;
}

const SUBTRACAO = (num_a, num_b) => {
    let subtracao = num_a - num_b;

    return subtracao;
}

const MULTIPLICACAO = (num_a, num_b) => {
    let multiplicacao = num_a * num_b;

    return multiplicacao;
}

const DIVISAO = (num_a, num_b) => {
    let divisao = num_a / num_b;

    return divisao;
}

const PORCENTAGEM = (data) => {
    let porcentagem = data / 100;

    return porcentagem;
}


module.exports = {
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO,
    PORCENTAGEM
}