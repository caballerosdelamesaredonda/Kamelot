'use strict';

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);

if (userid != '') {
    let usario_loggeado = obtener_usuario_por_id(userid);
}else{
    console.log('Usuario no iniciado sesion');
}


console.log(usario_loggeado);

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('txt_primer_nombre').value = usario_loggeado.nombre;
    document.getElementById('txt_segundo_nombre').value = usario_loggeado.segundo_nombre;
    document.getElementById('txt_primer_apellido').value = usario_loggeado.papellido;
    document.getElementById('txt_segundo_apellido').value = usario_loggeado.sapellido;
    document.getElementById('txt_cedula').value = usario_loggeado.identificacion;
    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
    document.getElementById('txt_provincia').value = usario_loggeado.provincia;
    document.getElementById('txt_canton').value = usario_loggeado.canton;
    document.getElementById('txt_distrito').value = usario_loggeado.distrito;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;
};

mostrar_datos(usario_loggeado);

