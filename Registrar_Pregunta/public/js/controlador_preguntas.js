'use strict';

const input_pregunta = document.querySelector('#txt_pregunta');
const boton_registrar = document.querySelector('#btn_registrar');

let pregunta = '';

let validar = () => {
    let error = false;

    if(input_pregunta.value == ''){
        input_pregunta.classList.add('error_input')
        error = true;
    }else{
        input_pregunta.classList.remove('error_input')
    };

    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        let pregunta = input_pregunta.value;
        registrar_pregunta(pregunta);


    }else{
        
        Swal.fire({
            type: 'warning',
            title: 'La pregunta No enviada con éxito',
            text: `Revise los Campos`    
        })
    }

    

}

boton_registrar.addEventListener('click', mostrarDatos);