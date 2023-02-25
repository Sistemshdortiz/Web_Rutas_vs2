'use strict';
$(document).ready(function(){
    
    //asigno funcion a botón de inicio de sesion
    $('#Ir_a_perfil').on('click',function(){
        window.location.href = "index.html";
    });

    //asigno función a botón de Registro
    $('#registro').on('click',function(){
        window.location.href = "index.html";
    });

    //Asigno evento para mostrar el menu de registro en lugar del de inicio de sesión
    $('#para_registrarte').change(function(){

        if($(this).is(':checked')){
            $('.form-body-inicio').hide();
            $('.form-body-registro').show();
            $('body').css('overflow-y','visible');
            $('footer').css('position','relative');
        }
        
    });
});
