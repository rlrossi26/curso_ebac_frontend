const nomeBeneficiario = document.getElementById('nome-beneficiario');
const numeroConta = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
formValido = validaNome(nomeBeneficiario.value);

function validaNome(nomeBeneficiario) {
    nomeComoArray = nomeBeneficiario.split(' ');
    return nomeComoArray.length >= 2;
}

const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const msgSucesso = `Montante de <b>R$${valorDeposito.value}</b> foi depositado para <b>${nomeBeneficiario.value}</b> - Numero da Conta: <b>${numeroConta.value}</b>`;
    
    if (formValido) {
        document.querySelector('.mensagem-sucesso').style.display = 'block'
        document.querySelector('.mensagem-sucesso').innerHTML = msgSucesso;
        nomeBeneficiario.value = '';
        valorDeposito.value = '';
        numeroConta.value = '';
    } else {
        document.querySelector('.mensagem-erro').style.display = 'block'
        nomeBeneficiario.style.border = '1px solid red'
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validaNome(e.target.value);

    if (!formValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
});