'use strict';

let userid = localStorage.getItem('usuario_en_sesion');
console.log(userid);

let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {
    document.getElementById('txt_primer_nombre').value = usario_loggeado.nombre;
    document.getElementById('txt_segundo_nombre').value = usario_loggeado.segundo_nombre;
    document.getElementById('txt_primer_apellido').value = usario_loggeado.papellido;
    document.getElementById('txt_segundo_apellido').value = usario_loggeado.sapellido;
    document.getElementById('txt_cedula').value = usario_loggeado.identificacion;
    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
};

if (userid != null) {
    usario_loggeado = obtener_usuario_por_id(userid);
    mostrar_datos(usario_loggeado);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}





