const form = document.getElementById('form-number');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagem = document.getElementById('mensagem')
    const msgSucesso = `Tudo certo, o numero ${campoA.value} é MENOR do que ${campoB.value}`
    const msgErro = `Opa tá errado! o numero ${campoA.value} é MAIOR do que ${campoB.value}`
    const msgIgual = `Espertinho! Os dois numeros são iguais!`

    if (campoA.value < campoB.value) {
        mensagem.style.display = 'block';
        mensagem.innerHTML = msgSucesso;
        campoA.value = '';
        campoB.value = '';

    } else if (campoA.value > campoB.value) {
        mensagem.style.display = 'block';
        mensagem.classList = [];
        mensagem.classList.add('error');
        mensagem.innerHTML = msgErro;
        campoA.value = '';
        campoB.value = '';

    } else {
        mensagem.style.display = 'block'
        mensagem.classList = [];
        mensagem.classList.add('igual');
        mensagem.innerHTML = msgIgual;
        campoA.value = '';
        campoB.value = '';
    }

});