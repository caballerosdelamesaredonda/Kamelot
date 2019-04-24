'use strict';

const input_clave_nueva = document.querySelector('#txt_nueva_clave');
const input_confirmacion = document.querySelector('#txt_confirmacion');
const boton_guardar = document.querySelector('#btn_ingresar');

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    return url.searchParams.get(param);
};

let id = get_param('id');
let usuario = obtener_usuario_por_id(id);

let validar_blancos = () =>{
    let error = false;

    if(input_codigo.value === ''){
        input_codigo.style.border='1px solid red';
        error = true;
    } else {
        input_codigo.style.border = '#48dbfb solid 1px;';
    }

    if(input_clave_nueva.value === ''){
        input_clave_nueva.style.border='1px solid red';
        error = true;
    } else {
        input_clave_nueva.style.border = '#48dbfb solid 1px;';
    }

    if(input_confirmacion.value === ''){
        input_clave_nueva.style.border='1px solid red';
        error = true;
    } else {
        input_confirmacion.style.border = '#48dbfb solid 1px;';
    }

    return { error:error, msg: '&#8268 Campos vacíos'};
};

let validar_exp = () =>{
    let error = false;
    let exp = /^[a-zA-Z0-9]+$/;

    if(exp.test(input_clave_nueva.value)=== false){
        input_clave_nueva.style.border='1px solid red';
        error = true;
    } else {
        input_clave_nueva.style.border = '#48dbfb solid 1px;';
    }

    return { error:error, msg: '&#8268 La clave tiene que tener mínimo 8 caracteres, que incluyen una mínimo una mayúscula, una minúscula, un carácter especial y un número.'  }
};

let validar_iguales =()=>{
    let error = false;
    if (input_clave_nueva.value !== input_confirmacion.value){
        input_clave_nueva.style.border='1px solid red';
        input_confirmacion.style.border='1px solid red';

        error = true;
    }else{
        input_clave_nueva.style.border='1px solid red';
        input_confirmacion.style.border='1px solid red';
    }

    return { error: error,  msg: `&#8268 Las claves no son iguales.`}
};


let obtenerDatos = () =>{
    let resultados_val_blancos = validar_blancos();
    let resultados_val_exp = validar_exp();
    let resultados_val_igual = validar_iguales();

    if (resultados_val_blancos.error === false && resultados_val_exp.error === false){
        swal({
            type: 'warning',
            title: 'Campos inválidos',
            text: `Tienes los siguientes problemas: \n
                   ${resultados_val_blancos.msg} \n
                   ${resultados_val_exp.msg}`
        });
    }else if (resultados_val_exp.error === false) {
        swal({
            type: 'warning',
            title: 'Campos inválidos',
            text: `Tienes los siguientes problemas: \n
                   ${resultados_val_exp.msg}`
        });
    }else if (resultados_val_igual.error === false) {
        swal({
            type: 'warning',
            title: 'Campos inválidos',
            text: `Tienes los siguientes problemas: \n
                   ${resultados_val_igual.msg}`
        });
    }else{
        cambiar_clave(id, input_clave_nueva.value);
        swal({
            type: 'success',
            title: 'Se ha cambió la clave con exito',
            timer: 3000,
            showConfirmButton: false
        }, function() {
            iniciar_sesion(id);
        });
    }

};

let iniciar_sesion =(pUsuario)=> {
    localStorage.usuario_en_sesion = pUsuario['_id'];
    let tipo_usuario = pUsuario['tipo_usuario'];

    switch (tipo_usuario) {
        case "AD":
            window.location.href='perfil_admin.html';
            break;

        case "CE":
            window.location.href='perfil_centroedu.html';
            break;

        case "PF":
            window.location.href='/public/padrefamilia/perfil_padre_familia.html';
            break;
    };

};

boton_guardar.addEventListener('click' , obtenerDatos);
