$(document).ready(function() { 
    
    // Agregar método de validación para RUT chileno
    $.validator.addMethod("rutChileno", function(value, element) {
        // Eliminar puntos y guión del RUT
        value = value.replace(/[.-]/g, "");
    
        // Validar que el RUT tenga 8 o 9 dígitos
        if (value.length < 8 || value.length > 9) {
        return false;
        }
    
        // Validar que el último dígito sea un número o una 'K'
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
        return false;
        }
    
        // Calcular el dígito verificador
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
        digit = rut % 10;
        sum += digit * factor;
        rut = Math.floor(rut / 10);
        factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
    
        // Validar que el dígito verificador sea correcto
        return dv === lastChar;
    }, "Por favor ingrese un RUT válido."); 
    $.validator.addMethod("emailCompleto", function(value, element) {

        // Expresión regular para validar correo electrónico
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
    
        // Validar correo electrónico con la expresión regular
        return regex.test(value);
    
      }, 'Ingrese un correo válido');

    $('#formulario_1').validate({ 
        rules: {
            rut: {
                required: true,
                rutChileno: true,
            },
            Nombre: {
                required: true,
                minlength: 3,
                maxlength: 100,
            },
            Apellido: {
                required: true,
                minlength: 3,
                maxlength: 100,
            },
            Correo: {
                emailCompleto: true,
                required: true,
            },
            Direccion: {
                required: true,
                minlength: 10,
                maxlength: 300,
            },
            password: {
                required: true,
                minlength: 3,
                maxlength: 100,

            },
            password2: {
                required: true,
                equalTo: "#password",
            }
            
        },
        messages:{
            rut: {
                required: 'El rut es un campo obligatorio',
                rutChileno: 'El formato del rut no es correcto'
            },
            Nombre: {
                required: "por favor, ingrese su nombre",
                minlength: "su nombre solo puede tener al menos 3 caracteres",
                maxlength: "su nombre no debe contener más de 100 caracteres"
            },
            apellido:{
                required: "por favor, ingrese su apellido",
                minlength: "su apellido solo puede tener al menos 3 caracteres",
                maxlength: "su apellido no debe contener más de 100 caracteres"
                
            },
            Correo: {
                emailCompleto: "no cumple el formato de correo",
                required: "el email es obligatorio",
            },
            Direccion: {
                required: "La direccion es requerida",
                minlength: "describa con mejor exactitud su dirección",
                maxlength: "la direccion no debe contener más de 300 caracteres",
            },
            password: {
                required: "por favor, ingrese su cnotraseña",
                minlength: "su contraseña debe al menos 3 caracteres",
                maxlength: "su cntraseña no debe contener más de 100 caracteres",

            },
            password2: {
                required: "repita la contraseña del campo anterior",
                equalTo: "las contraseñas deben ser similares",
            }
        }
    });

});
