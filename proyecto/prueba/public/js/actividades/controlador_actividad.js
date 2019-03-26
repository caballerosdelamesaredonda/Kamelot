'use strict';

const input_actividad = document.querySelector('#txt_actividad');
const boton_registrar = document.querySelector('#btn_registrar');
let userlocal = localStorage.getItem('usuario_en_sesion');

let actividad = '';

let validar = () => {
    let error = false;

    if(input_actividad.value == ''){
        input_actividad.classList.add('error_input')
        error = true;
    }else{
        input_actividad.classList.remove('error_input')
    };

    return error;

};

let mostrarDatos = () => {

    if (validar() == false) {
        let actividad = input_actividad.value;
        registrar_actividad(userlocal,actividad);
    }else{
        
        Swal.fire({
            type: 'warning',
            title: 'Actividad No enviada con éxito',
            text: `Revise los Campos`    
        })
    }

    

}

boton_registrar.addEventListener('click', mostrarDatos);