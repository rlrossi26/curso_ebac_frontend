$('document').ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#phone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            name: {
                required: true,
            },
            cpf: {
                required: true,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
            },
            adress: {
                required: true,
            },
            number: {
                required: true,
            },
            city: {
                required: true,
            },
            state: {
                required: true,
            },
            cep: {
                required: true,
            }
        },

        messages: {
            name: 'Digite seu nome! <span class="span-erro"></span>',
            cpf: 'Digite seu CPF! <span class="span-erro"></span>',
            phone: 'Digite seu Numero de Celular! <span class="span-erro"></span>',
            email: 'Digite seu E-mail! <span class="span-erro"></span>',
            adress: 'Digite seu Endereço! <span class="span-erro"></span>',
            number: 'Digite seu Numero Residencial! <span class="span-erro"></span>',
            city: 'Digite sua Cidade! <span class="span-erro"></span>',
            state: 'Digite seu Estado! <span class="span-erro"></span>',
            cep: 'Digite seu CEP! <span class="span-erro"></span>',
        },
        
    })
});