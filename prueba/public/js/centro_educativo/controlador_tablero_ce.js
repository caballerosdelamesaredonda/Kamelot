'use strict';

let userid = localStorage.getItem('centro_id');
console.log(userid);

let usario_loggeado = [];

let mostrar_datos = (pUsuarioLoggeado) => {

    document.getElementById('imagen_perfil').src = usario_loggeado.foto;    
    document.getElementById('txt_nombre_centro').value = usario_loggeado.nombre;
    document.getElementById('txt_correo').value = usario_loggeado.correo_electronico;
    document.getElementById('txt_telefono').value = usario_loggeado.telefono;
    document.getElementById('txt_sitioweb').value = usario_loggeado.sitio_web;
    document.getElementById('txt_provincia').value = usario_loggeado.provincia;
    document.getElementById('txt_canton').value = usario_loggeado.canton;
    document.getElementById('txt_distrito').value = usario_loggeado.distrito;
    document.getElementById('txt_direccion').value = usario_loggeado.direccion;
    document.getElementById('txt_tipo_centro').value = usario_loggeado.tipo_centro;
    document.getElementById('txt_nivel').value = usario_loggeado.nivel_centro;
    document.getElementById('txt_refhistorica').value = usario_loggeado.referencia_historia;
    document.getElementById('txt_fax').value = usario_loggeado.fax;

};

if (userid != null) {
    usario_loggeado = obtener_usuario_por_id_centro(userid);
    mostrar_datos(usario_loggeado);
}else{
    swal({
        type: 'error',
        title: 'Error',
        text: 'El usuario no ha iniciado sesion'
    });
    window.location.href='index.html';
}





