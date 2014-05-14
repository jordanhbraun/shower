$(document).ready(function() {

    var name_error = 0;
    var email_error = 0;
    var message_error = 0;

    // Check name field
    $('#name').blur(function() {
        $('#name_msg').html("");
        var name = $('#name').val();

        if (name === '') {
            name_error = 1;
            $('#name-group').addClass('error');
            $('#name_msg').append('Field is empty');
        } else if (name.length < 2) {
            name_error = 1;
            $('#name-group').addClass('error');
            $('#name_msg').append('Must be at leas 2 characters long');
        } else {
            name_error = 0;
            $('#name-group').removeClass('error');
            $('#name-group').addClass('success');
            return name_error;
        }
    });

    // check email field
    $('#email').blur(function() {
        $('#email_msg').html("");
        var email = $('#email').val();

        var reEmail = /^[A-Za-z0-9._-][a-zA-Z0-9._-][A-Za-z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;

        if (email === '') {
            email_error = 1;
            $('#email-group').addClass('error');
            $('#email_msg').append('Field is empty');
        } else if (!reEmail.test(email)) {
            email_error = 1;
            $('#email-group').addClass('error');
            $('#email_msg').append('Email is not valid');
        } else {
            email_error = 0;
            $('#email-group').removeClass('error');
            $('#email-group').addClass('success');
            return email_error;
        }
    });

    // check message field
    $('#message').blur(function() {
        $('#message_msg').html("");
        var message = $('#message').val();

        if (message === '') {
            message_error = 1;
            $('#message-group').addClass('error');
            $('#message_msg').append('Field is empty');
        } else if (message.length < 6) {
            message_error = 1;
            $('#message-group').addClass('error');
            $('#message_msg').append('Must be at leas 6 characters long');
        } else {
            message_error = 0;
            $('#message-group').removeClass('error');
            $('#message-group').addClass('success');
            return message_error;
        }
    });

    // verzendknop pas activeren nadat alles is ingevuld en gecontroleerd
    $('.input-xlarge').keyup(function() {
       // alert('t');
        var empty = 0;
        $('.input-xlarge').each(function() {
            if ($(this).val() === '') {
                empty = 1;
                return empty;
            }
        });

        if (empty || name_error || email_error || message_error !== 0) {
            $('#sendit').attr('disabled', 'disabled');
        } else {
           // alert('f');//this.disabled = false;
            $('#sendit').each(function(){
                this.disabled = false;
               });
        }
    });
});