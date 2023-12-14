function comprar() {
    //recuperar os valores do formulario
    let ingresso = document.getElementById('tipo-ingresso');
    let quantidadeComprar = parseInt(document.getElementById('qtd').value);
    //remover quantidade de ingressos
    if (ingresso.value == 'pista') {
        comprarPista(quantidadeComprar);
    } else if (ingresso.value == 'superior') {
        comprarSuperior(quantidadeComprar);
    } else {
        comprarInferior(quantidadeComprar);
    }
}

function comprarPista(quantidadeComprar) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeComprar > quantidadePista) {
        alert('Quantidade indisponivel para a Pista');
    } else {
        quantidadePista = quantidadePista - quantidadeComprar;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(quantidadeComprar) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeComprar > quantidadeSuperior) {
        alert('Quantidade indisponivel para Cadeira Superior');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidadeComprar;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso');

    }
}

function comprarInferior(quantidadeComprar) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeComprar > quantidadeInferior) {
        alert('Quantidade indisponivel para Cadeira Inferior');
    } else {
        quantidadeInferior = quantidadeInferior - quantidadeComprar;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso');
    }
}