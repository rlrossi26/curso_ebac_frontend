$(document).ready(function() {
    $('#phone-number').mask('(00) 00000-0000');
    

    $('#form-cadastro').on('submit', function(e) {
        e.preventDefault();

        $('#alert-success').removeClass('d-none').addClass('d-block');
    })
});